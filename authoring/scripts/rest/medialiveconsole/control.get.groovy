def mediaLiveConsoleServices = applicationContext["mediaLiveConsoleServices"]
def channelId = params.channelId

// check for channelId, valid action etc

if(params.action=="start") {
	mediaLiveConsoleServices.startChannel(channelId)
}
else if(params.action=="stop") {
	mediaLiveConsoleServices.stopChannel(channelId)
}

return params.action
