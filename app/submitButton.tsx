"use client";
import React, { useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import './page.css'
 
function SubmitButton() {

    const [cropSuggestion, setCropSuggestion] = useState('');
    const [soilImprovements, setSoilImprovements] = useState('');
    const [nitrogenArray, setNitrogenArray] = useState<number[]>([]);
    const [phosphorusArray, setPhosphorusArray] = useState<number[]>([]);
    const [potassiumArray, setPotassiumArray] = useState<number[]>([]);
    const [recommendedNitrogen, setRecommendedNitrogen] = useState(String);
    const [recommendedPhosphorus, setRecommendedPhosphorus] = useState(String);
    const [recommendedPotassium, setRecommendedPotassium] = useState(String);
    const [recommendedPh, setRecommendedPh] = useState(String);
    const [metricNitrogen, setMetricNitrogen] = useState<number>();
    const [metricPhosphorus, setMetricPhosphorus] = useState<number>();
    const [metricPotassium, setMetricPotassium] = useState<number>();
    const [metricPh, setMetricPh] = useState<number>();
    const [metricSoilStructure, setMetricSoilStructure] = useState<number>();
    const [metricOverall, setMetricOverall] = useState<number>();


   
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
            
            const response = await fetch('https://yab6hygijj.execute-api.us-east-1.amazonaws.com/ai/recommendations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
              });
            
              const result = await response.json();
              console.log(result);
            const cropRecommendations = result.ai_response.cropRecommendations.map((rec: any) => {
                return `Crop: ${rec.crop}\nRevenue: ${rec.revenue}\nCost to Plant: ${rec.costToPlant}\nProfit: ${rec.profit}`;
            }).join('\n\n');
            setCropSuggestion(cropRecommendations);
              setSoilImprovements(result.ai_response.soilImprovements.join('\n'));
              
            setRecommendedNitrogen(result.ai_response.recommended_levels.nitrogen);
            setRecommendedPhosphorus(result.ai_response.recommended_levels.phosphorus);
            setRecommendedPotassium(result.ai_response.recommended_levels.potassium);
            setRecommendedPh(result.ai_response.recommended_levels.ph);

            setMetricNitrogen(parseInt(result.ai_response.metrics.nitrogen, 10));
            setMetricPhosphorus(parseInt(result.ai_response.metrics.phosphorus, 10));
            setMetricPotassium(parseInt(result.ai_response.metrics.potassium, 10));
            setMetricPh(parseFloat(result.ai_response.metrics.ph));
            setMetricSoilStructure(parseInt(result.ai_response.metrics.soilStructure, 10));
            setMetricOverall(parseInt(result.ai_response.metrics.overall, 10));

                // console.log(result);
                // console.log(result.ai_response);
                // console.log("CAPTURED RESULT")
                // console.log(capturedResult);
                // console.log("RECOMMENDED");
                // console.log(result.ai_response.recommended_levels);
                // console.log("NITROGEN")
                // console.log(result.ai_response.recommended_levels.nitrogen);
                // var thisisastring = result.ai_response.recommended_levels.nitrogen;
                // console.log("THIS IS A STRING");
                // console.log(thisisastring);
                // setRecommendedNitrogen(thisisastring);
                // console.log("PLEASE WORK");
                // console.log(recommendedNitrogen);
                // console.log("Rec Nitrogen");
                // console.log(recommendedNitrogen);
                // console.log("RECOMMENDED LEVELS");
                // console.log(metrics);
                // console.log("METRICS NITROGEN")
                // console.log(metrics.nitrogen);
                // console.log("THIS IS THE CROPS");
                // console.log(cropSuggestion)

            } catch (error) {
              console.error('There was a problem with the fetch operation:', error);
            }
        };

        
 
        return (
            <div>
                <button class="btn btn-success btn-lg" onClick={fetchData} id="getrecon">Get Recommendations</button>
                
                {(nitrogenArray.length > 0 && phosphorusArray.length > 0 && potassiumArray.length > 0) && (
                    <div className="bg-yellow-100 rounded-lg p-4 border border-green-800 mx-auto" id="linechart" style={{ maxWidth: 'fit-content', maxHeight: 'fit-content', display: 'block',  float:"right", margin: '15px auto'}}>
                        <LineChart
                            width={350}
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

                {(cropSuggestion || soilImprovements || recommendedNitrogen) && (
                    <div className="bg-yellow-900 rounded-lg p-4 border border-green-800 mx-auto" style={{ maxWidth: 'fit-content', maxHeight: 'fit-content', display: 'block', margin: '5px auto' }}>
                        {cropSuggestion && (
                            <div className="mr-4">
                                <label className="block text-lg font-medium text-white">Crop Recommendations</label>
                                <textarea value={cropSuggestion} className="mt-2 p-2 w-full h-48" readOnly />
                            </div>
                        )}
                        {soilImprovements && (
                            <div>
                                <label className="block text-lg font-medium text-white">Soil Improvements</label>
                                <textarea value={soilImprovements} className="mt-2 p-2 w-full h-48" readOnly />
                            </div>
                        )}
                         {recommendedNitrogen && (
                            <div>
                                <label className="block text-lg font-medium text-white">Recommended Values</label>
                                <textarea value={recommendedNitrogen + "\n" + recommendedPhosphorus + "\n" + recommendedPotassium + "\n" + recommendedPh} className="mt-2 p-2 w-full h-48" readOnly />
                            </div>
                        )}
                    </div>
                )}

                {(metricNitrogen || metricPhosphorus || metricPotassium || metricPh || metricSoilStructure || metricOverall) && (
                    <div className="bg-neutral-300 gap-1 rounded-lg p-4 border border-green-800 mx-auto" style={{maxWidth: 'fit-content', maxHeight: 'fit-content', display: 'block'}}>
                        {metricNitrogen !== undefined && (
                            <div>
                                <label className="block text-lg font-medium text-white">Nitrogen Rating</label>
                                <Gauge 
                                    width={100} height={100} value={metricNitrogen} valueMax={10}
                                    cornerRadius="50%"
                                    sx={(theme) => ({
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 40,
                                        },
                                        [`& .${gaugeClasses.valueArc}`]: {
                                            fill: '#52b202',
                                        },
                                        [`& .${gaugeClasses.referenceArc}`]: {
                                            fill: theme.palette.text.disabled,
                                        },
                                    })}
                                />
                            </div>
                        )}
                        {metricPhosphorus !== undefined && (
                            <div>
                                <label className="block text-lg font-medium text-white">Phosphorus Rating</label>
                                <Gauge 
                                    width={100} height={100} value={metricPhosphorus} valueMax={10}
                                    cornerRadius="50%"
                                    sx={(theme) => ({
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 40,
                                        },
                                        [`& .${gaugeClasses.valueArc}`]: {
                                            fill: '#52b202',
                                        },
                                        [`& .${gaugeClasses.referenceArc}`]: {
                                            fill: theme.palette.text.disabled,
                                        },
                                    })}
                                />
                            </div>
                        )}
                        {metricPotassium !== undefined && (
                            <div>
                                <label className="block text-lg font-medium text-white">Potassium Rating</label>
                                <Gauge 
                                    width={100} height={100} value={metricPotassium} valueMax={10}
                                    cornerRadius="50%"
                                    sx={(theme) => ({
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 40,
                                        },
                                        [`& .${gaugeClasses.valueArc}`]: {
                                            fill: '#52b202',
                                        },
                                        [`& .${gaugeClasses.referenceArc}`]: {
                                            fill: theme.palette.text.disabled,
                                        },
                                    })}
                                />
                            </div>
                        )}
                        {metricPh !== undefined && (
                            <div>
                                <label className="block text-lg font-medium text-white">pH Rating</label>
                                <Gauge 
                                    width={100} height={100} value={metricPh} valueMax={10}
                                    cornerRadius="50%"
                                    sx={(theme) => ({
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 40,
                                        },
                                        [`& .${gaugeClasses.valueArc}`]: {
                                            fill: '#52b202',
                                        },
                                        [`& .${gaugeClasses.referenceArc}`]: {
                                            fill: theme.palette.text.disabled,
                                        },
                                    })}
                                />
                            </div>
                        )}
                        {metricSoilStructure !== undefined && (
                            <div>
                                <label className="block text-lg font-medium text-white">Soil Structure Rating</label>
                                <Gauge 
                                    width={100} height={100} value={metricSoilStructure} valueMax={10}
                                    cornerRadius="50%"
                                    sx={(theme) => ({
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 40,
                                        },
                                        [`& .${gaugeClasses.valueArc}`]: {
                                            fill: '#52b202',
                                        },
                                        [`& .${gaugeClasses.referenceArc}`]: {
                                            fill: theme.palette.text.disabled,
                                        },
                                    })}
                                />
                            </div>
                        )}
                        {metricOverall !== undefined && (
                            <div>
                                <label className="block text-lg font-medium text-white">Overall Rating</label>
                                <Gauge 
                                    width={100} height={100} value={metricOverall} valueMax={10}
                                    cornerRadius="50%"
                                    sx={(theme) => ({
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 40,
                                        },
                                        [`& .${gaugeClasses.valueArc}`]: {
                                            fill: '#52b202',
                                        },
                                        [`& .${gaugeClasses.referenceArc}`]: {
                                            fill: theme.palette.text.disabled,
                                        },
                                    })}
                                />
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