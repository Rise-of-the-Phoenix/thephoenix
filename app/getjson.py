import requests
import json

url = "https://3br1dt5rr1.execute-api.us-east-1.amazonaws.com/test/recommendations"

payload = json.dumps({
  "nitrogen": "1mg/kg",
  "phosphorus": "1mg/kg",
  "potassium": "1mg/kg",
  "ph": "1",
  "water_level": "1",
  "soil_type": "loamy"
})
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

dictionary = json.loads(response.text)
cropRec = str(dictionary['ai_response']['cropRecommendations']).strip('[').strip(']').strip("'")
soilImp = str(dictionary['ai_response']['soilImprovements']).strip('[').strip(']').strip("'")

print(soilImp)


