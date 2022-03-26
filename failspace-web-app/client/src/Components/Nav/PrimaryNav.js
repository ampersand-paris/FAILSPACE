/* === React Elements === */
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router,
        Routes,
        Route,
        Link } from "react-router-dom";

/* === Components === */
import NYCNav from "./NYCNav";
import DSNav from "./DSNav";


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
                    <Link to="/nyc"><h2 onClick={toggleSubMenuNYC}>NYC</h2></Link>
                </div>
                <div className="primary-nav-el">
                    <h1>FAILSPACE</h1>
                </div>
                <div className="primary-nav-el">
                    <Link to="/failspace-design-services"><h2 onClick={toggleSubMenuDS}>Design Services</h2></Link>
                </div>
            </div>
            <DSNav active={ds}/>
            <NYCNav active={nyc}/>

            {/* <Routes> looks through its children <Route> and renders teh first one that matches the current url.  */}

            <Routes>
                <Route path="/nyc">
                </Route>
                <Route path="/design-services">
                </Route>
                <Route path="/mission">
                    {/* <Mission /> */}
                </Route>
                <Route path="/services">
                    {/* <Services /> */}
                </Route>
                <Route path="/design-partners">
                    {/* <DesignTeam /> */}
                </Route>
                <Route path="/portfolio">
                    {/* <Portfolio /> */}
                </Route>
                <Route path="/contact">
                    {/* <Contact /> */}
                </Route>
                <Route path="/steering-committee">
                    {/* <SteeringCommittee /> */}
                </Route>
                <Route path="/programs">
                    {/* <Programs /> */}
                </Route>
                <Route path="/RSVP">
                    {/* <RSVP /> */}
                </Route>
                <Route path="/support">
                    {/* <Support /> */}
                </Route>
                <Route path="/connect">
                    {/* <Connect /> */}
                </Route>
            </Routes>
        </Router>
        
    )
}

export default PrimaryNav;