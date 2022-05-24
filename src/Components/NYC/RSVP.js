/* === React Elements === */
import React from "react";
import { useState } from "react";

const RSVP = (props) => {

   
    return (
        <>
        <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">RSVP</h1>
        </div>
        <div class="section-heading">
            <h3>Upcoming</h3>
        </div>
        <div className="standard-spacing bg-light-pink">
            <div class="flex space-btwn">
                <div class="flex space-btwn mobile-column">
                    <div class="flex rsvp mobile-column-reverse">
                        <div class="flex bio column">
                            <h3>litlle loco(motion)
                            <br></br>Erik elizondo & Dimitri Kalaitzidis

                            </h3>
                            <p className="zero-margin"><b>Workshop Details</b></p>
                            <h4>July 3&4, 2022 | 1:00–3:30 PM
                            <br></br>Center for Performance Research
                            <br></br>361 Manhattan Ave
                            <br></br>$0 | $10 | $20 | $40</h4>
                            <p className="zero-margin"><b>Workshop Description</b></p>
                            <p>This workshop will focus on deconstructing movement habits, working with efficiency while encountering complexity, and the building of mobility, endurance, and strength. We will work with improvisation, which has been developed focusing on impulses to simultaneously coordinate and disassociate the body. Continuity and the layering of focus are tools which we will use to identify habits and create new movement patterns. The form of exploration will develop in gradual layers and vary, offering the chance to explore the body through upright positions, through the floor, and through the air, always focusing on an active and inquisitive process. All movement backgrounds and levels are more than welcome.</p>                        
                        </div>
                        <div class="portrait">
                            <img class="SC-portrait" src="/images/RSVP/LosLittleGuys.jpg"/>
                        </div>
                    </div>
                    <div class="flex side-column center">
                        <a href="https://www.eventbrite.com/e/workshop-los-little-guys-little-locomotion-co-presented-w-failspace-tickets-330891103197"><button className="rsvp-button">
                                RSVP</button></a>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default RSVP;