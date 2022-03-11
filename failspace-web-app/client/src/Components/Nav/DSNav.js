import React from "react";



const DSNav = (props) => {

    const contentStyle = {
        display: (props.active)
    }
    
    return (
        <>
        <div className="nyc-nav" style={contentStyle}>
            <div className="nyc-nav-el">
                <h2>Mission</h2>
            </div>
            <div className="nyc-nav-el">
                <h2>Contact</h2>
            </div>
            <div className="nyc-nav-el">
                <h2>Portfolio</h2>
            </div>
            <div className="nyc-nav-el">
                <h2>Design Team</h2>
            </div>
            <div className="nyc-nav-el">
                <h2>Services</h2>
            </div>
        </div>
        </>
        
    )
}

export default DSNav;