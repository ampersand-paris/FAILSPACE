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
    const [expInFreedom, setExpInFreedom] = useState('none');
    const [fitton, setFitton] = useState('none');
    const [cpr, setCPR] = useState('none');
    const [eddyKwon, setEddyKwon] = useState('none');
    const [ethan, setEthan] = useState('none');
    const [pgec, setPGEC] = useState('none');
    const [mta, setMTA] = useState('none');

    const [ivy, setIvy] = useState('');
    const [lemon, setLemon] = useState('');
    const [royalBlue, setRoyalBlue] = useState('');
    const [orange, setOrange] = useState('');
    const [grapeSoda, setGrapeSoda] = useState('');
    const [lavendar, setLavendar] = useState('');
    const [ivyTwo, setIvyTwo] = useState('');
    const [lemonTwo, setLemonTwo] = useState('');

    const togglePerfPrime = () => {
        // Components
        setExpInFreedom('none')   
        setFitton('none')
        setCPR('none')
        setEddyKwon('none')
        setEthan('none')
        setPGEC('none')
        setMTA('none')
        // bgColor
        setIvy('')
        setLemon('') 
        setRoyalBlue('')
        setOrange('')
        setGrapeSoda('')
        setLavendar('')
        setIvyTwo('')
        setLemonTwo('')

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
        setFitton('none')
        setCPR('none')
        setEddyKwon('none')
        setEthan('none')
        setPGEC('none')
        setMTA('none')
        // bgColor
        setIvy('')
        setRoyalBlue('')
        setOrange('')
        setGrapeSoda('')
        setLavendar('')
        setIvyTwo('')
        setLemonTwo('')

        if(expInFreedom === 'none'){
            setExpInFreedom('flex')
            setLemon('var(--lemon)')
        } else {
            setExpInFreedom('none')   
            setLemon('') 
        }
    }

    const toggleFitton = () => {
        // Components
        setPerfPrimers('none')
        setExpInFreedom('none')   
        setCPR('none')
        setEddyKwon('none')
        setEthan('none')
        setPGEC('none')
        setMTA('none') 

        // bgColor
        setIvy('')
        setLemon('') 
        setRoyalBlue('')
        setOrange('')
        setGrapeSoda('')
        setLavendar('')
        setLemonTwo('')

        if(fitton === 'none'){
            setFitton('flex')
            setIvyTwo('var(--ivy)')
        } else {
            setFitton('none')   
            setIvyTwo('') 
        }
    }

    const toggleCPR = () => {
        // Components
        setPerfPrimers('none')
        setExpInFreedom('none')   
        setFitton('none')
        setEddyKwon('none')
        setEthan('none')
        setPGEC('none')
        setMTA('none')
        // bgColor
        setIvy('')
        setLemon('') 
        setRoyalBlue('')
        setGrapeSoda('')
        setLavendar('')
        setIvyTwo('')
        setLemonTwo('')

        if(cpr === 'none'){
            setCPR('flex')
            setOrange('var(--orange)')
        } else {
            setCPR('none')   
            setOrange('') 
        }
    }

    const toggleEddyKwon = () => {
        // Components
        setPerfPrimers('none')
        setExpInFreedom('none')   
        setFitton('none')
        setCPR('none')
        setEddyKwon('none')
        setEthan('none')
        setPGEC('none')
        setMTA('none')
        // bgColor
        setIvy('')
        setLemon('') 
        setOrange('')
        setGrapeSoda('')
        setLavendar('')
        setIvyTwo('')
        setLemonTwo('')

        if(eddyKwon === 'none'){
            setEddyKwon('flex')
            setRoyalBlue('var(--royal-blue)')
        } else {
            setEddyKwon('none')   
            setRoyalBlue('') 
        }
    }

    const toggleEthanPhilbrick = () => {
        setPerfPrimers('none')
        setExpInFreedom('none')   
        setFitton('none')
        setCPR('none')
        setEddyKwon('none')
        setEthan('none')
        setPGEC('none')
        setMTA('none')
        // bgColor
        setIvy('')
        setLemon('') 
        setRoyalBlue('')
        setOrange('')
        setLavendar('')
        setIvyTwo('')
        setLemonTwo('')

        if(ethan === 'none'){
            setEthan('flex')
            setGrapeSoda('var(--grape-soda)')
        } else {
            setEthan('none')   
            setGrapeSoda('') 
        }
    }

    const toggleMTA = () => {
        setPerfPrimers('none')
        setExpInFreedom('none')   
        setFitton('none')
        setCPR('none')
        setEddyKwon('none')
        setEthan('none')
        setPGEC('none')
        setMTA('none')
        // bgColor
        setIvy('')
        setLemon('') 
        setRoyalBlue('')
        setOrange('')
        setGrapeSoda('')
        setIvyTwo('')
        setLemonTwo('')

        if(mta === 'none'){
            setMTA('flex')
            setLavendar('var(--lavendar)')
        } else {
            setMTA('none')   
            setLavendar('') 
        }
    }

    const togglePGEC = () => {
        setPerfPrimers('none')
        setExpInFreedom('none')   
        setFitton('none')
        setCPR('none')
        setEddyKwon('none')
        setEthan('none')
        setPGEC('none')
        setMTA('none')
        // bgColor
        setIvy('')
        setLemon('') 
        setRoyalBlue('')
        setOrange('')
        setGrapeSoda('')
        setLavendar('')
        setIvyTwo('')

        if(pgec === 'none'){
            setPGEC('flex')
            setLemonTwo('var(--lemon)')
        } else {
            setPGEC('none')   
            setLemonTwo('') 
        }
    }    

    return (
        <div className="standard-spacing">
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
                        <div className="portfolio-title" id="royal-blue" onClick={toggleEddyKwon} style={{backgroundColor: royalBlue}}>
                            <h2>Eddy Kwon</h2>
                        </div>
                        <div className="portfolio-title" id="orange" onClick={toggleCPR} style={{backgroundColor: orange}}>
                            <h2>Center for Performance Research</h2>
                        </div>
                        <div className="portfolio-title" id="grape-soda" onClick={toggleEthanPhilbrick} style={{backgroundColor: grapeSoda}}>
                            <h2>Ethan Philbrick</h2>
                        </div>
                        <div className="portfolio-title" id="lavendar" onClick={toggleMTA} style={{backgroundColor: lavendar}}>
                            <h2>Mount Tremper Arts</h2>
                        </div>
                        <div className="portfolio-title ivy" onClick={toggleFitton} style={{backgroundColor: ivyTwo}}>
                            <h2>Rebecca Fitton</h2>
                        </div>
                        <div className="portfolio-title" id="lemon" onClick={togglePGEC} style={{backgroundColor: lemonTwo}}>
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
                    <CPR active={cpr} />
                    <EddyKwon active={eddyKwon} />
                    <MTA active={mta} />
                    <PGEC active={pgec} />
                    <EthanPhilbrick active={ethan} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;