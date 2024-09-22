import Image from "next/image";
import React from "react";
import logo from './phoenix.png'
import SubmitButton from "./submitButton";
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
 
export default function Home() {

  const soils = [
    {
      value: 'Clay',
      label: 'Clay',
    },
    {
      value: 'Loamy',
      label: 'Loamy',
    },
    {
      value: 'Sand',
      label: 'Sand',
    },
  ];


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image src={logo} alt="logo" />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
        We are Team Phoenix{" "}.
          </li>
          <li>Together we will create fire.</li>
        </ol>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-nitrogen"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-nitrogen-helper-text"
            inputProps={{
              'aria-label': 'nitrogen',
            }}
          />
          <FormHelperText id="outlined-nitrogen-helper-text">Nitrogen</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-phosphorus"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-phosphorus-helper-text"
            inputProps={{
              'aria-label': 'phosphorus',
            }}
          />
          <FormHelperText id="outlined-phosphorus-helper-text">Phosphorus</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-potassium"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-potassium-helper-text"
            inputProps={{
              'aria-label': 'Potassium',
            }}
          />
          <FormHelperText id="outlined-potassium-helper-text">Potassium</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-ph"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-ph-helper-text"
            inputProps={{
              'aria-label': 'Ph level',
            }}
          />
          <FormHelperText id="outlined-ph-helper-text">Ph Level</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-water"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-water-helper-text"
            inputProps={{
              'aria-label': 'Water Level',
            }}
          />
          <FormHelperText id="outlined-water-helper-text">Water Level</FormHelperText>
        </FormControl>
        <select className="border p-2" defaultValue="" style={{ width: '268.4px', height: '56px'}}>
          <option value="" disabled>Soil Type</option>
          <option value="Loamy">Loamy</option>
          <option value="clay">Clay</option>
          <option value="sand">Sand</option>
        </select>
          
  
        <SubmitButton />
      </div>
    
      </main>
      
    </div>
  );
}
