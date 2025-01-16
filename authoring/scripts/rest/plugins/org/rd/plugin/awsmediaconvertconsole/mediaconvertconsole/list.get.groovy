import plugins.org.rd.plugin.awsmediaconvertconsole.MediaConvertConsole

def mediaConvertConsoleServices = new MediaConvertConsole(pluginConfig)

def list = mediaConvertConsoleServices.listJobs()

return list
