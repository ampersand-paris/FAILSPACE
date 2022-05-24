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

    const [heightPP, setHeightPP] = useState('')
    const [heightEXP, setHeightEXP] = useState('')
    const [heightCPR, setHeightCPR] = useState('')
    const [heightEP, setHeightEP] = useState('')
    const [heightRF, setHeightRF] = useState('')

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
        // height
        setHeightEXP('')
        setHeightCPR('')
        setHeightEP('')
        setHeightRF('')

        if(perfPrimers === 'none'){
            setPerfPrimers('flex')
            setIvy('var(--ivy)')
            setHeightPP('100%')
        } else {
            setPerfPrimers('none')   
            setIvy('') 
            setHeightPP('')
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
        // height
        setHeightPP('')
        setHeightCPR('')
        setHeightEP('')
        setHeightRF('')

        if(expInFreedom === 'none'){
            setExpInFreedom('flex')
            setLemon('var(--lemon)')
            setHeightEXP('100%')
        } else {
            setExpInFreedom('none')   
            setLemon('') 
            setHeightEXP('')
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
        // height
        setHeightPP('')
        setHeightEXP('')
        setHeightCPR('')
        setHeightEP('')

        if(fitton === 'none'){
            setFitton('flex')
            setRoyalBlue('var(--royal-blue)')
            setHeightRF('100%')
        } else {
            setFitton('none')   
            setRoyalBlue('') 
            setHeightRF('')
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
        // height
        setHeightPP('')
        setHeightEXP('')
        setHeightEP('')
        setHeightRF('')
        if(cpr === 'none'){
            setCPR('flex')
            setOrange('var(--orange)')
            setHeightCPR('100%')
        } else {
            setCPR('none')   
            setOrange('') 
            setHeightCPR('')
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
        // height
        setHeightPP('')
        setHeightEXP('')
        setHeightCPR('')
        setHeightRF('')

        if(ethan === 'none'){
            setEthan('flex')
            setGrapeSoda('var(--grape-soda)')
            setHeightEP('100%')
        } else {
            setEthan('none')   
            setGrapeSoda('') 
            setHeightEP('')
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
        <div className="standard-spacing bg-light-pink">
            <h1 className="page-title bubblegum">Portfolio</h1>
            <div className="extra-margin">
                <div className="portfiolio-center">
                    <div className="portfolio-index">
                        <div className="portfolio-title ivy" id="first"  style={{backgroundColor: ivy, height: heightPP}}>
                            <h2 className="cursor" onClick={togglePerfPrime}>Performance Primers</h2>
                            <br></br>
                            <h4>Web Development, Brand Identity
                            <br></br>Cargo CMS, Custom HTML & CSS</h4>
                            <div>
                                <PerformancePrimers active={perfPrimers} />
                            </div>
                        </div>
                        <div className="portfolio-title" id="lemon" style={{backgroundColor: lemon, height: heightEXP}}>
                            <h2 className="cursor" onClick={toggleExpInFreedom}>Experiments in Freedom</h2>
                            <br></br>
                            <h4>Web Development, Brand Identity
                            <br></br>Cargo CMS, Custom HTML, CSS, & JavaScript</h4>
                            <div>
                                <ExpInFreedom active={expInFreedom} />
                            </div>
                        </div>
                        {/* <div className="portfolio-title" id="royal-blue" onClick={toggleEddyKwon} style={{backgroundColor: royalBlue}}>
                            <h2>Eddy Kwon</h2>
                        </div> */}
                        <div className="portfolio-title" id="orange"  style={{backgroundColor: orange, height: heightCPR}}>
                            <h2 className="cursor" onClick={toggleCPR}>Center for Performance Research</h2>
                            <br></br>
                            <h4>Web Development, Brand Identity
                            <br></br>Squarespace CMS, Custom HTML & CSS</h4>
                            <div>
                                <CPR active={cpr} />
                            </div>
                        </div>
                        <div className="portfolio-title" id="grape-soda"  style={{backgroundColor: grapeSoda, height: heightEP}}>
                            <h2 className="cursor" onClick={toggleEthanPhilbrick}>Ethan Philbrick</h2>
                            <br></br>
                            <h4>Web Development, Brand Identity
                            <br></br>Cargo CMS, Custom HTML & CSS</h4>
                            <div>
                                <EthanPhilbrick active={ethan} />
                            </div>
                        </div>
                        {/* <div className="portfolio-title" id="lavendar" onClick={toggleMTA} style={{backgroundColor: lavendar}}>
                            <h2>Mount Tremper Arts</h2>
                        </div> */}
                        <div className="portfolio-title last" id="royal-blue" style={{backgroundColor: royalBlue, height: heightRF}}>
                            <h2 className="cursor" onClick={toggleFitton}>Rebecca Fitton</h2>
                            <br></br>
                            <h4>Print & Publication</h4>
                            <div>
                                <RebeccaFitton active={fitton} />
                            </div>
                        </div>
                        {/* <div className="portfolio-title" id="royal-blue">
                            <h2>Video Work</h2>
                        </div> */}
                    </div>
                </div>
                <div>
                    <EddyKwon active={eddyKwon} />
                    <MTA active={mta} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;