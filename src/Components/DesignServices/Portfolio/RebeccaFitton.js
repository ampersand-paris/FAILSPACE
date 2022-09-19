/* === React Elements === */
import React from "react";
import { useState } from "react";

const RebeccaFitton = (props) => {
    
    return (
        <>
            <div className="flex column col-center bg-light-pink">
                <div className="full-width center flex bg-off-black"> 
                    <img className="portfolio-img bg-off-black" src="/images/portfolio/re_________.GIF" />
                </div>
                <div className="flex mobile-center">
                    <h2 className="portfolio-page-title bubblegum">Rebecca Fitton</h2> 
                </div>
                <div className="flex al-center column">
                    <div className="portfolio-desc">
                        <p>FAILSPACE Design Services collaborated with Rebecca Fitton and to produce marketing images and the zine for "re________". In its totality, "re________" is a digital, multi-room live performance at the intersection of place and Asian American identity. The zine holds the stories from Asian American collaborators and was mailed to audience members leading up to the performance so that it could be held and digested during the live event. The red and the gold offer a reverent framing of the stories they attempt to both weave together and make room for their differences.</p>
                        <p><a href='https://www.instagram.com/_rebecca.fitton'>@_rebecca.fitton</a></p>
                        <p><a href="https://rebeccafittonprojects.com">https://rebeccafittonprojects.com</a></p> 
                    </div>     
                </div>
            </div>
        </>
    )
}

export default RebeccaFitton;