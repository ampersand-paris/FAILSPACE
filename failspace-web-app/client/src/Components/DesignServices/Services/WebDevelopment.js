/* === React Elements === */
import React from "react";
import { useState } from "react";

const WebDevelopment = (props) => {
   
    const contentStyle = {
        display: (props.active)
    }  
      
    return (
        <div style={contentStyle} className="table-description flex column bg-ivy">
            <div  className="table-padding">
                <div className="mentorship-letter">
                    <p className="ivy-text">FAILSPACE Design Services works with a wide range of clients from individual artists and artis institutions to small businesses and large companies looking to develop their digital prescence. We workgi</p>
                </div>
            </div>
            <div className="table-heading ivy-text">
                <h3>Technologies We Use</h3>
            </div>
            <div className="flex table-padding">
                <div className="half">
                    <h3>Hybrid</h3>
                    <p>We combine HTML, CSS, and JavaScript with the Content Management Systems we work with to deliver branded websites with UX/UI design tailored to our client's needs while prioritizing ease-of-use in our deliverables. Hybrid websites are perfect for those who are looking for a custom website and are willing to learn a little in order to maintain their website on their own.</p> 
                    <h4>Content Management Systems we use:</h4>
                    <ul>
                        <li>Webflow</li>
                        <li>Cargo</li>
                        <li>Shopify</li>
                        <li>Squarespace</li>
                    </ul>
                </div>
                <div className="half">
                    <h3>Custom Web Development</h3>
                    <p>We combine HTML, CSS, and JavaScript with the Content Management Systems we work with to deliver branded websites with UX/UI design tailored to our client's needs while prioritizing ease-of-use in our deliverables. Hybrid websites are perfect for those who are looking for a custom website and are willing to learn a little in order to maintain their website on their own.</p> 
                    <h4>Technologies we use:</h4>
                    <ul>
                        <li>React</li>
                        <li>Django</li>
                        <li>Shopify</li>
                        <li>Squarespace</li>
                    </ul>                </div>
            </div>
        </div>
    )
}

export default WebDevelopment;