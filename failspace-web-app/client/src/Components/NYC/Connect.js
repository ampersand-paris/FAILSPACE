/* === React Elements === */
import React from "react";
import { useState } from "react";

const Connect = (props) => {

    const FORM_ENDPOINT = "";
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
       setTimeout(() => {
           setSubmitted(true);
       }, 100);
    };

    if(submitted) {
        return (
            <div>
                <p>Thank you for your inquiry. We look forward to getting back to you!</p>
            </div>
        );
    };

    return (
        <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Connect</h1>
            <div className="connect-page">
                <div className="community-block">
                    <p>FAILSPACE wants to know what you are up to. We invite you to share your events, performances, fundraisers, and opportunities with us, so that we can uplift the work already happening in our community. We use our monthly newsletter that drops on the first of each month as connective tissue. If you would like to share through our newsletter, please send your information to failspacenyc@gmail.com using the following guidelines:</p>
                    <h3>Events, Performances, & Fundraisers</h3>
                    <ul>
                        <li>Title</li>
                        <li>Date & Time</li>
                        <li>Image smaller 1MB</li>
                        <li>Description max 150 works</li>
                        <li>Link to webpage</li>
                    </ul>
                    <h3>Opportunities</h3>
                    <ul>
                        <li>Company</li>
                        <li>Position</li>
                        <li>Compensation</li>
                        <li>Description max 150 works</li>
                        <li>Link to application or email</li>
                    </ul>
                </div>
                <div className="collaborations-block">
                    <div>
                        <div className="connect-form">
                            <form
                                action={FORM_ENDPOINT}
                                onsubmit={handleSubmit}
                                method="POST"
                                target="_blank"
                            >
                                <input 
                                    type="text"
                                    placeholder="Name"
                                    name="name"                                        
                                    className="contact-input"
                                    
                                />
                                <input 
                                    type="text"
                                    placeholder="email"
                                    name="email"
                                    className="contact-input"
                                    
                                />
                                <div>
                                    <textarea 
                                        type="text"
                                        placeholder="Please use this form to send us your collaborations, feedback, or flirtations. Name and email are not required if you would like to be anonymous."
                                        name="message"
                                        className="textarea-input"
                                        required
                                    />
                                </div>
                                <div>
                                    <button
                                        className="form-button"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Connect;