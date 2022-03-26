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
import Mission from "../DesignServices/Mission"
import Services from "../DesignServices/Services";
import Contact from "../DesignServices/Contact";
import DesignPartners from "../DesignServices/DesignPartners";
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
            <NYCNav active={nyc} />
            <DSNav active={ds} />
            
            {/* <Routes> looks through its children <Route> and renders teh first one that matches the current url.  */}

            <Routes>
                <Route path="/nyc" element={<NYCNav />} />
                <Route path="/design-services" element={<DSNav />} />
                <Route path="/design-services/mission" element={<Mission />} />
                <Route path="/design-services/services" element={<Services />} />
                <Route path="/design-services/design-partners" element={<DesignPartners />} />
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