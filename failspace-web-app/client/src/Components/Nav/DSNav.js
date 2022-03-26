/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

/* === Components === */


const DSNav = (props) => {

    const contentStyle = {
        display: (props.active)
    }
    
    return (
        <div className="nyc-nav" style={contentStyle}>
            <div className="nyc-nav-el">
                <Link to="/design-services/mission"><h2>Mission</h2></Link> 
            </div>
            <div className="nyc-nav-el">
                <Link to="/design-services/services"><h2>Services</h2></Link>
            </div>
            <div className="nyc-nav-el">
                <Link to="/design-services/design-partners"><h2>Design Partners</h2></Link>
            </div>
            <div className="nyc-nav-el">
                <Link to="/design-services/portfolio"><h2>Portfolio</h2></Link>
            </div>
            <div className="nyc-nav-el">
                <Link to="/design-services/contact"><h2>Contact</h2></Link>
            </div>
        </div>
    )
}

export default DSNav;