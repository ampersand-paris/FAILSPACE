/* === React Elements === */
import React from "react";

const FilmMotion = (props) => {

    const contentStyle = {
        display: (props.active)
    }  

    return (
        <div style={contentStyle} className="service-description bg-grape-soda">
            <p>FAILSPACE Design Services works with clients</p>
            <p>Squarespace, Shopify, Cargo, Webflow</p>
            <p>Software development using React, Django, Python</p>
        </div>
    )
}

export default FilmMotion;