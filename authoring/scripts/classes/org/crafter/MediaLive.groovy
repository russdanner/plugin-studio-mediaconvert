package org.apex

@Grab(group='org.imgscalr',  module='imgscalr-lib', version='4.1')
@Grab(group='com.amazonaws', module='aws-java-sdk-rekognition', version='1.12.29')


import groovy.json.*

import java.util.List
import java.util.HashSet
import java.io.File
import java.io.FileInputStream
import java.io.InputStream
import java.nio.ByteBuffer

import groovy.io.FileType
import java.awt.image.BufferedImage
import javax.imageio.ImageIO

import org.imgscalr.Scalr

import com.amazonaws.auth.*
import com.amazonaws.util.IOUtils
import com.amazonaws.services.rekognition.*
import com.amazonaws.services.rekognition.model.DetectTextRequest
import com.amazonaws.services.s3.model.S3Object
import com.amazonaws.services.rekognition.model.Image
import com.amazonaws.services.rekognition.model.DetectTextResult
import com.amazonaws.services.rekognition.AmazonRekognition
import com.amazonaws.services.rekognition.AmazonRekognitionClientBuilder
import com.amazonaws.services.rekognition.model.AmazonRekognitionException
import com.amazonaws.services.rekognition.model.Image
import com.amazonaws.services.rekognition.model.S3Object
import com.amazonaws.services.rekognition.model.DetectTextRequest
import com.amazonaws.services.rekognition.model.DetectTextResult
import com.amazonaws.services.rekognition.model.TextDetection
import com.amazonaws.services.s3.AmazonS3ClientBuilder
import com.amazonaws.services.s3.model.ListObjectsV2Request
import com.amazonaws.services.s3.model.CopyObjectRequest
import com.amazonaws.services.s3.model.CopyObjectResult
import com.amazonaws.services.s3.model.ObjectMetadata
import com.amazonaws.services.s3.model.PutObjectRequest
import com.amazonaws.services.rekognition.model.Celebrity
import com.amazonaws.services.rekognition.model.RecognizeCelebritiesRequest;
import com.amazonaws.services.rekognition.model.RecognizeCelebritiesResult;

public class ImageSort {

    def PHOTOS_PATH = "/Users/rdanner/crafter-installs/next/craftercms/crafter-authoring/data/repos/sites/qr-image-sort/sandbox/static-assets/test-images"
    String bucket = "motopic";
    def accessKey = "AKIASM5NX5EXWL7NBSHO"
    def secretKey = "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"
    def region = "us-east-1"

    /**
     * read index from path
     */
    def readIndex(path) {
        File file = new File(path+"/index.json")
        def json = file.text
        return json
    }

    /**
     * write index index to path
     */
    def saveIndex(path, index) {
        File file = new File(path+"/index.json")
        file.write index
        return index
    }

    /**
     * Given a path get all images on local storage
     */ 
    def getFileList(path) {
        def list = []
        def dir = new File(path)
        dir.eachFileRecurse (FileType.FILES) { file ->
            if(!file.name.contains(".DS_Store") 
            && !file.name.contains(".json")) {
                def photo = [:]
                photo.name = file.name
                photo.path = file.path

                list.add(photo)
            }
        }

        return list
    }

    def processPhotosForTags(inputList, tagType) {
        def processedResults = []

        def i=1
        inputList.each { sourcePhoto ->
            def result = [:]
            System.out.println("processing ($i of $inputList.size) : "+sourcePhoto.path)
            result.name = sourcePhoto.name 
            result.sourcePath = sourcePhoto.path

            def thread = Thread.start {
                System.out.println("starting thread for image: $sourcePhoto.name")
                result.bikes = awsRekog(sourcePhoto.path, sourcePhoto.name, tagType) 
            }
            
            processedResults.add(result)
            i++
            sleep(250)
        }


        return processedResults
    }

    def indexPhotosByTags(results) {
        def index = [:] 
        results.each { result ->
            
            if(result.bikes 
            && result.bikes.size > 0) {

                result.bikes.each { bike ->
                    def entries = index.get(bike.number)
                    
                    entries = (entries != null) ? entries : [:]
                    entries.put(result.name, result)
                    index.put(bike.number, entries)
                }
            }
            else {
                result.bikes = []
                def entries = index.get("unknown")
                entries = (entries != null) ? entries : [:]
                entries.put(result.name, result)
                index.put("unknown", entries)
            }
        }

        return index
    }

