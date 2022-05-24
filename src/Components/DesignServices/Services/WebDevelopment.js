/* === React Elements === */
import React from "react";

const WebDevelopment = (props) => {
   
    const contentStyle = {
        display: (props.active)
    }  
      
    return (
        <div style={contentStyle} className="table-description flex scroll column bg-ivy">
            <div className="table-heading ivy-text">
                <h3>What We Build</h3>
            </div>
            <div className="flex mobile-column table-padding">
                <div className="half mobile-full-width table-padding">
                    <h3>Hybrid Sites</h3>
                    <p>We combine HTML, CSS, and JavaScript with the Content Management Systems we work with to deliver branded websites with UX/UI design tailored to our client's needs while prioritizing ease-of-use in our deliverables. Hybrid websites are perfect for those who are looking for a custom website and are willing to learn a little in order to maintain their website on their own.</p> 
                    <p class="zero-margin"><b>We work with:</b> Webflow | Cargo | Shopify | Squarespace</p>
                </div>
                <div className="half mobile-full-width table-padding">
                    <h3>Custom Web Development</h3>
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
                    <p>We believe that good design stems from good relationships. We work intimately and iteratively with our clients to ensure that their needs are met at every level of the process. Working with FAILSPACE, clients are actievly engaged in providing feedback and revision during visual development, wireframing, website development, and final deliverable hand-off.</p>
                </div>
            </div>
        </div>
    )
}

export default WebDevelopment;