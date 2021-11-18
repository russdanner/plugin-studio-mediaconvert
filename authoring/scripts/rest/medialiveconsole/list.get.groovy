import org.rd.plugin.awsmedialiveconsole.MediaLiveConsole

def siteService = applicationContext["configurationService"]
def siteId = request.getParameter("siteId")

def mediaLiveConsoleServices = new MediaLiveConsole(siteService)
def list = mediaLiveConsoleServices.listChannels(siteId)

return list
