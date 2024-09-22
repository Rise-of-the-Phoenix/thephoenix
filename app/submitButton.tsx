"use client";
import React, { useState } from "react";
 
function SubmitButton() {

    const [suggestion, setSuggestion] = useState('');
    
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
            console.log("WOWOWOWOWOWOWOW EA*IUGWDGAWIUDGAWIUDGIWA");
            console.log(data.soil_type);

            const response = await fetch('https://3br1dt5rr1.execute-api.us-east-1.amazonaws.com/test/recommendations', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
                
              const result = await response.json();
              console.log(result);
              setSuggestion(JSON.stringify(result, null, 2));
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
                <textarea value={suggestion} className="mt-4 p-2 w-full h-48" readOnly />
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