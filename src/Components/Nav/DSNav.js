/* === React Elements === */
import React from "react";
import { Link } from "react-router-dom";

/* === Components === */


const DSNav = (props) => {

    const contentStyle = {
        display: (props.active)
    }
    
    return (
        <div className="bg-bubblegum" id="dsnav">
            <div className="sub-nav" id="dssubnav" style={contentStyle}>
                <div className="sub-nav-el">
                    <Link to="/design-services/about"><h2>About</h2></Link> 
                </div>
                <div className="sub-nav-el">
                    <Link to="/design-services/services"><h2>Services</h2></Link>
                </div>
                <div className="sub-nav-el">
                    <Link to="/design-services/portfolio"><h2>Portfolio</h2></Link>
                </div>
                <div className="sub-nav-el">
                    <Link to="/design-services/contact"><h2>Contact</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default DSNav;