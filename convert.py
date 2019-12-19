import json
import codecs

converted_events = {}
converted_events['events'] = {}
titles = []

with open('gazette.json', 'r',encoding='utf-8-sig') as f:
    events_dict = json.load(f)

for event in events_dict:
    if event['title'] not in titles:
        current = {}
        current['eventID'] = event['eventID']
        current['title'] = event['title']
        titles.append(event['title'])
        current['featured'] = False
        current['description'] = event['description']
        current['location'] = event['location']
        current['link'] = event['webLink']
        current['startDateTime'] = event['startDateTime']
        current['endDateTime'] = event['endDateTime']
        current['dateTimeFormatted'] = event['dateTimeFormatted']
        current['allDay'] = event['allDay']
        current['thumbnail'] = event['eventImage']['url']
        current['largeImage'] = event['detailImage']['url']
        current['cost'] = "Free"
        current['sponsor'] = None
        current['contactInfo'] = None
        
        

        for field in event['customFields']:
            if field['fieldID'] == 15202:
                current['categories'] = field['value'].split(", ")
            elif field['fieldID'] == 15227:
                current['sponsor'] = field['value']
            elif field['fieldID'] == 15228:
                current['cost'] = field['value']
            elif field['fieldID'] == 15225:
                current['contactInfo'] = field['value']

        converted_events['events'][event['eventID']] = current

with open('database.json', 'w') as outfile:
    json.dump(converted_events,  outfile, indent=2, sort_keys=False,)