/* === React Elements === */
import React from "react";
import { useState } from "react";

const About = () => {

   
    return (
        
        <div className="standard-spacing">
            {/* <div className="page-transition">
            </div> */}
            <div>
                <h1 className="page-title">About</h1>
                <p>Designing with FAILSPACE is a collaborative relationship between designer and client. The FAILSPACE Design Services process unfolds over a series of conversations in which our designers identify an aesthetic voice, develop its expression, and refine its function. Throughout the process, we continually uplift design that calls in and returns to the client's mission and highest values.</p>
                <p>FAILSPACE Design Services is committed to equitable design that serves the aesthetic and branding needs of their clients while investing in a cooperative and artist driven future.</p>
            </div>
            <h1>Design Partners</h1>
            <div className="design-partners-display">
                <div className="design-partner">
                    <img 
                        className="portrait" 
                        src="/images/Citrus Self-Portrait.JPG" />
                    <div>
                        <h1>Ampersand Paris</h1>
                        <p>Ampersand Paris is a fermentation revivalist and interdisciplinary performance artist working in Brooklyn, New York. She concerns herself with taking care of nearly invisible things: bacteria, yeast, computer languages, earthworms, and the liminal space of trans existence. Her overlapping processes of fermentation, decomposition, self-portraiture, and performance improvisation build relationships to these invisible forces and illuminate their world-shaping impacts. Her desire is to learn the technologies of the small in order to care for big transformations necessary to survive, if not effervesce, in climate ruin.</p>
                    </div>
                
                </div>
                <div className="design-partner">
                    <img 
                        className="portrait"
                        src="/images/Citrus Self-Portrait.JPG" />
                    <div>
                        <h1>Angel Acuña</h1>
                        <p>Ampersand Paris is a fermentation revivalist and interdisciplinary performance artist working in Brooklyn, New York. She concerns herself with taking care of nearly invisible things: bacteria, yeast, computer languages, earthworms, and the liminal space of trans existence. Her overlapping processes of fermentation, decomposition, self-portraiture, and performance improvisation build relationships to these invisible forces and illuminate their world-shaping impacts. Her desire is to learn the technologies of the small in order to care for big transformations necessary to survive, if not effervesce, in climate ruin.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;