/* === React Elements === */
import React from "react";

const MentorshipTwentyTwentyOne = (props) => {
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <div style={contentStyle} className="table-description flex column scroll bg-ivy">
            <div  className="table-padding">
                <div className="mentorship-letter">
                    <p class="ivy-text"><b>A note from the FAILSPACE Steering Committee:</b></p>
                    <p class="ivy-text">The 2021 FAILSPACE Mentorship Workshops is an experiment in teaching and performance that nurtures creative exchange between three intergenerational partnerships. Our workshops will be co-taught by the following mentorship pairings: Juliana F. May and Lisa Fagan, Jonathan Gonzalez and Stacy Skolnik, and estrella/x supernova and mayfield brooks.</p>
                    <p class="ivy-text">FAILSPACE has been processing the multiple realites that appear when organizing artistic programming. We have learned that “programming” is and has always been relationship, and when treated as such has the capacity to hold us in place. We spent the last year and a half in slow relationship with the mentors and mentees, grounding in our collective needs and providing a reactive surface for research and conversation to inspire. We hope that the relationships we have cultivated with these incredible artists extend to and nourish our broader community.</p>
                    <p class="ivy-text">We are moving in unison with the moment of this time. We want nothing but to hold the evershifting nature of our movement to meet our evershifting collective needs. As we reenter and remember gathering, we recognize the immense amount of trust and vulnerability that these gatherings necessitate after...after..after... Will you hold our hands after all this time?</p>
                    <p class="ivy-text">During the COVID-19 Pandemic, FAILSPACE facilitated encounters between each of the postponed mentorship pairs to be in service of cultivating mentorship, research, and relationships. The souvenirs from each of their encounters are linked to their names to the left. These encounters and sourvenirs have shaped each of the workshops from their initially proposed forms to something that is reflective of the prolonged mentorship.</p>
                    <p class="ivy-text">We hope that these souvenirs act as reminders to our community that we create the conditions of our partnerships, both intimate and public.</p>
                    <p class="ivy-text">We also hope that the bring you joy.</p>
                </div>
            </div>
            <div className="table-heading ivy-text">
                <h3>Lisa Fagan & Juliana F. May</h3>
            </div>
            <div className="flex column bg-ivy table-padding">
                <div>
                    <p className="zero-margin"><b>Workshop Details</b></p>
                    <h4>July 26-30, 2021
                    <br></br>Target Margin Theater</h4>
                    <p className="zero-margin"><b>Workshop Description</b></p>
                    <p>This workshop will steer us directly into the challenge of re-encountering a physical choreographic practice after a year or more away and/or distanced. We will move and make after prolonged inactivity, pain, anxiety and loss, and in our gathering, we will welcome ungrounded, bizarre, and new feelings that arise. The workshop will hold space to include the individual ways we have been shaped during the pandemic in order to find our collective way through to embodying reimagined practices. This workshop meets people wherever they are and whomever they are becoming.</p> 
                </div>
            </div>
            <div className="table-heading ivy-text">
                <h3>Stacy Skolnik & Jonathan Gonzalez</h3>
            </div>
            <div className="flex column bg-ivy table-padding">
                <div>
                <p className="zero-margin"><b>Workshop Details</b></p>
                    <h4>July 19-26, 2021
                    <br></br>Prospect Park Peninsula</h4>

                    <p className="zero-margin"><b>Workshop Description</b></p>
                    <h4>Co-authoring</h4>
                    <p>This workshop invites participants of any medium and skill set to convene for improvisatory and discursive gatherings in an open-air setting. By way of establishing/editing/excising our vested creative interests and citational principles through processes of sharing aloud (as in a reading, a dance, a sound played over a speaker, a fleeting refrain), “co-authoring” will be a methodology we come to define collectively.</p>


                    <h4>Notes</h4>
                    <p>We will be meeting in a public park on grass so please bring anything you require to find comfort. A boombox with an Aux cord and Tape deck will be made available for any amplified needs. Bathrooms will be accessible to our meeting site. We will take a break at the halfway point (12p), and request you BYOsustenance, of any form, to be present collectively.</p>               

                    <h4>Request</h4>
                    <p>For our first gathering, we ask that you bring/note down somewhere/travel with a citation that you honor as foundational to your creative interest, and pluralities of self. We will share these aloud. Sharing aloud can be conducted in whatever form serves your study with us.</p>
                </div>
            </div>
            <div className="table-heading ivy-text">
                <h3>Extellx Supernova & mayfield brooks</h3>
            </div>
            <div className="flex column bg-ivy table-padding">
                <div>
                    <p className="zero-margin"><b>Workshop Details</b></p>
                    <h4>July 19-26, 2021
                    <br></br>Prospect Park Peninsula</h4>

                    <p className="zero-margin"><b>Workshop Description</b></p>
                    <h4>Co-authoring
                    Creating/Conjuring/Covenant:
                    A Convergence of Raucous Embodiments by/for BIQTPOC Qwitches</h4>

                    <p>mayfield and Estrellx invite you into a series of effervescent encounters. we will take time to tune in, gather our energies, and set intentions for the year ahead. we will use our different & intersecting creative practices, to replenish ourselves, reflect, renew. and restore throughout the December 2021 moon cycle. we will offer BIQTPOC-centered somatic explorations, share embodied research, have conversations on lineage, land, love, intimacy, collectivity, abundance/scarcity, labor & inheritance and other topics as they come up from within the group. this invitation is open to all BIPOC and BIQTPOC folks and we would love it if you would be able to commit to being present, virtually or IRL, to all three sessions as you see fit. sending love, grounding energies, and excited to see those of you who decide to come through and initiate this BIQTPOC Coven </p>
                </div>
            </div>
            <div className="table-heading ivy-text">
                <p>The FAILSACE Mentorship Program is sponsored, in part, by the Greater New York Arts Development Fund of the New York City Department of Cultural Affairs, administered by Brooklyn Arts Council.</p>
            </div>
        </div>
    )
}

export default MentorshipTwentyTwentyOne;