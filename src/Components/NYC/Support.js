/* === React Elements === */
import React from "react";

const Support = (props) => {

   
    return (
        <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Support</h1>
            <div className="flex column col-center">
                <h2 className="intro">We welcome any and all support from our community. If you have something to offer that falls outside these three options, please reach out to us directly.</h2>
                <div className="flex wrap space-btwn full-width patreon-bttns mobile-center">
                    <a className="patreon-bttn support-bttn" href="/design-services/services">
                        <div className="flex column">
                            <h3>Currenty seeking fiscal sponsorship!</h3>
                            <p>Updates coming soon!</p>
                        </div>
                    </a>
                    <a className="patreon-bttn support-bttn flex-order-three" href="https://www.patreon.com/FAILSPACE">
                        <div className="flex column">
                            <h3>Monthly contribution via Patreon.</h3>
                        </div>
                    </a>
                    <a  className="patreon-bttn support-bttn" href="/design-services/services">
                        <div className="flex column">
                            <h3>Work with our Design Services.</h3>
                            <p>10% of every design commission is directed towards our artistic programming.</p>
                        </div>
                    </a>
                </div>
                <div className="flex">
                    <div className="support-div support-line"></div>
                    <div className="support-div"></div>
                </div>
                <div className="flex column col-center patreon-tiers">
                    <h2 className="bubblegum">Patreon Tiers</h2>
                    <div className="flex full-width space-btwn mobile-column">
                        <div className="flex column patreon-tier">
                            <h3>Feelin' Flirty</h3>
                            <h4>$3 / month</h4>
                            <p>Perks:</p>
                            <ul className="perks">
                                <li> Energetic alignment</li>
                                <li>One-seventh of your contribution invested into the Resource Stream for Black Indigenous Leadership</li>
                            </ul>
                        </div>
                        <div className="flex column patreon-tier">
                            <h3>Blow us a kiss</h3>
                            <h4>$9 / month</h4>
                            <p>Perks:</p>
                            <ul className="perks">
                                <li>Energetic alignment</li>
                                <li>5% FAILSPACE Services discount</li>
                                <li>One-seventh of your contribution invested into the Resource Stream for Black Indigenous Leadership</li>
                            </ul>
                        </div>
                        <div className="flex column patreon-tier">
                            <h3>Total Support</h3>
                            <h4>$25 / month</h4>
                            <p>Perks:</p>
                            <ul className="perks">
                                <li>Energetic alignment</li>
                                <li>10% FAILSPACE Services Discount</li>
                                <li>Free 1-Hour FAILSPACE Services Consultation</li>
                                <li>One-seventh of your contribution invested into the Resource Stream for Black Indigenous Leadership</li>
                            </ul>
                        </div>
                        <div className="flex column patreon-tier">
                            <h3>Ride or Die</h3>
                            <h4>$50 / month</h4>
                            <p>Perks:</p>
                            <ul className="perks">
                                <li>Energetic alignment</li>
                                <li>15% FAILSPACE Services Discount</li>
                                <li>Free 1-Hour FAILSPACE Services Consultation</li>
                                <li>$25 monthly contribution to the Resource Stream for Black Indigenous Leadership</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;