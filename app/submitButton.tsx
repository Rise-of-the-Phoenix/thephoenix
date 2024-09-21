"use client";
import React from "react";

export default function SubmitButton() {
  return <button 
  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
  onClick={async () => {
    const data = {
  nitrogen: (document.querySelector('input[placeholder="Nitrogen"]') as HTMLInputElement).value,
  phosphorus: (document.querySelector('input[placeholder="Phosphorus"]') as HTMLInputElement).value,
  potassium: (document.querySelector('input[placeholder="Potassium"]') as HTMLInputElement).value,
  ph: (document.querySelector('input[placeholder="Ph"]') as HTMLInputElement).value,
  soil_type: (document.querySelector('select')?.value || ''),
  water_level: (document.querySelector('input[placeholder="Water Level"]') as HTMLInputElement).value,
    };

    try {
  const response = await fetch('https://3br1dt5rr1.execute-api.us-east-1.amazonaws.com/test/recommendations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  console.log(result);
    } catch (error) {
  console.error('There was a problem with the fetch operation:', error);
    }
  }}
>
  Submit
</button>
}


