# AWS MediaLive Console Plugin for Crafter CMS

Add a AWS MediaLive management console for live encoding to your project.

# Installation

Install the plugin via Studio's Plugin Management UI under Site Tools > Plugin Management.

# Usage

Add the following config to your site studio Site Config (/config/studio/site-config.xml)
```
    <awsmedialiveplugin>
        <apikey>A_AWS_API_KEY_GOES_HERE</apikey>
        <secret>A_AWS_SECRET_GOES_HERE</secret>
        <region>A_AWS_REGION_GOES_HERE</region>
    </awsmedialiveplugin>
```