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

    const [heightPP, setHeightPP] = useState('0px')
    const [heightEXP, setHeightEXP] = useState('0px')
    const [heightCPR, setHeightCPR] = useState('0px')
    const [heightEP, setHeightEP] = useState('0px')
    const [heightRF, setHeightRF] = useState('0px')

    // const tabHeight = () => {
    //     let el = document.getElementById('perf')
    //     if (el.style.height === '100%') {
    //         console.log('nada')
    //     } else if (el.style.height === '0px') {
    //         document.getElementById('perf').classList.add('tab-height');
    //         document.getElementById('perf').classList.remove('tab-close');
    //     }
    // }

     const tabHeight = (id) => {
        let el = document.getElementById(id)
        if (el.style.height === '100%') {
            console.log('nada')
        } else if (el.style.height === '0px') {
            document.getElementById(id).classList.add('tab-height');
            document.getElementById(id).classList.remove('tab-close');
        }
    }
    const tabClose = (id) => {
        let el = document.getElementById(id)
        if (el.style.height === '100%') {
            console.log('nada')
        } else if (el.classList.contains('tab-height')) {
            document.getElementById(id).classList.remove('tab-height');
            document.getElementById(id).classList.add('tab-close');
        }

    }


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
        setHeightEXP('0px')
        setHeightCPR('0p')
        setHeightEP('0p')
        setHeightRF('0p')

        if(perfPrimers === 'none'){
            document.getElementById('perf').classList.remove('tab-height');
            setPerfPrimers('flex')
            setIvy('var(--ivy)')
            setHeightPP('100%')
        } else {
            setPerfPrimers('none')   
            setIvy('') 
            setHeightPP('0px')
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
        setHeightPP('0px')
        setHeightCPR('0px')
        setHeightEP('0px')
        setHeightRF('0px')

        if(expInFreedom === 'none'){
            document.getElementById('exp').classList.remove('tab-height');
            setExpInFreedom('flex')
            setLemon('var(--lemon)')
            setHeightEXP('100%')
        } else {
            setExpInFreedom('none')   
            setLemon('') 
            setHeightEXP('0px')
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
        setHeightPP('0px')
        setHeightEXP('0px')
        setHeightCPR('0px')
        setHeightEP('0px')

        if(fitton === 'none'){
            document.getElementById('fitton').classList.remove('tab-height');
            setFitton('flex')
            setRoyalBlue('var(--royal-blue)')
            setHeightRF('100%')
        } else {
            setFitton('none')   
            setRoyalBlue('') 
            setHeightRF('0px')
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
        setHeightPP('0px')
        setHeightEXP('0px')
        setHeightEP('0px')
        setHeightRF('0px')
        if(cpr === 'none'){
            document.getElementById('cpr').classList.remove('tab-height');
            setCPR('flex')
            setOrange('var(--orange)')
            setHeightCPR('100%')
        } else {
            setCPR('none')   
            setOrange('') 
            setHeightCPR('0px')
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
        setHeightPP('0px')
        setHeightEXP('0px')
        setHeightCPR('0px')
        setHeightRF('0px')

        if(ethan === 'none'){
            document.getElementById('philbrick').classList.remove('tab-height');
            setEthan('flex')
            setGrapeSoda('var(--grape-soda)')
            setHeightEP('100%')
        } else {
            setEthan('none')   
            setGrapeSoda('') 
            setHeightEP('0px')
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
                        <div className="portfolio-title ivy" id="first"  style={{backgroundColor: ivy}}>
                            <h2 className="cursor" onMouseEnter={() => tabHeight('perf')} onMouseLeave={() => tabClose('perf')} onClick={togglePerfPrime}>Performance Primers</h2>
                            <div className="ivy"  id="perf" style={{backgroundColor: ivy, height: heightPP, overflow: 'hidden'}}>
                                <h4>Web Development, Brand Identity
                                <br></br>Cargo CMS, Custom HTML & CSS</h4>
                                <div>
                                    <PerformancePrimers active={perfPrimers} />
                                </div>
                            </div>  
                        </div>
                        <div className="portfolio-title" id="lemon" style={{backgroundColor: lemon }}>
                            <h2 className="cursor" onMouseEnter={() => tabHeight('exp')} onMouseLeave={() => tabClose('exp')} onClick={toggleExpInFreedom}>Experiments in Freedom</h2>
                            <div className="lemon"  id="exp" style={{backgroundColor: lemon, height: heightEXP, overflow: 'hidden'}}>
                                <h4>Web Development, Brand Identity
                                <br></br>Cargo CMS, Custom HTML, CSS, & JavaScript</h4>
                                <div>
                                    <ExpInFreedom active={expInFreedom} />
                                </div>
                            </div>
                        </div>
                        {/* <div className="portfolio-title" id="royal-blue" onClick={toggleEddyKwon} style={{backgroundColor: royalBlue}}>
                            <h2>Eddy Kwon</h2>
                        </div> */}
                        <div className="portfolio-title orange" style={{backgroundColor: orange}}>
                            <h2 className="cursor" onMouseEnter={() => tabHeight('cpr')} onMouseLeave={() => tabClose('cpr')} onClick={toggleCPR}>Center for Performance Research</h2>
                            <div className="orange"  id="cpr" style={{backgroundColor: orange, height: heightCPR, overflow: 'hidden'}}>
                                <h4>Web Development, Brand Identity
                                <br></br>Squarespace CMS, Custom HTML & CSS</h4>
                                <div>
                                    <CPR active={cpr} />
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-title grape-soda" style={{backgroundColor: grapeSoda}}>
                            <h2 className="cursor" onMouseEnter={() => tabHeight('philbrick')} onMouseLeave={() => tabClose('philbrick')} onClick={toggleEthanPhilbrick}>Ethan Philbrick</h2>
                            <div className="grape-soda"  id="philbrick" style={{backgroundColor: grapeSoda, height: heightEP, overflow: 'hidden'}}>
                                <h4>Web Development, Brand Identity
                                <br></br>Cargo CMS, Custom HTML & CSS</h4>
                                <div>
                                    <EthanPhilbrick active={ethan} />
                                </div>
                            </div>
                        </div>
                        {/* <div className="portfolio-title" id="lavendar" onClick={toggleMTA} style={{backgroundColor: lavendar}}>
                            <h2>Mount Tremper Arts</h2>
                        </div> */}
                        <div className="portfolio-title last royal-blue" style={{backgroundColor: royalBlue}}>
                            <h2 className="cursor" onMouseEnter={() => tabHeight('fitton')} onMouseLeave={() => tabClose('fitton')} onClick={toggleFitton}>Rebecca Fitton</h2>
                            <div className="royal-blue"  id="fitton" style={{backgroundColor: royalBlue, height: heightRF, overflow: 'hidden'}}>
                                <h4>Print & Publication</h4>
                                <div>
                                   <RebeccaFitton active={fitton} />
                                </div>
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