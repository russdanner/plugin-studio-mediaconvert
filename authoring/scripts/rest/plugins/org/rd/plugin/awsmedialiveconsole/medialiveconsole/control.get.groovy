import plugins.org.rd.plugin.awsmedialiveconsole.MediaLiveConsole

def channelId = params.channelId
def action = params.action

// check for channelId, valid action etc
def mediaLiveConsoleServices = new MediaLiveConsole(pluginConfig)

if("stop".equals(action)) {
	mediaLiveConsoleServices.startChannel(channelId, siteId)
}
else if("start".equals(action)) {
	mediaLiveConsoleServices.stopChannel(channelId, siteId)
}

return action
