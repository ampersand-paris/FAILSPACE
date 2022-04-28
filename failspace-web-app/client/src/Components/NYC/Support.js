/* === React Elements === */
import React from "react";
import { useState } from "react";

const Support = (props) => {

   
    return (
        <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Support</h1>
            <div className="flex column SC-intro">
                <h2>We welcome any and all support from our community. If you have something to offer that falls outside these three options, please reach out to us directly.</h2>
                <div className="flex space-btwn">
                    <div className="flex column col-center support-bttn">
                        <h3>Make a one-time donation.</h3>
                        <p>We are fiscally sponsored by ____, You can make a contribution via their donation portal.</p>
                    </div>
                    <div className="flex column col-center support-bttn">
                        <h3>Make a monthly contribution via Patreon.</h3>
                    </div>
                    <div className="flex column col-center support-bttn">
                        <h3>Work with our Design Services.</h3>
                        <p>10% of every design commission is directed towards our artistic programming.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;