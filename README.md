# AWS MediaConvert Console Plugin for CrafterCMS

Add a AWS MediaConvert management console for live video encoding to your project.
The console allows content managers to monitor MediaConvert Jobs from within Crafter Studio.

# Installation

Install the plugin via Studio's Plugin Management UI under Site Tools > Plugin Management.

**Required parameters:**

- AWS Region where you will run MediaConvert
- AWS MediaConvert Endpoint

Ex: `/config/plugins/org/rd/plugin/awsmediaconvertconsole/config.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<config>
    <awsRegion>us-east-1</awsRegion>
    <awsMediaConvertEndpoint>https://xxxxxx.mediaconvert.us-east-1.amazonaws.com</awsMediaConvertEndpoint>
</config>
```

**Optional parameters:**

- AWS API Key with access to MediaConvert
- AWS API Secret with access to MediaConvert

Ex: `/config/plugins/org/rd/plugin/awsmediaconvertconsole/config.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<config>
    <awsApiKey>${enc:CCE-V1#xxxx}</awsApiKey>
    <awsApiSecret>${enc:CCE-V1#xxxx}</awsApiSecret>
    <awsRegion>us-east-1</awsRegion>
    <awsMediaConvertEndpoint>https://xxxxxx.mediaconvert.us-east-1.amazonaws.com</awsMediaConvertEndpoint>
</config>
```

*Note: If credentials are not provided, the plugin uses the AWS default profile installed in the server.*