    /**
     * Given a photo, make a thumbnail
     */
    def makeThumb(sourcePhoto) {
           
        byte[] scaledImageBytes = null;

        try {        
            //original buffered image
            def sourceFile = new File(sourcePhoto.path)
            def inputStream = new FileInputStream(sourceFile)
            def originalImage = ImageIO.read(inputStream)
            
            //scale the image using the imgscalr library
            def scaledImage = Scalr.resize(originalImage, 300)
            
            //convert BufferedImage to byte array
            def baos = new ByteArrayOutputStream()
            ImageIO.write(scaledImage, "jpg", baos)
            baos.flush()
            scaledImageBytes = baos.toByteArray()
            baos.close()

            def thumbPath = sourcePhoto.path.replace(sourcePhoto.name, "thumb/"+sourcePhoto.name)
            System.out.println("Make Thumb image @:"+thumbPath)

            def file = new File(thumbPath)

            def opStream = new FileOutputStream(file);
                opStream.write(scaledImageBytes);
                opStream.flush();    
        } 
        catch (Exception e) {
            System.out.println("Scaling image failed. "+ e);
        }
    }

    /**
     * Given a photo on local storage, put it in S3
     */
    def putFileInS3(sourcePhoto) {
        System.out.println("Uploading image :"+sourcePhoto.name)
        AWSCredentialsProvider credProvider = new AWSStaticCredentialsProvider(
                new BasicAWSCredentials(accessKey, secretKey))

        def client = AmazonS3ClientBuilder.standard().withCredentials(credProvider).withRegion(region).build()
        def sourceFile = new File(sourcePhoto.path)
        def inputStream = new FileInputStream(sourceFile)
        def imageBytes = ByteBuffer.wrap(IOUtils.toByteArray(inputStream))
        def objectMetadata = new ObjectMetadata()
        objectMetadata.setContentLength(imageBytes.capacity())

        def request = new PutObjectRequest(bucket, sourcePhoto.name, sourceFile)
            
        client.putObject(request) //, RequestBody.fromByteBuffer(imageBytes)
    }

    /**
     * Given a filename in S3, dectect text or celebs
     */
    def awsRekog(path, fileName, detect) {
        String photo = fileName

        AWSCredentialsProvider credProvider = new AWSStaticCredentialsProvider(
                new BasicAWSCredentials(accessKey, secretKey))
            def arek = AmazonRekognitionClientBuilder.standard().withCredentials(credProvider).withRegion(region).build()
            def s3 = AmazonS3ClientBuilder.standard().withCredentials(credProvider).withRegion(region).build()

        AmazonRekognition rekognitionClient = AmazonRekognitionClientBuilder.standard().withCredentials(credProvider).withRegion(region).build();

        def inputStream = new FileInputStream(new File(path))
        def imageBytes = ByteBuffer.wrap(IOUtils.toByteArray(inputStream))

        //def image = new Image().withBytes(imageBytes)//.withName(photo)
        def image = new Image().withS3Object(new S3Object().withName(photo).withBucket(bucket))

        def photos = []
        
        if(detect.equals("text")) {
            DetectTextRequest request = new DetectTextRequest().withImage(image);

            try {
                DetectTextResult result = rekognitionClient.detectText(request);
                List<TextDetection> textDetections = result.getTextDetections();
             
                for(TextDetection text: textDetections) {
                    def detectedText = text.getDetectedText()
                    if(detectedText.isNumber()) {
                        System.out.println("Detected lines and words for " + imageMatch + " " + detectedText);
                        def imageMatch = [:]
                        imageMatch.tag = detectedText
                        imageMatch.confidence = text.getConfidence()

                        photos.add(imageMatch)    
                    }
                }
            }
            catch(err) {
                code = ""+err
            }
        }
        else if(detect.equals("celebs")) {
            RecognizeCelebritiesRequest request = new RecognizeCelebritiesRequest().withImage(image)
            RecognizeCelebritiesResult result=rekognitionClient.recognizeCelebrities(request);

            List<Celebrity> celebs=result.getCelebrityFaces();
          
            for (Celebrity celebrity: celebs) {
                def imageMatch = [:]
                imageMatch.tag = celebrity.getName()
                imageMatch.confidence = 100
                imageMatch.add(imageMatch)    
           }
        }


        return photos
     }    
}