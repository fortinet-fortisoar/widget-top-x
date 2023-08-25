| [Home](../README.md) |
|----------------------|

# Installation
1. To install a widget, click **Content Hub** > **Discover**.
2. From the list of widgets that appears, search for and select **Top X** widget.
3. Click the **Top X** widget card.
4. Click **Install** on the lower part of the screen to begin installation.

# Configuration

The following sections lay out information necessary to customize this widget.

## Top X Widget Settings

### Data Source Selection

| Fields             | Description                                                                            |
|--------------------|----------------------------------------------------------------------------------------|
| Title              | Specify the heading or title of the visual depiction of each record node in the group. |
| Select Data Source | Populate the records with FortiSOAR&trade; modules or data from a single custom module |
| Max Record Limit   | Specify the maximum number of records for this widget to display.                      |
| Select Module      | Select the module from which to fetch the JSON data                                    |

## Record Containing JSON Data

| Fields                                     | Description                                                                                                                                                                          |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Filter Record Which Contains The JSON Data | Add conditions to retrieve only one record. If multiple records match the conditions given, the first record is considered.                                                          |
| Select field for data source               | Select the field(Column) of the module which contains the `JSON` data                                                                                                                |
| Enter the key of object to be rendered.    | Leave blank if the JSON field's record has data in the required format, else specify the key containing the relevant data.                                                           |
**Advanced Settings**
| Update Content On Receiving Event          | Enable to listen to an event. Once enabled, specify the event name for the widget to respond. Event name should be exactly same as the event name specified in the broadcast widget. |
| Event Name                                 | Enter the event name, the event name should be similar to the event name mentioned in the broadcasting widget                                                                        |

##  Count of Records Across Module 

| Fields                          | Description                                                                                                                                                |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Filter Record                   | Add conditions to retrieve only the records meeting the filter conditions. If multiple records match the conditions given, the first record is considered. |
| Select Picklist or Lookup Field | Select the field whose values are to be displayed by this widget. Only fields of type *Lookup* or *picklist* are displayed.                                |

| [Usage](./usage.md) |
|---------------------|