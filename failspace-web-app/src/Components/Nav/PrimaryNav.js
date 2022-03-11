import React from "react";
import NYCNav from './NYCNav';
import DSNav from "./DSNav";
import { useState } from 'react';

const PrimaryNav = () => {

    const [nyc, setNYC] = useState('none')
    const [ds, setDS] = useState('none')

    const toggleSubMenuNYC = () => {
        setDS('none')
        if(nyc === 'none'){
            setNYC('flex')
        } else {
            setNYC('none')    
        }
    }

    const toggleSubMenuDS = () => {
        setNYC('none')
        if(ds === 'none'){
            setDS('flex')
        } else {
            setDS('none')    
        }
    }

    return (
        <>
        <div className="primary-nav">
            <div className="primary-nav-el">
                <h2 onClick={toggleSubMenuNYC}>NYC</h2>
            </div>
            <div className="primary-nav-el">
                <h1>FAILSPACE</h1>
            </div>
            <div className="primary-nav-el">
                <h2 onClick={toggleSubMenuDS}>Design Services</h2>
            </div>
        </div>
        <DSNav active={ds}/>
        <NYCNav active={nyc}/>
        </>
        
    )
}

export default PrimaryNav;