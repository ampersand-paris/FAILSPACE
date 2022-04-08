/* === React Elements === */
import React from "react";
import { useState } from "react";
/* === React Components === */
import PerformancePrimers from "./Portfolio/PerformancePrimers"
import CPR from "./Portfolio/CPR";
import EddyKwon from "./Portfolio/EddyKwon";
import EthanPhilbrick from "./Portfolio/EthanPhilbrick";
import ExpInFreedom from "./Portfolio/ExpInFreedom";
import MTA from "./Portfolio/MountTremperArts";
import PGEC from "./Portfolio/PGEC";
import RebeccaFitton from "./Portfolio/RebeccaFitton";

const Portfolio = () => {

    const [perfPrimers, setPerfPrimers] = useState('none');
    const [expInFreedom, setExpInFreedom] = useState('none')
    const [fitton, setFitton] = useState('none')

    const [ivy, setIvy] = useState('')
    const [lemon, setLemon] = useState('');

    const togglePerfPrime = () => {
        // Components
        setExpInFreedom('none')   

        // bgColor
        setLemon('') 

        if(perfPrimers === 'none'){
            setPerfPrimers('flex')
            setIvy('var(--ivy)')
        } else {
            setPerfPrimers('none')   
            setIvy('') 
        }
    }

    const toggleExpInFreedom = () => {
        // Components
        setPerfPrimers('none')   

        // bgColor
        setIvy('') 

        if(expInFreedom === 'none'){
            setExpInFreedom('flex')
            setLemon('var(--lemon)')
        } else {
            setExpInFreedom('none')   
            setLemon('') 
        }
    }

    const toggleFitton= () => {
        // Components
        setPerfPrimers('none')   
        setExpInFreedom('none')   

        // bgColor
        setLemon('') 

        if(fitton === 'none'){
            setFitton('flex')
            setIvy('var(--ivy)')
        } else {
            setExpInFreedom('none')   
            setIvy('') 
        }
    }

    return (
        <div className="standard-spacing bg-light-pink">
            <h1 className="page-title bubblegum">Portfolio</h1>
            <div className="portfiolio-page">
                <div className="portfiolio-center">
                    <div className="portfolio-index">
                        <div className="portfolio-title ivy" id="performance-primers" onClick={togglePerfPrime} style={{backgroundColor: ivy}}>
                            <h2>Performance Primers</h2>
                        </div>
                        <div className="portfolio-title" id="lemon" onClick={toggleExpInFreedom} style={{backgroundColor: lemon}}>
                            <h2>Experiments in Freedom</h2>
                        </div>
                        <div className="portfolio-title" id="royal-blue">
                            <h2>Eddy Kwon</h2>
                        </div>
                        <div className="portfolio-title" id="orange">
                            <h2>Center for Performance Research</h2>
                        </div>
                        <div className="portfolio-title" id="grape-soda">
                            <h2>Ethan Philbrick</h2>
                        </div>
                        <div className="portfolio-title" id="lavendar">
                            <h2>Mount Tremper Arts</h2>
                        </div>
                        <div className="portfolio-title ivy" onClick={toggleFitton} style={{backgroundColor: ivy}}>
                            <h2>Rebecca Fitton</h2>
                        </div>
                        <div className="portfolio-title" id="lemon">
                            <h2>Pioneers Go East Collective</h2>
                        </div>
                        <div className="portfolio-title" id="royal-blue">
                            <h2>Video Work</h2>
                        </div>
                    </div>
                </div>
                <div className="portfolio-show">
                    <PerformancePrimers active={perfPrimers} />
                    <ExpInFreedom active={expInFreedom} />
                    <RebeccaFitton active={fitton} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;