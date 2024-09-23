"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
interface WelcomeButtonProps {
    className?: string;
}

const WelcomeButton: React.FC<WelcomeButtonProps> = ({}) => {
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
        <div className="bg-lime-600 rounded-lg p-4 border border-green-800 mx-auto" style={{ maxWidth: 'fit-content' }}>
            <h1 style={{ fontSize: '2em', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Welcome to Farmers Friend</h1>
            <p style={{ fontSize: '1em', color: 'white', textAlign: 'center' }}>Put your Phone Number in and get started</p>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    sx={{ backgroundColor: 'white' }}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                />

                <div style={{ marginTop: '1em' }}></div>
                <button 
                    type="submit" 
                    style={{ 
                        borderRadius: '12px', 
                        padding: '0.5em 1em', 
                        backgroundColor: '#4CAF50', 
                        color: 'white', 
                        border: 'none', 
                        cursor: 'pointer' 
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default WelcomeButton;