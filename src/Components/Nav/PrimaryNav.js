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
/* == DS == */
import About from "../DesignServices/About"
import Services from "../DesignServices/Services";
import Contact from "../DesignServices/Contact";
import Portfolio from "../DesignServices/Portfolio";
/* == NYCS == */
import Connect from "../NYC/Connect";
import Programs from "../NYC/Programs";
import RSVP from "../NYC/RSVP";
import SteeringCommittee from "../NYC/SteeringCommittee";
import Support from "../NYC/Support";

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
        <Router>
            <div className="flex space-around padding bg-bubblegum mobile-column mobile-center">
                <div className="primary-nav-el">
                    <img className="logo-nav" src="/images/Logo.svg" />
                    <img className="failspace-nav" src="/images/FAILSPACE.svg" />
                </div>
                <div className="primary-nav-el menu margin-top">
                    <h1 className="cursor" onClick={toggleSubMenuNYC}>NYC</h1>
                </div>
                <div className="primary-nav-el menu" >
                    <h1 className="cursor" onClick={toggleSubMenuDS}>Design Services</h1>
                </div>
                
            </div>
            <NYCNav active={nyc} />
            <DSNav active={ds} />

            {/* <Routes> looks through its children <Route> and renders teh first one that matches the current url.  */}

            <Routes>
                <Route path="/nyc" element={<NYCNav />} />
                <Route path="/design-services" element={<DSNav />} />
                <Route path="/design-services/about" element={<About />} />
                <Route path="/design-services/services" element={<Services />} />
=               <Route path="/design-services/portfolio" element={<Portfolio />} />
                <Route path="/design-services/contact" element={<Contact />} />
                <Route path="/nyc/steering-committee" element={<SteeringCommittee />} />
                <Route path="/nyc/programs" element={<Programs />} />
                <Route path="/nyc/RSVP" element={<RSVP />} />
                <Route path="/nyc/support" element={<Support />} />
                <Route path="/nyc/connect" element={<Connect />} />
            </Routes>
        </Router>
        
    )
}

export default PrimaryNav;