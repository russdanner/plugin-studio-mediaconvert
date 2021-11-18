package org.rd.plugin.awsmedialiveconsole

@Grab(group='com.amazonaws', module='aws-java-sdk-medialive', version='1.12.99')

import com.amazonaws.auth.*
import com.amazonaws.auth.AWSCredentialsProvider
import com.amazonaws.services.medialive.AWSMediaLiveClientBuilder
import com.amazonaws.services.medialive.model.ListChannelsRequest
import com.amazonaws.services.medialive.model.StopChannelRequest
import com.amazonaws.services.medialive.model.StartChannelRequest

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
        def region = "us-east-1"
        def accessKey = "AKIASM5NX5EXZNYUKRVZ"
        def secretKey = "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"

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