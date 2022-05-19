/* === React Elements === */
import React from "react";
import { useState } from "react";

/* === Components === */


const Footer = () => {
    
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
                <p>Welcome to the FAILSPACE newsletter!</p>
            </div>
        );
    };

    return (
        <div className="flex column standard-spacing bg-light-pink">
            <div className="footer mobile-column-reverse">
                <div className="mobile-row mobile-space-around">
                    <a href="https://www.instagram.com/failspacenyc/">
                        <img 
                            src="/logos/Instagram.svg"
                            className="social-media-logo"
                        />
                    </a>
                    <a href="https://www.patreon.com/FAILSPACE">
                        <img 
                            src="/logos/Patreon.svg"
                            className="social-media-logo"
                        />
                    </a>
                </div>
                <div className="newsletter-form">
                    <form
                        action={FORM_ENDPOINT}
                        onsubmit={handleSubmit}
                        method="POST"
                        target="_blank"
                    >
                        <div className="form-spacing">
                            <input 
                                type="text"
                                placeholder="First Name"
                                name="fname"                                        
                                className="newsletter-input"
                            />
                            <input 
                                type="text"
                                placeholder="Last Name"
                                name="lname"                                        
                                className="newsletter-input"            
                            />
                            <input 
                                type="text"
                                placeholder="email"
                                name="email"
                                className="newsletter-input"
                            />
                            <button
                                className="footer-button"
                                type="submit"
                            >
                                Join Newsletter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <p>In an effort to build a low-carbon, more eco-friendly website, we have chosen to reduce the amount of images stored on this site. For images from our workshops and events, please visit our Instagram.</p>
            </div>
        </div>
    )
}

export default Footer;