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
    def siteService

    /**
     * constructor
     */
    MediaLiveConsole(siteService) {
        this.siteService = siteService
    }

    /**
     * return the media live client. If one does not exist for the instance, create it.
     */
    def createMediaLiveClient() {
        // look these things up

        if(this.mediaLiveClient == null) {
            def siteConfiguration = this.siteService.getConfigurationAsDocument("test", "studio", "/site-config.xml", "")

            def region = siteConfiguration.selectSingleNode("//awsmedialiveplugin/region").getText()
            def accessKey = siteConfiguration.selectSingleNode("//awsmedialiveplugin/apikey").getText()
            def secretKey = siteConfiguration.selectSingleNode("//awsmedialiveplugin/secret").getText()

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