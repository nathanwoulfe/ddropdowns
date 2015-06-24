# ddropdowns - string array relational mapping (aka pairs of dropdowns)

ddropdowns is an Umbraco property editor which allows content editors to add a little from column A and a little from column B, by way of dropdown pairs.

Source data for the dropdowns is defined as either a comma-delimited list or JSON object in the property editor prevalues.

The comma-delimited list will contain the desired values for the dropdown:

    "Red, Orange, Yellow, Green"

The JSON object will be formatted as such: 

    {id: sourceNodeId, alias: "sourcePropertyAlias"}

In the case of the JSON object, ddropdowns will use the id and alias to retrieve a property value, which should be of type `Umbraco.MultipleTextstring`.

The intention here is that a developer would create a config node with two `Umbraco.MultipleTextstring` properties, one for each dropdown - content authors can then set their own prevalue lists, without having to be granted access to the developer section of the back office.

If there is no requirement for content authors to manage prevalues, the comma-delimited config would suffice.

