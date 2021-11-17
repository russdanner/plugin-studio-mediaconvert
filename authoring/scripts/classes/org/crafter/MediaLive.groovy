package org.rd.studio.aws.medialive

@Grab(group='com.amazonaws', module='aws-java-sdk-medialive', version='1.12.99')

/**
 * This class is a service class that maps console functionality to AWS MediaLive services
 */
public class MediaLiveConsole {

    def mediaLiveClient

    /**
     * return the media live client. If one does not exist for the instance, create it.
     */
    def createMediaLiveClient() {
        // look these things up
        def region = ""
        def accessKey = ""
        def secretKey = ""

        if(this.mediaLiveClient == null) {
            AWSCredentialsProvider credProvider = (AWSCredentialsProvider) (new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
            this.mediaLiveClient = AWSMediaLiveClientBuilder.standard().withRegion(region).withCredentials(credProvider).build()
        }
        return this.mediaLiveClient
    }

    /**
     * list the available AWS MediaLive channels
     */
    def listChannels() {
        def mlClient = this.createMediaLiveClient()
        def channels = mlClient.listChannels(new ListChannelsRequest())

        return channels
    }

    /**
     * Start a given channel
     * @param channelId channel to start
     */
    def startChannel(channelId) {
        def mlClient = this.createMediaLiveClient()
        mlClient.stopChannel(new StopChannelRequest().withChannelId(channelId))

        return true
    }

    /**
     * Stop a given channel
     * @param channelId channel to stop
     */
    def stoptChannel(channelId) {
        def mlClient = this.createMediaLiveClient()
        mlClient.stopChannel(new StopChannelRequest().withChannelId(channelId))

        return true
    }
}