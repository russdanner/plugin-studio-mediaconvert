package plugins.org.rd.plugin.awsmediaconvertconsole

@Grab(group='software.amazon.awssdk', module='mediaconvert', version='2.29.52', initClass=false)
@Grab(group='software.amazon.awssdk', module='auth', version='2.29.52', initClass=false)
@Grab(group='software.amazon.awssdk', module='regions', version='2.29.52', initClass=false)

import software.amazon.awssdk.auth.credentials.AwsBasicCredentials
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.mediaconvert.MediaConvertClient
import software.amazon.awssdk.services.mediaconvert.model.*
import software.amazon.awssdk.services.mediaconvert.model.JobSettings
import software.amazon.awssdk.services.mediaconvert.model.OutputGroupSettings

/**
 * This class is a service class that maps console functionality to AWS MediaConvert services
 */
public class MediaConvertConsole {

    MediaConvertClient mediaConvertClient
    def pluginConfig

    /**
     * Constructor
     */
    MediaConvertConsole(pluginConfig) {
        this.pluginConfig = pluginConfig
    }

    /**
     * Look up credentials for AWS from the site
     * @return object containing credentials
     */
    def lookupAwsMediaCredentials() {
        def creds = [region: "", apiKey: "", apiSecret: "", endpoint: ""]

        creds.region = pluginConfig.getString("awsRegion")
        creds.apiKey = pluginConfig.getString("awsApiKey")
        creds.apiSecret = pluginConfig.getString("awsApiSecret")
        creds.endpoint = pluginConfig.getString("awsMediaConvertEndpoint")

        return creds
    }

    /**
     * Create and return the MediaConvert client. If one does not exist, create it.
     */
    def createMediaConvertClient() {
        if (this.mediaConvertClient == null) {
            def creds = this.lookupAwsMediaCredentials()

            AwsBasicCredentials awsCreds = AwsBasicCredentials.create(creds.apiKey, creds.apiSecret)
            StaticCredentialsProvider credProvider = StaticCredentialsProvider.create(awsCreds)

            this.mediaConvertClient = MediaConvertClient.builder()
                    .endpointOverride(URI.create(creds.endpoint))
                    .region(Region.of(creds.region))
                    .credentialsProvider(credProvider)
                    .build()
        }

        return this.mediaConvertClient
    }

    /**
     * List the available AWS MediaConvert jobs
     */
    def listJobs() {
        this.createMediaConvertClient()
        def listJobRequest = ListJobsRequest.builder().build()

        def listJobsResponse = this.mediaConvertClient.listJobs(listJobRequest)
        def jobs = []

        listJobsResponse.jobs().each { job ->
            def jobDetails = [
                id         : job.id(),
                settings   : extractJobSettings(job.settings()),
                createdAt: job.createdAt(),
                status     : job.statusAsString(),
                jobPercentComplete: job.jobPercentComplete()
            ]
            jobs.add(jobDetails)
        }

        return [
            jobs: jobs
        ]
    }

    /**
     * Extracts job settings such as inputs and outputs
     * @param settings Job settings object
     * @return A map with relevant settings information
     */
    def extractJobSettings(JobSettings settings) {
        def extractedSettings = [:]

        // Extract input settings
        def inputs = settings.inputs().collect { input ->
            [
                fileInput       : input.fileInput(),
                audioSelectors  : input.audioSelectors().keySet(),
                videoSelector   : input.videoSelector()?.colorSpace(),
                timecodeSource  : input.timecodeSourceAsString()
            ]
        }

        // Extract output group settings
        def outputGroups = settings.outputGroups().collect { outputGroup ->
            [
                name : outputGroup.name(),
                type : outputGroup.outputGroupSettings().getClass().simpleName
            ]
        }

        extractedSettings.inputs = inputs
        extractedSettings.outputGroups = outputGroups

        return extractedSettings
    }
}
