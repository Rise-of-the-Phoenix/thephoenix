import random
import pandas as pd
import requests
import json

#api-endpoint
api = "https://yab6hygijj.execute-api.us-east-1.amazonaws.com/ai/create_record"

soils = ["loamy", "sand", "clay"]

#function to generate random integer
def random_integer(min_val=1, max_val=100):
  return random.randint(min_val, max_val)

#function to generate random ph value
def random_ph(min_val=0.0, max_val=10.0):
  return round(random.uniform(min_val, max_val), 2)

#function to select random soil type
def soil_type(soils):
  return random.choice(soils)

#function to increment record id
record = 141515123
def record_id(record):
    return record + 1
  
#generate random data 100 times
data_list = []

for _ in range (10):
  
  data  = {
   "record_id" :  record_id(record),
      "data":{
    "nitrogen" : f'{random_integer(25, 125)}mg/kg',
    "phosphorus" : f'{random_integer(19, 49)}mg/kg',
    "potassium" : f'{random_integer(100, 250)}mg/kg',
    "ph" : random_ph(1, 10),
    "water_level" : f'{random_integer(1, 100)}%',
    "soil_type" : soil_type(soils)
    }
  }
  data_list.append(data)
  
###
for data in data_list:
  r = requests.post(url=api, data=json.dumps(data))
  pastebin_url = r.text
  print("The pastebin URL is:%s" % pastebin_url)