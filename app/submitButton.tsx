"use client";
import React, { useEffect, useState } from 'react';
 
function SubmitButton() {

  const [suggestion, setSuggestion] = useState('');
    
    const fetchData = async () => {
        try {
            const data = {
                nitrogen: (document.querySelector('input[placeholder="Nitrogen"]') as HTMLInputElement).value,
                phosphorus: (document.querySelector('input[placeholder="Phosphorus"]') as HTMLInputElement).value,
                potassium: (document.querySelector('input[placeholder="Potassium"]') as HTMLInputElement).value,
                ph: (document.querySelector('input[placeholder="Ph"]') as HTMLInputElement).value,
                soil_type: (document.querySelector('select')?.value || ''),
                water_level: (document.querySelector('input[placeholder="Water Level"]') as HTMLInputElement).value,
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
              setSuggestion(JSON.stringify(result, null, 2)); 
              

                } catch (error) {
              console.error('There was a problem with the fetch operation:', error);
                }
        };

        return (
            <div>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={fetchData}>
                    Get Recommendations
                </button>
                <div class="row">
                  <div class="col-6" id="result">
                  <h5>Crop Recommendation</h5>
                    <textarea value={suggestion} className="mt-4 p-2 w-full h-48" readOnly />
                  </div>
                  <div class="col-6" id="result">
                  <h5>Soil Suggestion</h5>
                    <textarea value={suggestion} className="mt-4 p-2 w-full h-48" readOnly />
                  </div>

                </div>
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