import Image from "next/image";
import React from "react";
import logo from './phoenix.png'
import SubmitButton from "./submitButton";
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import farm from './farm.jpg'
import WelcomeButton from "./welcome";
 
export default function Home() {
 
  return (
    <div style={{ 
      backgroundImage: `url(${farm.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: '100vh',
      width: '100%',
      top: 0,
      left: 0,
      overflow: 'auto',
    }}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <WelcomeButton />
        <div id="input-section" className="bg-lime-600 rounded-lg p-4 border border-green-800">
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            
        <FormControl sx={{ m: 1, width: '25ch', color: 'white'}} variant="outlined">
          <OutlinedInput
          id="outlined-adornment-nitrogen"
          sx={{ backgroundColor: 'white' }}
          endAdornment={<InputAdornment position="end">mg/kg</InputAdornment>}
          aria-describedby="outlined-nitrogen-helper-text"
          inputProps={{
            'aria-label': 'nitrogen',
          }}
          />
          <FormHelperText id="outlined-nitrogen-helper-text" sx={{ color: 'white' }}>Nitrogen</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
          id="outlined-adornment-phosphorus"
          sx={{ backgroundColor: 'white' }}
          endAdornment={<InputAdornment position="end">mg/kg</InputAdornment>}
          aria-describedby="outlined-phosphorus-helper-text"
          inputProps={{
            'aria-label': 'phosphorus',
          }}
          />
          <FormHelperText id="outlined-phosphorus-helper-text" sx={{ color: 'white' }}>Phosphorus</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' , color: 'white'}} variant="outlined">
          <OutlinedInput
          id="outlined-adornment-potassium"
          sx={{ backgroundColor: 'white' }}
          endAdornment={<InputAdornment position="end">mg/kg</InputAdornment>}
          aria-describedby="outlined-potassium-helper-text"
          inputProps={{
            'aria-label': 'Potassium',
          }}
          />
          <FormHelperText id="outlined-potassium-helper-text" sx={{ color: 'white' }}>Potassium</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch', color: 'white' }} variant="outlined">
          <OutlinedInput
          id="outlined-adornment-ph"
          sx={{ backgroundColor: 'white' }}
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          aria-describedby="outlined-ph-helper-text"
          inputProps={{
            'aria-label': 'Ph level',
          }}
          />
          <FormHelperText id="outlined-ph-helper-text" sx={{ color: 'white' }}>Ph Level</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch', color: 'white' }} variant="outlined">
          <OutlinedInput
          id="outlined-adornment-water"
          sx={{ backgroundColor: 'white' }}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
          aria-describedby="outlined-water-helper-text"
          inputProps={{
            'aria-label': 'Water Level',
          }}
          />
          <FormHelperText id="outlined-water-helper-text" sx={{ color: 'white' }}>Water Level</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <select className="border p-2 rounded-lg" defaultValue="" style={{ width: '100%', height: '56px' }}>
            <option value="" disabled>Soil Type</option>
            <option value="Loamy">Loamy</option>
            <option value="clay">Clay</option>
            <option value="sand">Sand</option>
          </select>
        </FormControl>
          </div>
          </div>
        
      <div>
        <SubmitButton />
      </div>
        
    
       

      </main>
      </div>
   </div>
  );
}
