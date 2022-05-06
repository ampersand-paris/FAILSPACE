/* === React Elements === */
import React from "react";
import { useState } from "react";

const PrintPublication = (props) => {
   
    const contentStyle = {
        display: (props.active)
    }  

    return (
        <div style={contentStyle} className="table-description flex scroll column bg-royal-blue">
            <div  className="table-padding">
                <div className="mentorship-letter">
                    <p className="ivy-text">FAILSPACE Design Services works with a wide range of clients from individual artists and artis institutions to small businesses and large companies looking to develop their digital prescence.</p>
                </div>
            </div>
            <div className="table-heading ivy-text">
                <h3>What We Build</h3>
            </div>
            <div className="flex table-padding">
                <div className="half table-padding">
                    <h3>Hybrid Sites</h3>
                    <p>We combine HTML, CSS, and JavaScript with the Content Management Systems we work with to deliver branded websites with UX/UI design tailored to our client's needs while prioritizing ease-of-use in our deliverables. Hybrid websites are perfect for those who are looking for a custom website and are willing to learn a little in order to maintain their website on their own.</p> 
                    <h4>Content Management Systems we use:</h4>
                    <ul>
                        <li>Webflow</li>
                        <li>Cargo</li>
                        <li>Shopify</li>
                        <li>Squarespace</li>
                    </ul>
                </div>
                <div className="half table-padding">
                    <h3>Custom Development</h3>
                    <p>We help clients develop existing code or deploy full-stack web applications from the ground up. Here we combine our in-house design team with the latest in programming technologies.</p> 
                    <h4 class="zero-margin">Technologies we use:</h4>
                    <p class="zero-margin"><b>Languages:</b> JavaScript (ES6) | HTML & HTML5 | CSS & CSS3 | Python
                    <br></br><b>Libraries and Frameworks:</b> React | Node.js | Express.js | Django
                    <br></br><b>Database:</b> MongoDB | Mongoose | PostgreSQL</p>
                </div>
            </div>
            <div className="table-heading ivy-text">
                    <h3>How We Build</h3>
            </div>
            <div className="flex table-padding">
                <div>
                    <h3>The Process</h3>
                    <p>We believe that good design stems from good relationships. We work intimately and iteratively with our clients to ensure that their needs are met at every level of the process. Working with FAILSPACE, clients are actievly engaged in providing feedback and revision during visual development, wireframing, website development, and final deliverable hand-off.</p>
                </div>
            </div>
        </div>
    )
}

export default PrintPublication;