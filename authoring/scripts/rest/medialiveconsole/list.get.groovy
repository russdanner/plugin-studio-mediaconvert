@Grab(group='com.amazonaws', module='aws-java-sdk-medialive', version='1.12.99')

import com.amazonaws.auth.*
import com.amazonaws.auth.AWSCredentialsProvider
import com.amazonaws.services.medialive.AWSMediaLiveClientBuilder
import com.amazonaws.services.medialive.model.ListChannelsRequest
import com.amazonaws.services.medialive.model.StopChannelRequest
import com.amazonaws.services.medialive.model.StartChannelRequest

String bucket = "motopic";
def accessKey = "X"
def secretKey = "C"
def region = "us-east-1"

AWSCredentialsProvider credProvider = (AWSCredentialsProvider)(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
def mlClient = AWSMediaLiveClientBuilder.standard()
                        .withRegion(region)
                        .withCredentials(credProvider)
                        .build()

def list = mlClient.listChannels(new ListChannelsRequest())

// if(params.action=="start") {
// 	mlClient.startChannel(new StartChannelRequest().withChannelId("6087220"))	
// }
// else if(params.action=="stop") {
// 	mlClient.stopChannel(new StopChannelRequest().withChannelId("6087220"))
// }

return list
