"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './page.css'
import 'bootstrap/dist/css/bootstrap.css';

const WelcomeButton: React.FC<WelcomeButtonProps> = ({ className }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        localStorage.setItem('phoneNumber', phoneNumber);
        document.getElementById('input-section')?.scrollIntoView({ behavior: 'smooth' });
        
        // try {
        //     const response = await fetch('https://yab6hygijj.execute-api.us-east-1.amazonaws.com/ai/create_record', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ phoneNumber }),
        //     });

        //     if (response.ok) {
        //         document.getElementById('input-section')?.scrollIntoView({ behavior: 'smooth' });
        //     } else {
        //         console.error('Failed to submit phone number');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    };

    return (
        <div id="welcome">
            <h1 id="welcome-h1">Welcome to Farmers Friend</h1>
            <p id="welcome-p">Put your Phone Number in and get started</p>
            <form onSubmit={handleSubmit} id="onsubmit">
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                />
            </form>
            <button class="btn btn-success btn-sm" type="submit" id="submit">Submit</button>
        </div>
    );
};

export default WelcomeButton;