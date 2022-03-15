package plugins.org.rd.plugin.awsmediaconvertconsole

@Grab(group='com.amazonaws', module='aws-java-sdk-mediaconvert', version='1.12.99', initClass=false)

import com.amazonaws.auth.*
import com.amazonaws.client.builder.AwsClientBuilder
import com.amazonaws.auth.AWSCredentialsProvider
import com.amazonaws.services.mediaconvert.AWSMediaConvertClientBuilder
import com.amazonaws.services.mediaconvert.model.ListJobsRequest

/**
 * This class is a service class that maps console functionality to AWS MediaConvert services
 */
public class MediaConvertConsole {

    def mediaConvertClient
    def pluginConfig

    /**
     * constructor
     */
    MediaConvertConsole(pluginConfig) {
        this.pluginConfig = pluginConfig
    }

    /**
     * Look up credentials for AWS from the site
     * @param siteId
     * @return object containing credentials
     */
    def lookupAwsMediaCredentials() {
        def creds = [region: "", apiKey: "", apiSecret: ""]

        creds.region = pluginConfig.getString("awsRegion")
        creds.apiKey = pluginConfig.getString("awsApiKey")
        creds.apiSecret = pluginConfig.getString("awsApiSecret")
        creds.endpoint = pluginConfig.getString("awsMediaConvertEndpoint")

        return creds
    }

    /**
     * return the media live client. If one does not exist for the instance, create it.
     * @param siteId
     */
    def createMediaConvertClient(siteId) {

        if(this.mediaConvertClient == null) {
            def creds = this.lookupAwsMediaCredentials()
            def endpoint = creds.endpoint
            AWSCredentialsProvider credProvider = (AWSCredentialsProvider) (new AWSStaticCredentialsProvider( new BasicAWSCredentials(creds.apiKey, creds.apiSecret)))
            this.mediaConvertClient = AWSMediaConvertClientBuilder.standard().withCredentials(credProvider).withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endpoint, creds.region)).build();
        }

        return this.mediaConvertClient
    }

    /**
     * list the available AWS MediaConvert channels
     * @param siteId Id of the site
     */
    def listJobs(siteId) {
        def jobResults = []

         this.createMediaConvertClient(siteId)
         def listJobReq = new ListJobsRequest()
         jobResults = this.mediaConvertClient.listJobs(listJobReq)

        return jobResults
    }
}