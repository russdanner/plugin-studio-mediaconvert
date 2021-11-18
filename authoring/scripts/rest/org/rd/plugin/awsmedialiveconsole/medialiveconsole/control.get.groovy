import  org.rd.studio.aws.medialive.MediaLiveConsole

def channelId = params.channelId

// check for channelId, valid action etc

def siteService = applicationContext["configurationService"]
def mediaLiveConsoleServices = new MediaLiveConsole(siteService)

if(params.action=="start") {
	mediaLiveConsoleServices.startChannel(channelId)
}
else if(params.action=="stop") {
	mediaLiveConsoleServices.stopChannel(channelId)
}

return params.action
