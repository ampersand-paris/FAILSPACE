/* === React Elements === */
import React from "react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wl1kywg', 'template_fhwpt59', form.current, 'bKAtfdgyIrsC1R5fG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
       setTimeout(() => {
           setSubmitted(true);
       }, 100);
    };

    if(submitted) {
        return (
            <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Contact</h1>
            <div className="full-height">
                <div className="contact-form">
                    <p className="bubblegum">Thank you for your inquiry. You can expect a response within 3-5 business days.</p>
                </div>
            </div>
        </div>
        );
    };

    return (
        <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Project Inquiry</h1>
            <div >
                <div className="contact-form">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        // action={FORM_ENDPOINT}
                        // onsubmit={handleSubmit}
                        // method="POST"
                        // target="_blank"
                    >
                        <div className="contact-info">
                            <input 
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="contact-input"
                                required
                            />
                            <input 
                                type="text"
                                placeholder="email"
                                name="email"
                                className="contact-input"
                                required
                            />
                        </div>
                        <div className="checkboxes">
                            <label className="checkbox-name">
                                <input 
                                    type="checkbox"
                                    value="Web Development"
                                    name="service"
                                />
                                <span class="checkmark"></span>
                                Web Development
                            </label>
                            <label className="checkbox-name">
                                <input 
                                    type="checkbox"
                                    value="Brand Identity"
                                    name="service"
                                />
                                <span class="checkmark"></span>
                                Brand Identity
                            </label>
                            <label className="checkbox-name">
                                <input 
                                    type="checkbox"
                                    value="Print & Publicatio"
                                    name="service"
                                />
                                <span class="checkmark"></span>
                                Print & Publication
                            </label>
                            <label className="checkbox-name">
                                <input 
                                    type="checkbox"
                                    value="Social Media Management"
                                    name="service"
                                />
                                <span class="checkmark"></span>
                                Social Media Campaigns
                            </label>
                            <label className="checkbox-name">
                                <input 
                                    type="checkbox"
                                    value="Film & Motion Graphics"
                                    name="service"
                                />
                                <span class="checkmark"></span>
                                Other
                            </label>
                        </div>
                        <div>
                            <textarea 
                                type="text"
                                placeholder="Please include a brief description of your project and project needs."
                                name="message"
                                className="textarea-input"
                                required
                            />
                        </div>
                        <div className="flex mobile-center">
                            <button
                                className="form-button"
                                type="submit"
                                value="Send"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;