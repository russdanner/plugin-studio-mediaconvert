import org.rd.plugin.awsmedialiveconsole.MediaLiveConsole

def siteService = applicationContext["configurationService"]

def mediaLiveConsoleServices = new MediaLiveConsole(siteService)
def list = mediaLiveConsoleServices.listChannels()

return list