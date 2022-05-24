/* === React Elements === */
import React from "react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Connect = (props) => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wl1kywg', 'template_e4qdtxc', form.current, 'bKAtfdgyIrsC1R5fG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    const FORM_ENDPOINT = "";
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
       setTimeout(() => {
           setSubmitted(true);
       }, 100);
    };

    if(submitted) {
        return (
            <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Connect</h1>
            <div className="flex space-btwn extra-margin mobile-column">
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
                            <p className="bubblegum">Thank you for your inquiry. We look forward to getting back to you!</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        );
    };

    return (
        <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Connect</h1>
            <div className="flex space-btwn extra-margin mobile-column">
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
                                ref={form}
                                onSubmit={sendEmail}
                                // action={FORM_ENDPOINT}
                                // onsubmit={handleSubmit}
                                // method="POST"
                                // target="_blank"
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
                                <div className="flex mobile-center">
                                    <button
                                        className="form-button"
                                        type="submit"
                                        onClick={handleSubmit}
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