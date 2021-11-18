import  org.rd.studio.aws.medialive.MediaLiveConsole

def channelId = request.getParameter("channelId")
def siteId = request.getParameter("siteId")

// check for channelId, valid action etc

def siteService = applicationContext["configurationService"]
def mediaLiveConsoleServices = new MediaLiveConsole(siteService)

if(params.action=="start") {
	mediaLiveConsoleServices.startChannel(channelId, siteId)
}
else if(params.action=="stop") {
	mediaLiveConsoleServices.stopChannel(channelId, siteId)
}

return params.action
