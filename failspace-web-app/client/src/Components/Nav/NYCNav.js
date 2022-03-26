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
        <>
        <div className="nyc-nav" style={contentStyle}>
            <div className="nyc-nav-el">
                <Link to="/steering-commitee"><h2>Steering Committee</h2></Link>
            </div>
            <div className="nyc-nav-el">
                <Link to="/programs"><h2>Programs</h2></Link>
            </div>
            <div className="nyc-nav-el">
                <Link to="/RSVP"><h2>RSVP</h2></Link>
            </div>
            <div className="nyc-nav-el">
                <Link to="/support"><h2>Support</h2></Link>
            </div>
            <div className="nyc-nav-el">
                <Link to="/connect"><h2>Connect</h2></Link>
            </div>
        </div>
        </>
        
    )
}

export default NYCNav;