#fc-mapdata-generator

> For our www.fusioncharts.com, this program helps to generat map navigation data as JSON file format from a CSV.

## Dependencies
This program got only one dependencies i,e. "csv-array".


## Usage Guide
### Setup

The installation is just a command

```
 npm install .
```

After installing the package you can use the "generate.js" file as follows
```
generate.js inputfilename<CSV-file> outputfilename
  
```
### Example

test.csv file contains

```
L1 (LABEL),L1 (ID),L1 (CATGSTR),L2 (LABEL),L2 (ID),L2 (CATGSTR),L3 (LABEL),L3 (ID),L3 (CATGSTR),L4 (LABEL),L4 (ID),L4 (CATGSTR)
World,world-map,world-continents,World Map,world-map,world-continents,EMPTY,EMPTY,EMPTY,EMPTY,EMPTY,EMPTY
World,world-map,world-continents,World Map with countries,world-map-with-countries,world-continents,EMPTY,EMPTY,EMPTY,EMPTY,EMPTY,EMPTY
World,world-map,world-continents,World Map (8 Regions),world-map-8-regions,world-continents,EMPTY,EMPTY,EMPTY,EMPTY,EMPTY,EMPTY
```
Run this command from terminal
```node
node generate.js test.csv compiledFile.json
``` 

Output

compiledFile.json file contains
```json
{
 "mapdata": [ {
   "L1 (LABEL)": "World",
   "L1 (ID)": "world-map",
   "L1 (CATGSTR)": "world-continents",
   "L2 (LABEL)": "World Map",
   "L2 (ID)": "world-map",
   "L2 (CATGSTR)": "world-continents",
   "L3 (LABEL)": "EMPTY",
   "L3 (ID)": "EMPTY",
   "L3 (CATGSTR)": "EMPTY",
   "L4 (LABEL)": "EMPTY",
   "L4 (ID)": "EMPTY",
   "L4 (CATGSTR)": "EMPTY"
  }, {
   "L1 (LABEL)": "World",
   "L1 (ID)": "world-map",
   "L1 (CATGSTR)": "world-continents",
   "L2 (LABEL)": "World Map with countries",
   "L2 (ID)": "world-map-with-countries",
   "L2 (CATGSTR)": "world-continents",
   "L3 (LABEL)": "EMPTY",
   "L3 (ID)": "EMPTY",
   "L3 (CATGSTR)": "EMPTY",
   "L4 (LABEL)": "EMPTY",
   "L4 (ID)": "EMPTY",
   "L4 (CATGSTR)": "EMPTY"
  } ]
}
