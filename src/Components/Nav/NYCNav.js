/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

/* === Components === */

const NYCNav = (props) => {

    const contentStyle = {
        display: (props.active)
    }

    return (
        <div className="bg-bubblegum" id="nycnav">
            <div className="sub-nav"  id="nycsubnav"style={contentStyle}>
                <div className="sub-nav-el">
                    <Link to="/nyc/steering-committee"><h2>Steering Committee</h2></Link>
                </div>
                <div className="sub-nav-el">
                    <Link to="/nyc/programs"><h2>Programs</h2></Link>
                </div>
                <div className="sub-nav-el">
                    <Link to="/nyc/RSVP"><h2>RSVP</h2></Link>
                </div>
                <div className="sub-nav-el">
                    <Link to="/nyc/support"><h2>Support</h2></Link>
                </div>
                <div className="sub-nav-el">
                    <Link to="/nyc/connect"><h2>Connect</h2></Link>
                </div>
            </div>
        </div>
        
    )
}

export default NYCNav;