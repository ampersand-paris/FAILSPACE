/* === React Elements === */
import React from "react";
import { useState } from "react";

const TAP = (props) => {
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <div style={contentStyle} className="table-description flex column scroll bg-royal-blue">
            <div className="flex column bg-royal-blue table-padding">
                <h1>Teaching Artist Program</h1>
                <p className="zero-margin"><b>Workshop Details</b></p>
\                <h4>March 9-13, 2020
                <br></br>Brooklyn Arts Exchange</h4>

                <p className="zero-margin"><b>Workshop Description</b></p>
                <p>This workshop is a moving think tank. Choreography can be a framework for deploying difference in a time of increasing anxiety. What do I mean by difference? Who is in the room? What does it mean for us to be together? We are not the same but we are bound by invisible tethers and the strangeness of behaving together. I am interested in the strangeness and try to tease it out in ways both systematic and spontaeous. We make by doing. We perform as we make a performance, or particpte in a workshop. I will share ways that I harness immediacy, mystery, relevance, irreverence, and import. I am interested in what is definitive and unstable. Are we foolish for still being inspired by performance? I like dancing. I like it a lot. We become beautiful in the process of performing but beautiful is not enough. I want to hold all of us. I want the differnces held. Do you care to join? It is all too much</p> 
                
                <p>My proposed class consists of three primary sections intended to spot the individual and the collective. THe first section will comprise of high energy cardio, body shaking, sweaty fun, latina fire calisthenics. Supported and direct by a wet, fierce playlist, this portion is intended to viscerally push our bodies/mind and nurture our confidence as well. The second section will focus on creating/producing. Guiding participants through wiritng, doodles, pastels, dance, cleaning, speaking, bathing. the goal of htis output is simply to get out of our own dam way and gatehr as much amterial, let's let it out! THe third section is shere we get to rest in our soft listenings. Providing soaps, water, oils, massage, I'm excited to create a garden bathroom oasis vibe where we can all just be in our divine light and thank and thank and thank and thank. Practicing gratitude as a creation AND creating as a way to thank.</p>
            </div>
            <div className="table-heading lemon-text">
                <p>The FAILSACE Mentorship Program is sponsored, in part, by the Greater New York Arts Development Fund of the New York City Department of Cultural Affairs, administered by Brooklyn Arts Council.</p>
            </div>
        </div>
    )
}

export default TAP;