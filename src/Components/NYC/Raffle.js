/* === React Elements === */
import React from "react";

const Raffle = () => {

    return (
        <>
            <div className="standard-spacing bg-light-pink">
                <h1 className="page-title bubblegum">Raffle</h1>
                <h2 className="intro">FAILSPACE Design Services is raffling off a $3,000 website to help support the next evolution of the Mentorship Workshops. Winner selected at random on 9.9.22!!!!!</h2>
            </div>
            <div class="section-heading">
                <h3>Contest Details</h3>
            </div>
            <div className="standard-spacing bg-light-pink">
                <div class="flex space-btwn mobile-column">
                    <div class="flex column SC-container">
                        <div class="flex SC-member mobile-column-reverse">
                            <div class="flex bio column">
                                <h3>Entering the raffle</h3>
                                <ul>
                                    <li>Raffle tickets are $20 / entry.</li>
                                    <li>Participants may purchase unlimited entries.</li>
                                    <li>Raffle tickets purchased online and while in attendance at PARTY will be entered into the same selection pool. PARTY attendance does not affect your chances, but it sure would be fun to see your reaction when you win!</li>
                                    <li>Online raffle ticket purchases close at 6:00 PM on 9.9.22.</li>
                                    <li>Contest winner will be selected LIVE at PARTY on 9.9.22 at the end of the live auction.</li>
                                    <li>Please include accurate contact information at checkout.</li>
                                    <li>If you would like to build a larger website than provided in the description, the $3,000 can be applied as credit towards the larger project. The winner will be responsible for paying the remaining balance.</li>
                                </ul>
                                <div class="flex center">
                                    <a href="https://buy.stripe.com/cN23dV0nRb2M5Hy000"><button className="rsvp-button">
                                    Enter Raffle</button></a>
                                </div>
                                <h3>Building a website with FAILSPACE Design Services</h3>
                                <p>This $3,000 website package comes with 50 hours of support for building out the winner's digital presence. FAILSPACE Design Services designers, Ampersand Paris and Angel Acuña, will work with the winner to cultivate a brand identity and deploy it to the web. The full FAILSPACE design process includes vision boarding, wireframing, website development, final deliverable handoff and training the client how to use their new website.</p>
                                <p>Final deliverables will include:</p>
                                <ul>
                                    <li>Vision board with brand guidelines</li>
                                    <li>Up to 10 pages/sections</li>
                                    <li>Fully deployed website to winner's domain</li>
                                </ul>
                                <p>See the example to the right for an example of the size of the website and an approximation of how the hours are broken down. Visit our <a href="/design-services/services">services</a> and <a href="/design-services/portfolio">portfolio</a> for more information on FSDS.</p>
                                <p>You can expect the process to take about two to three months.</p>
                            </div>
                            <div class="portrait">
                                <img class="SC-portrait" src="/images/RSVP/ExampleProposal.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex column side-column SC-info">
                        <h3>Important Information:</h3>
                        <ul>
                            <li>Website must be hosted using Webflow, Squarespace, or Cargo.</li>
                            <li>FAILSPACE is not responsible for the purchase of a domain name or hosting services.</li>
                            <li>FAILSPACE will meet branding and technical needs for the project; however, FSDS is not responsible for providing website copy or images.</li>
                            <li>FSDS Fee is waived for the project.</li>
                            <li>If the winner is not present at PARTY, the winner will be notified by email within 24 hours of selection.</li>
                            <li>If you are selected and do not respond with acceptance within 48 hours after the selection, another winner will be chosen.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Raffle;