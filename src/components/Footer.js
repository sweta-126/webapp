import React from 'react';
import { IoCall } from "react-icons/io5";
import { SiFacebook } from "react-icons/si";
import {TfiWorld} from "react-icons/tfi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='header'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</div>
        <div className='sub'>
            <div className='border'>CHEMICALS & PROCESS</div>
            <div className='border'>POWER</div>
            <div className='border'>WATER & WASTE WATER </div>
            <div className='border'>OILS & GAS </div>
            <div className='border'>PHARMA </div>
            <div className='border'>SUGARS & DISTILLERIES</div> 
            <div className='border'>PAPER & PULP </div>
            <div className='border'>MARINE & DEFENCE </div>
            <div className='border'>METAL & MINING </div>
            <div className='border'>FOOD & BEVERAGE </div>
            <div className='border'>PETROCHEMICAL & REFINERIES </div>
            <div className='border'>SOLAR </div>
            <div className='border'>BUILDING </div>
            <div className='border'>HVAC </div>
            <div className='border'>FIRE FIGHTING </div>
            <div>AGRICULTURE & RESIDENTIAL</div>
        </div>
        <div className='box'>
            <a href='tei:1800 200 1234' target="blank" className='ankle'><IoCall />Toll free <b>1800 200 1234</b></a>
            <a href='https://www.facebook.com/cripumps/' target="blank" className='ankle'><SiFacebook />www.facebook.com/cripumps</a>
            <a href='https://www.crigroups.com/' target="blank" className='ankle'><TfiWorld />www.crigroups.com</a>
        </div>
    </div>
  )
}

export default Footer