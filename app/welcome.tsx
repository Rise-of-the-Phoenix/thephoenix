"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './page.css'
import 'bootstrap/dist/css/bootstrap.css';

const WelcomeButton: React.FC = ({}) => {
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            console.log("Submitted 1");
            localStorage.setItem('phoneNumber', phoneNumber);
            document.getElementById('modal')?.scrollIntoView({ behavior: 'smooth' });
            console.log("Submitted 2");
        } catch (error) {
            console.error("Error during form submission:", error);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPhoneNumber = event.target.value;
        setPhoneNumber(newPhoneNumber);
        localStorage.setItem('phoneNumber', newPhoneNumber);
    };

    return (
        <div id="welcome">
            <h1 id="welcome-h1">Welcome to uFarm.ai</h1>
            <p id="welcome-p">Put your Phone Number in and get started</p>
            <form onSubmit={handleSubmit} id="onsubmit">
                <input
                    type='textarea'
                    required
                    id="outlined-required"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                />
            <button className="btn btn-success btn-sm" type="submit" id="submit">Submit</button>
        </form>
        </div>
    );
};

export default WelcomeButton;