"use client";
import React, { useState } from "react";
 
function SubmitButton() {

    const [cropSuggestion, setCropSuggestion] = useState('');
    const [soilImprovements, setSoilImprovements] = useState('');
    // const [chatAI, setChatAI] = useState('');
    // const [chatUser, setChatUser] = useState('');
    
    const fetchData = async () => {
        try {
            const data = {
                nitrogen: (document.getElementById('outlined-adornment-nitrogen') as HTMLInputElement)?.value || '',
                phosphorus: (document.getElementById('outlined-adornment-phosphorus') as HTMLInputElement)?.value || '',
                potassium: (document.getElementById('outlined-adornment-potassium') as HTMLInputElement)?.value || '',
                ph: (document.getElementById('outlined-adornment-ph') as HTMLInputElement)?.value || '',
                soil_type: (document.querySelector('select')?.value || ''),
                water_level: (document.getElementById('outlined-adornment-water') as HTMLInputElement)?.value || '',
            };

            const response = await fetch('https://3br1dt5rr1.execute-api.us-east-1.amazonaws.com/test/recommendations', {
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
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={fetchData}
                >
                    Get Recommendations
                </button>
                {(cropSuggestion || soilImprovements) && (
                    <div className="flex mt-4">
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