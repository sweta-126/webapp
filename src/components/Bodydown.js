import React from 'react';
import machine from "../asserts/3.png";
import "./Bodydown.css";

const Bodydown = () => {
  return (
    <div className='bodydown'>
        <div className='head'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</div>
        <div className='image'>
            <img src={machine} alt="img" className='machine' />
        </div>
        <div className='line'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</div>
    </div>
  )
}

export default Bodydown