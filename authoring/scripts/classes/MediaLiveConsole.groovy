package org.rd.plugin.awsmedialiveconsole

@Grab(group='com.amazonaws', module='aws-java-sdk-medialive', version='1.12.99')
@Grab(group='com.amazonaws', module='aws-java-sdk-mediapackage', version='1.12.99')

import com.amazonaws.auth.*
import com.amazonaws.auth.AWSCredentialsProvider
import com.amazonaws.services.medialive.AWSMediaLiveClientBuilder
import com.amazonaws.services.medialive.model.ListChannelsRequest
import com.amazonaws.services.medialive.model.StopChannelRequest
import com.amazonaws.services.medialive.model.StartChannelRequest

import com.amazonaws.services.mediapackage.AWSMediaPackageClientBuilder
import com.amazonaws.services.mediapackage.AWSMediaPackageClient
import com.amazonaws.services.mediapackage.model.ListChannelsRequest
import com.amazonaws.services.mediapackage.model.DescribeChannelRequest
import com.amazonaws.services.mediapackage.model.ListOriginEndpointsRequest

/**
 * This class is a service class that maps console functionality to AWS MediaLive services
 */
public class MediaLiveConsole {

    def mediaLiveClient
    def mediaPackageClient
    def siteService

    /**
     * constructor
     */
    MediaLiveConsole(siteService) {
        this.siteService = siteService
    }

    /**
     * Look up credentials for AWS from the site
     * @param siteId
     * @return object containing credentials
     */
    def lookupAwsMediaCredentials(siteId) {
        def creds = [region: "", accessKey: "", secretKey: ""]
        def siteConfiguration = this.siteService.getConfigurationAsDocument(siteId, "studio", "/site-config.xml", "")

        creds.region = siteConfiguration.selectSingleNode("//awsmedialiveplugin/region").getText()
        creds.accessKey = siteConfiguration.selectSingleNode("//awsmedialiveplugin/apikey").getText()
        creds.secretKey = siteConfiguration.selectSingleNode("//awsmedialiveplugin/secret").getText()

        return creds
    }

    /**
     * return the media live client. If one does not exist for the instance, create it.
     * @param siteId
     */
    def createMediaLiveClient(siteId) {

        if(this.mediaLiveClient == null) {
            def creds = this.lookupAwsMediaCredentials(siteId)
            AWSCredentialsProvider credProvider = (AWSCredentialsProvider) (new AWSStaticCredentialsProvider( new BasicAWSCredentials(creds.accessKey, creds.secretKey)))
            this.mediaLiveClient = AWSMediaLiveClientBuilder.standard().withRegion(creds.region).withCredentials(credProvider).build()
        }

        return this.mediaLiveClient
    }

    /**
     * return the media live client. If one does not exist for the instance, create it.
     * @param siteId
     */
    def createMediaPackageClient(siteId) {
        if(this.mediaPackageClient == null) {
            def creds = this.lookupAwsMediaCredentials(siteId)
            AWSCredentialsProvider credProvider = (AWSCredentialsProvider) (new AWSStaticCredentialsProvider( new BasicAWSCredentials(creds.accessKey, creds.secretKey)))
            this.mediaPackageClient = AWSMediaPackageClientBuilder.standard().withRegion(creds.region).withCredentials(credProvider).build()
        }

        return this.mediaPackageClient
    }

    /**
     * list the available AWS MediaLive channels
     * @param siteId Id of the site
     */
    def listChannels(siteId) {
        def channelResults = []

        def mlClient = this.createMediaLiveClient(siteId)
        def mpClient = this.createMediaPackageClient(siteId)
        def mlChannels = mlClient.listChannels(new com.amazonaws.services.medialive.model.ListChannelsRequest())

        mlChannels.channels.each { mlChannel ->
            def channelResult = [:]
            channelResult.id = mlChannel.id
            channelResult.name = mlChannel.name
            channelResult.state = mlChannel.state
            channelResult.destinations = mlChannel.destinations
            channelResult.previewURL = ""

            def firstDestination = mlChannel.destinations[0]

            if(firstDestination && firstDestination.mediaPackageSettings) {
                def mediaPackageDestinationId = firstDestination.mediaPackageSettings[0].channelId
                def channelEndpoint = mpClient.listOriginEndpoints(new ListOriginEndpointsRequest().withChannelId(mediaPackageDestinationId)).originEndpoints[0]

                if(channelEndpoint) {
                    channelResult.previewURL = channelEndpoint.url
                    channelResult.previewEndpoint = channelEndpoint
                }

            }

//def list = mpClient.describeChannel(new DescribeChannelRequest().withId("Live"))
//def list = mpClient.listOriginEndpoints(new ListOriginEndpointsRequest().withChannelId("Live")).originEndpoints[0].url
//def list = mpClient.listChannels(new ListChannelsRequest())

            channelResults.add(channelResult)
        }

        return channelResults
    }

    /**
     * Start a given channel
     * @param channelId channel to start
     * @param siteId Id of the site
     */
    def startChannel(channelId, siteId) {
        def mlClient = this.createMediaLiveClient(siteId)
        mlClient.startChannel(new StartChannelRequest().withChannelId(channelId))

        return true
    }

    /**
     * Stop a given channel
     * @param channelId channel to stop
     * @param siteId Id of the site
     */
    def stopChannel(channelId, siteId) {
        def mlClient = this.createMediaLiveClient(siteId)
        mlClient.stopChannel(new StopChannelRequest().withChannelId(channelId))

        return true
    }
}