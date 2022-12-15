/* === React Elements === */
import React from "react";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import audio from "./Audio/Drumpel_Edit.wav"

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
                            <h3>Writing With and Through Dance//Dancing With and Through Writing: A 3 day workshop</h3>
                            <p className="zero-margin"><b>Event Details</b></p>
                            <h4>January 8, 2023 | 12:30-3:45 PM
                            <br></br>January 9, 2023 | 5:30-7:45 PM
                            <br></br>January 10, 2023 | 5:30-7:45 PM
                            <br></br>CPR - Center for Performance Research
                            <br></br>361 Manhattan Ave Brooklyn, NY 11211
                            <br></br>Full Workshop $120 | $60 | $30 | $0
                            <br></br>Drop-In $40 | $20 | $10 | $0</h4>
                            <p className="zero-margin"><b>Event Description</b></p>
                            <p>In this workshop, we will engage writing and dancing/moving as 2 related physical practices while we inquire into how they might meet and exist in a myriad of fluid and kaleidoscopic relationships to one another. We will listen for how our writing and moving practices are already inherently in embodied dialogue with one another, how they might desire to further be intermingled or parsed out, and how they might hold space for and inform one another. We will actively center our own bodies as teachers, students, movers, witnesses, archives, and archivists, and honor our multisensory perception and meaning-making as physical processes.* We will explore various practices that invite, reveal, and shift conversations between our own nuanced inner landscapes, our outer environments, and those of our influences, lineages, and fellow participants- acknowledging our moving, thinking, perceiving, meaning-making, witnessing, writing, and archiving as inherently collaborative and co-created acts.</p>   
                            <p>We will spend time each day moving together, witnessing each other move, writing together, reading together, and sharing and discussing our questions, interests, problems, dilemmas, and discoveries. Participants will be invited to share writing in any stage of development, and offer and receive discussion around their writing and moving if desired. This workshop is for people who identify as dancers, movers, writers, and for those who don’t. While there will be some writing prompts offered, participants are welcome to come to this workshop with existing writing or movement they are working with to see how our practice together might shift it or create new avenues into its unfolding. Participants are also welcome to come to this workshop without previous writing or movement and see what emerges.</p>             
                            <p><em>*A note on language: I use “body” and “physical” to encompass the interweaving of what some others might call body/mind/spirit/memory/culture/imagination, or physical/mental/spiritual/cultural/imaginative. “Body” and “physical” are luscious, inviting, and inclusive words for me. I understand that these words have historically been used in objectifying and compartmentalizing ways in some spheres of academia and elsewhere. I do not intend to discount or skirt around the impact of this legacy of language. I’m interested in addressing this legacy while finding and using language in ways that allow for fluidity and honor complexity in meaning-making. Please substitute the words that feel luscious/exciting/embodied to you.</em></p>            
                        </div>
                        <div class="portrait">
                            <img class="SC-portrait" src="/images/RSVP/EmmaGrace.JPG"/>
                        </div>
                    </div>
                    <div class="flex side-column center">
                        <a href="https://www.eventbrite.com/e/writing-with-and-through-dancedancing-with-and-through-writing-a-3-day-w-tickets-489610818137" target="_blank"><button className="rsvp-button">
                                RSVP</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-heading">
            <h3>PAST</h3>
        </div>
        <div className="standard-spacing flex column bg-light-pink">
            <div class="flex space-btwn">
                <div class="flex space-btwn mobile-column">
                    <div class="flex rsvp mobile-column-reverse">
                        <div class="flex bio column">
                            <h3>PARTY
                            <br></br>RETROGRADE

                            </h3>
                            <ReactAudioPlayer
                             src={audio}
                             controls 
                            />
                            <p className="zero-margin"><b>Event Details</b></p>
                            <h4>September 9, 2022 | 6:30 PM
                            <br></br>Triskelion Arts
                            <br></br>106 Calyer St, Brooklyn, NY 11222
                            <br></br>$20 | $30 | $40</h4>
                            <h4>9.9.22 Mercury stations retrograde. RETROGRADE is a party /performance / communal catharsis / reason to dance / astrological celebration.</h4>
                            <p className="zero-margin"><b>Event Description</b></p>
                            <p>PARTY: RETROGRADE is an evening of astrological catharsis that celebrates the transformation possible through disruption, revision, and review. We celebrate Mercury’s retrograde transit with performances that will make us FEEL something, auction WINNERS and losers, and a well deserved DANCE party for the FAILSPACE community (don’t forget the yummy STREET FOOD).</p>
                            <p><a href="https://buy.stripe.com/cN23dV0nRb2M5Hy000">Sign up for the $3,000 FSDS Website Raffle</a> in advance or during the event. (<a href="/raffle">Raffle details</a>).</p>
                            <p>All proceeds will support the next evolution of FAILSPACE’s Mentorship Workshops for 2023. COME THRU.</p>
                            <p>Doors Open & Silent Auction begins at 6:30.
                            <br></br>Performances start at 7:30.
                            <br></br>Live Auction begins at 8:15.
                            <br></br>DJ & Dance Party at 9:00.
                            <br></br>Party until 10:30.</p>
                            <p><b>Performances:</b></p>
                            <ul>
                                <li>Shannon Yu</li>
                                <li>Kelsey Rondeau  </li>
                            </ul>
                            <p><b>Comedy:</b></p>
                            <ul>
                                <li>Francesca D’Uva</li>
                            </ul>
                            <p><b>Projection:</b></p>
                            <ul>
                                <li>Angel Acuña</li>
                            </ul>
                            <p><b>DJ:</b></p>
                            <ul>
                                <li>Drumpelstiltskin</li>
                            </ul>
                            <p><b>Menu:</b></p>
                            <ul>
                                <li>Sweet & Spicy Pulled Pork or Shredded Oyster Mushrooms $12 (as a sandwich or street taco)</li>
                                <li>Fruit with Tajin $5</li>
                                <li>Assorted chips $3</li>
                            </ul>
                        </div>
                        <div class="portrait">
                            <img class="SC-portrait" src="/images/RSVP/PARTY.jpg"/>
                        </div>
                    </div>
                    <div class="flex side-column center">
                        <button className="rsvp-button">
                                PAST</button>
                    </div>
                </div>
            </div>
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
                        <button className="rsvp-button">
                                PAST</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default RSVP;