import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NYCNav = (props) => {

    const contentStyle = {
        display: (props.active)
    }

    return (
        <>
        <div className="nyc-nav" style={contentStyle}>
            <div className="nyc-nav-el">
                <h2>Steering Committee</h2>
            </div>
            <div className="nyc-nav-el">
                <h2>Support</h2>
            </div>
            <div className="nyc-nav-el">
                <h2>Programs</h2>
            </div>
            <div className="nyc-nav-el">
                <h2>RSVP</h2>
            </div>
        </div>
        </>
        
    )
}

export default NYCNav;