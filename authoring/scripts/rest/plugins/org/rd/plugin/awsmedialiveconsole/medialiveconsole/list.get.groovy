import plugins.org.rd.plugin.awsmedialiveconsole.MediaLiveConsole

def mediaLiveConsoleServices = new MediaLiveConsole(pluginConfig)
def list = mediaLiveConsoleServices.listChannels(siteId)

return list
