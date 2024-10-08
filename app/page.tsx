import React from "react";
import logo from './phoenix.png'
import SubmitButton from "./submitButton";
import 'bootstrap/dist/css/bootstrap.css';
import './page.css'

import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import farm from './farm.jpg'
import WelcomeButton from "./welcome";

 
export default function Home() {
   

  return (
    
  <div>

    <nav className="navbar fixed-top navbar-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#" id="img"></a>
        <h4 id="teamname">Team Phoenix</h4>
      </div>
    </nav>


    <div id="background">
      <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col items-center sm:items-start" id="main">
          <WelcomeButton />
            <div id="modal" className="bg-lime-600 rounded-lg p-4 border">
              <div className="grid grid-cols-3 grid-rows-2 gap-4">
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-nitrogen"
                    sx={{ backgroundColor: 'white',fontWeight: 'bolder' }}
                    endAdornment={<InputAdornment position="end" id="value">mg/kg</InputAdornment>}
                    aria-describedby="outlined-nitrogen-helper-text"
                    inputProps={{
                      'aria-label': 'nitrogen',
                    }}
                  />
                  <FormHelperText id="outlined-nitrogen-helper-text" sx={{ color: 'white' }}>Nitrogen</FormHelperText>
                </FormControl>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-phosphorus"
                    sx={{ backgroundColor: 'white',fontWeight: 'bolder' }}
                    endAdornment={<InputAdornment position="end" id="value">mg/kg</InputAdornment>}
                    aria-describedby="outlined-phosphorus-helper-text"
                    inputProps={{
                      'aria-label': 'phosphorus',
                    }}
                  />
                  <FormHelperText id="outlined-phosphorus-helper-text" sx={{ color: 'white' }}>Phosphorus</FormHelperText>
                </FormControl>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-potassium"
                    sx={{ backgroundColor: 'white', fontWeight: 'bolder' }}
                    endAdornment={<InputAdornment position="end" id="value">mg/kg</InputAdornment>}
                    aria-describedby="outlined-potassium-helper-text"
                    inputProps={{
                      'aria-label': 'Potassium',
                    }}
                  />
                  <FormHelperText id="outlined-potassium-helper-text" sx={{ color: 'white' }}>Potassium</FormHelperText>
                </FormControl>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-ph"
                    sx={{ backgroundColor: 'white', fontWeight: 'bolder'}}
                    endAdornment={<InputAdornment position="end" id="value"></InputAdornment>}
                    aria-describedby="outlined-ph-helper-text"
                    inputProps={{
                      'aria-label': 'Ph level',
                    }}
                  />
                  <FormHelperText id="outlined-ph-helper-text" sx={{ color: 'white' }}>pH Level</FormHelperText>
                </FormControl>
                <FormControl variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-water"
                    sx={{ backgroundColor: 'white', fontWeight: 'bolder' }}
                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                    aria-describedby="outlined-water-helper-text"
                    inputProps={{
                      'aria-label': 'Water Level',
                    }}
                  />
                  <FormHelperText id="outlined-water-helper-text" sx={{ color: 'white' }}>Water Level</FormHelperText>
                </FormControl>
                <FormControl variant="outlined">
                  <select className="border p-2 rounded-lg" defaultValue="">
                    <option value="" disabled>Soil Type</option>
                    <option value="Loamy">Loamy</option>
                    <option value="clay">Clay</option>
                    <option value="sand">Sand</option>
                  </select>
                </FormControl>
              </div>
            </div>
            <SubmitButton />
         </main>
      </div>
    </div>
  </div>
  );
}
