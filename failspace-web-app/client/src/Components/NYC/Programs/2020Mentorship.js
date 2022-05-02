/* === React Elements === */
import React from "react";
import { useState } from "react";

const MentorshipTwentyTwenty = (props) => {
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <div style={contentStyle} className="service-description bg-lemon">
            <p>FAILSPACE Design Services works with clients</p>
            <p>Squarespace, Shopify, Cargo, Webflow</p>
            <p>The FAILSACE Mentorship Program is sponsored, in part, by the Greater New York Arts Development Fund of the New York City Department of Cultural Affairs, administered by Brooklyn Arts Council.</p>
        </div>
    )
}

export default MentorshipTwentyTwenty;