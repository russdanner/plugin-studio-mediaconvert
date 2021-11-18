# AWS MediaLive Console Plugin for Crafter CMS

Add a AWS MediaLive management console for live video encoding to your project.
The console allows content managers to start, stop and preview MediaLive channels from within Crafter Studio.

# Installation

Install the plugin via Studio's Plugin Management UI under Site Tools > Plugin Management.

# Usage

Add the following config to your site's Studio Site Config (/config/studio/site-config.xml)
```
    <awsmedialiveplugin>
        <apikey>A_AWS_API_KEY_GOES_HERE</apikey>
        <secret>A_AWS_SECRET_GOES_HERE</secret>
        <region>A_AWS_REGION_GOES_HERE</region>
    </awsmedialiveplugin>
```

Add the following config to your site's Studio UI Config (/config/studio/ui.xml)
```
 <widget id="org.rd.plugin.awsmedialiveconsole.components.reactComponent">
 	<plugin  site="{site}" 
 	         id="org.rd.plugin.awsmedialiveconsole" 
 	         type="apps" 
 	         name="awsmedialiveconsole" 
 	         file="index.modern.js" />
 </widget>  
```
