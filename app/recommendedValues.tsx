// "use client"
// import React, { useState } from 'react';

// const RecommendedValues = () => {
//     const [recommendedValues, setRecommendedValues] = useState<string | null>(null);

//     React.useEffect(() => {
//         const storedValues = localStorage.getItem('RecommendedValues');
//         if (storedValues) {
//             setRecommendedValues(storedValues);
//         }
//     }, []);

//     return (
//         <div>
//             {(recommendedValues) && (
//                     <div className="bg-yellow-900 rounded-lg p-4 border border-green-800 mx-auto" style={{ maxWidth: 'fit-content', maxHeight: 'fit-content', display: 'block', margin: '5px auto' }}>
//                         {recommendedValues && (
//                             <div className="mr-4">
//                                 <label className="block text-lg font-medium text-white">RecommendedValues</label>
//                                 <textarea value={JSON.stringify(recommendedValues)} className="mt-2 p-2 w-full h-48" readOnly />
//                             </div>
//                         )}
//                     </div>
//                 )}
//         </div>
//     );
// };

// export default RecommendedValues;