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
        <div className="footer">
            <img 
                src=""
            />
            <div className="newsletter-form">
                <form
                    action={FORM_ENDPOINT}
                    onsubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
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
                        className="form-button"
                        type="submit"
                    >
                        Join
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Footer;