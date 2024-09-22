"use client";
import React, { useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
 
function SubmitButton() {

    const [cropSuggestion, setCropSuggestion] = useState('');
    const [soilImprovements, setSoilImprovements] = useState('');
    const [nitrogenArray, setNitrogenArray] = useState<number[]>([]);
    const [phosphorusArray, setPhosphorusArray] = useState<number[]>([]);
    const [potassiumArray, setPotassiumArray] = useState<number[]>([]);
    const [phArray, setPhArray] = useState<number[]>([]);
    const [soilTypeArray, setSoilTypeArray] = useState<number[]>([]);
    const [waterLevelArray, setWaterLevelArray] = useState<number[]>([]);
   
    // const [chatAI, setChatAI] = useState('');
    // const [chatUser, setChatUser] = useState('');
    
    const fetchData = async () => {
        try {
            const data = {
            record_id: localStorage.getItem('phoneNumber'),
            data: {
                nitrogen: `${(document.getElementById('outlined-adornment-nitrogen') as HTMLInputElement)?.value || ''}mg/kg`,
                phosphorus: `${(document.getElementById('outlined-adornment-phosphorus') as HTMLInputElement)?.value || ''}mg/kg`,
                potassium: `${(document.getElementById('outlined-adornment-potassium') as HTMLInputElement)?.value || ''}mg/kg`,
                ph: (document.getElementById('outlined-adornment-ph') as HTMLInputElement)?.value || '',
                soil_type: (document.querySelector('select')?.value || ''),
                water_level: `${(document.getElementById('outlined-adornment-water') as HTMLInputElement)?.value || ''}%`,
            }
            };

            const record = await fetch('https://yab6hygijj.execute-api.us-east-1.amazonaws.com/ai/create_record', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            });
            const recordResult = await record.json();
            const recordData = await recordResult.data;
            
            recordData.forEach((item: any) => {
            item.nitrogen = parseInt(item.nitrogen.replace('mg/kg', ''), 10);
            item.phosphorus = parseInt(item.phosphorus.replace('mg/kg', ''), 10);
            item.potassium = parseInt(item.potassium.replace('mg/kg', ''), 10);
            item.water_level = parseInt(item.water_level.replace('%', ''), 10);
            });

            setNitrogenArray(recordData.map((item: any) => item.nitrogen));
            setPhosphorusArray(recordData.map((item: any) => item.phosphorus));
            setPotassiumArray(recordData.map((item: any) => item.potassium));
            setPhArray(recordData.map((item: any) => item.ph));
            setSoilTypeArray(recordData.map((item: any) => item.soil_type));
            setWaterLevelArray(recordData.map((item: any) => item.water_level));
            
            const response = await fetch('https://yab6hygijj.execute-api.us-east-1.amazonaws.com/ai/recommendations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
              });
            
              const result = await response.json();
              console.log(result);
              setCropSuggestion(result.ai_response.cropRecommendations.join('\n'));
              setSoilImprovements(result.ai_response.soilImprovements.join('\n'));
            //   const userMessages = result.chat_history
            //     .filter((message: any) => message.role === 'user')
            //     .map((message: any) => message.content.map((content: any) => content.text).join('\n'))
            //     .join('\n');
            //   const assistantMessages = result.chat_history
            //     .filter((message: any) => message.role === 'assistant')
            //     .map((message: any) => message.content.map((content: any) => content.text).join('\n'))
            //     .join('\n');
            //   setChatAI(assistantMessages);
            //   setChatUser(userMessages);
            } catch (error) {
              console.error('There was a problem with the fetch operation:', error);
            }
        };

        return (
            <div>
                <button class="btn btn-success btn-md" onClick={fetchData} id="getrecon">
                    Get Recommendations
                </button>
                {(cropSuggestion || soilImprovements) && (
                    <div className="bg-yellow-900 rounded-lg p-4 border border-green-800 mx-auto" style={{ maxWidth: 'fit-content' }}>
                        {cropSuggestion && (
                            <div className="mr-4">
                                <label className="block text-lg font-medium text-gray-700">Crop Recommendations</label>
                                <textarea value={cropSuggestion} className="mt-2 p-2 w-full h-48" readOnly />
                            </div>
                        )}
                        {soilImprovements && (
                            <div>
                                <label className="block text-lg font-medium text-gray-700">Soil Improvements</label>
                                <textarea value={soilImprovements} className="mt-2 p-2 w-full h-48" style={{ width: '200%' }} readOnly />
                            </div>
                        )}
                    </div>
                )}
                {(nitrogenArray.length > 0 && phosphorusArray.length > 0 && potassiumArray.length > 0) && (
                    <div className="bg-yellow-100 rounded-lg p-4 border border-green-800 mx-auto" style={{ maxWidth: 'fit-content' }}>
                        <LineChart
                            width={500}
                            height={300}
                            sx={{ backgroundColor: 'cream' }}
                            series={[
                                { data: nitrogenArray, label: 'N' },
                                { data: phosphorusArray, label: 'P' },
                                { data: potassiumArray, label: 'K'}
                            ]}
                            xAxis={[{ scaleType: 'point', data: nitrogenArray.map((_, index) => `${index + 1}`) }]}
                        />
                    </div>
                )}
            </div>
        )

}



export default SubmitButton;

// return <button 
//   className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//   onClick={async () => {
//     const data = {
//   nitrogen: (document.querySelector('input[placeholder="Nitrogen"]') as HTMLInputElement).value,
//   phosphorus: (document.querySelector('input[placeholder="Phosphorus"]') as HTMLInputElement).value,
//   potassium: (document.querySelector('input[placeholder="Potassium"]') as HTMLInputElement).value,
//   ph: (document.querySelector('input[placeholder="Ph"]') as HTMLInputElement).value,
//   soil_type: (document.querySelector('select')?.value || ''),
//   water_level: (document.querySelector('input[placeholder="Water Level"]') as HTMLInputElement).value,
//     };

//     try {
//   const response = await fetch('https://3br1dt5rr1.execute-api.us-east-1.amazonaws.com/test/recommendations', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const result = await response.json();
//   console.log(result);
//     } catch (error) {
//   console.error('There was a problem with the fetch operation:', error);
//     }
//   }}
// >
//   Submit
// </button>