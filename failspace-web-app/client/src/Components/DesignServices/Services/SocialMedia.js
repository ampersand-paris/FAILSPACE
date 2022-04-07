/* === React Elements === */
import React from "react";
import { useState } from "react";

const SocialMedia = (props) => {

    const contentStyle = {
        display: (props.active)
    }  
    
    return (
        <div style={contentStyle} className="service-description bg-orange">
            <p>FAILSPACE Design Services works with clients</p>
            <p>Squarespace, Shopify, Cargo, Webflow</p>
            <p>Software development using React, Django, Python</p>
        </div>
    )
}

export default SocialMedia;