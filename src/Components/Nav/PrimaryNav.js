/* === React Elements === */
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router,
        Routes,
        Route,
        Link } from "react-router-dom";

/* === Components === */
/* == Nav == */
import NYCNav from "./NYCNav";
import DSNav from "./DSNav";
import Banner from "./Banner";

/* == DS == */
import About from "../DesignServices/About"
import Services from "../DesignServices/Services";
import Contact from "../DesignServices/Contact";
import Portfolio from "../DesignServices/Portfolio";

/* == PORTFOLIO == */
import PerformancePrimers from "../DesignServices/Portfolio/PerformancePrimers";
import CPR from "../DesignServices/Portfolio/CPR"
import EthanPhilbrick from "../DesignServices/Portfolio/EthanPhilbrick"
import ExpInFreedom from "../DesignServices/Portfolio/ExpInFreedom"
import RebeccaFitton from "../DesignServices/Portfolio/RebeccaFitton"
import YCCLA from "../DesignServices/Portfolio/YCCLA"

/* == NYCS == */
import Connect from "../NYC/Connect";
import Programs from "../NYC/Programs";
import RSVP from "../NYC/RSVP";
import SteeringCommittee from "../NYC/SteeringCommittee";
import Support from "../NYC/Support";
import Home from "../Home"
import Raffle from "../NYC/Raffle"


const PrimaryNav = () => {

    const [nyc, setNYC] = useState('none')
    const [ds, setDS] = useState('none')
    const [backgroundNYC, setBackgroundNYC] = useState('')
    const [backgroundDS, setBackgroundDS] = useState('')

    const toggleSubMenuNYC = () => {
        setDS('none')
        setBackgroundDS('')
        if(nyc === 'none'){
            setNYC('flex')
            setBackgroundNYC('var(--light-pink)')
        } else {
            setNYC('none')  
            setBackgroundNYC('var(--bubblegum')  
        }
    }

    const toggleSubMenuDS = () => {
        setNYC('none')
        setBackgroundNYC('')
        if(ds === 'none'){
            setDS('flex')
            setBackgroundDS('var(--light-pink)')
        } else {
            setDS('none')
            setBackgroundDS('var(--bubblegum')    
        }
    }

    return (
        <Router>
            <div className="flex space-around top-padding-2vH side-padding bg-bubblegum">
                <a className="primary-nav-el" href="/">
                    <img className="logo-nav cursor" src="/images/Logo.svg" />
                    <img className="failspace-nav" src="/images/FAILSPACE.svg" />
                </a>
                <div style={{backgroundColor: backgroundNYC}} onMouseEnter={toggleSubMenuNYC} id="desktop" className="cursor primary-nav-el  margin-top menu-outline">
                    <h1 className="cursor">NYC</h1>
                </div>
                <div style={{backgroundColor: backgroundNYC}} onClick={toggleSubMenuNYC} id="mobile" className="cursor primary-nav-el  margin-top menu-outline">
                    <h1 className="cursor">NYC</h1>
                </div>
                <div style={{backgroundColor: backgroundDS}} onMouseEnter={toggleSubMenuDS} id="desktop" className="cursor primary-nav-el  menu-outline" >
                    <h1 className="cursor">Design Services</h1>
                </div>
                <div style={{backgroundColor: backgroundDS}} onClick={toggleSubMenuDS} id="mobile" className="cursor primary-nav-el  menu-outline" >
                    <h1 className="cursor">Design Services</h1>
                </div>
            </div>
            <div className="relative ">
                    <NYCNav active={nyc} function={toggleSubMenuNYC}/>
                    <DSNav active={ds} function={toggleSubMenuDS}/>
                </div>
            {/* <Banner /> */}
            

            {/* <Routes> looks through its children <Route> and renders teh first one that matches the current url.  */}

            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/nyc" element={<SteeringCommittee />} />
                <Route path="/design-services" element={<About />} />
                <Route path="/design-services/about" element={<About />} />
                <Route path="/design-services/services" element={<Services />} />
                <Route path="/design-services/portfolio" element={<Portfolio />} />
                <Route path="/design-services/contact" element={<Contact />} />
                <Route path="/nyc/steering-committee" element={<SteeringCommittee />} />
                <Route path="/nyc/programs" element={<Programs />} />
                <Route path="/nyc/RSVP" element={<RSVP />} />
                <Route path="/nyc/support" element={<Support />} />
                <Route path="/nyc/connect" element={<Connect />} />
                <Route path="/design-services/portfolio/performance-primers" element={<PerformancePrimers />} />
                <Route path="/design-services/portfolio/experiments-in-freedom" element={<ExpInFreedom />} />
                <Route path="/design-services/portfolio/cpr" element={<CPR />} />
                <Route path="/design-services/portfolio/ethan-philbrick" element={<EthanPhilbrick />} />
                <Route path="/design-services/portfolio/rebecca-fitton" element={<RebeccaFitton />} />
                <Route path="/design-services/portfolio/yccla" element={<YCCLA />} />
                <Route path="/raffle" element={<Raffle />} />
            </Routes>
        </Router>
        
    )
}

export default PrimaryNav;