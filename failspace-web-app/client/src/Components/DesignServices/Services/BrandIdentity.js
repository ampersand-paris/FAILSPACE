/* === React Elements === */
import React from "react";
import { useState } from "react";

const BrandIdentity = (props) => {
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <div style={contentStyle} className="table-description flex column bg-lemon">
            <div  className="table-padding">
                <div className="mentorship-letter">
                    <p>FAILSPACE Design Services works with clients</p>
                </div>
            </div>
            <p>Squarespace, Shopify, Cargo, Webflow</p>
            <p>Software development using React, Django, Python</p>
        </div>
    )
}

export default BrandIdentity;