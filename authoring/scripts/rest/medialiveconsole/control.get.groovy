import org.rd.plugin.awsmedialiveconsole.MediaLiveConsole

def channelId = request.getParameter("channelId")
def siteId = request.getParameter("siteId")
def action = request.getParameter("action")
// check for channelId, valid action etc

def siteService = applicationContext["configurationService"]
def mediaLiveConsoleServices = new MediaLiveConsole(siteService)

if(action=="start") {
	mediaLiveConsoleServices.startChannel(channelId, siteId)
}
else if(action=="stop") {
	mediaLiveConsoleServices.stopChannel(channelId, siteId)
}

return action
