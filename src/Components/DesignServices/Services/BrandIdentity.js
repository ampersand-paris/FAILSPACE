/* === React Elements === */
import React from "react";

const BrandIdentity = (props) => {
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <div style={contentStyle} className="table-description flex  column bg-lemon full-height">
            <div className="table-padding">
                <div className="branding-intro">
                    <h1 className="branding lemon-text">We help clients <em class="big-text">define</em> and <em class="big-text">refine</em> their visual presence.</h1>
                </div>
            </div>
            <div className="table-heading lemon-text">
                <h3>Create Your Brand</h3>
            </div>
            <div className="flex column table-padding">
                <p>We work with clients who want to develop a unique digital presence. Whether our clients come to us with a branding history or is beginning to carve out a space for themselves in their industry, we believe that good branding starts with building a relationship to the client and their mission.</p> 
                <p>We work intimately and iteratively with our branding clients to arrive at an emergent brand at the intersection of their project needs, creative expression, and voice.</p>
                <div className="flex mobile-column mobile-width">
                    <div className="mobile-full-width half">
                    <h3>Branding Design</h3>
                        <ul>
                            <li>Brand Name</li>
                            <li>Logo</li>
                            <li>Logo Usage</li>
                            <li>Colors</li>
                            <li>Typography</li>
                            <li>Brand Guidelines</li>
                            <li>Marketing Assets</li>
                        </ul>
                    </div>
                    <div className="mobile-full-width half">
                        <h3>Stationary Design</h3>
                        <ul>
                            <li>Letterheads</li>
                            <li>Business Cards</li>
                            <li>Invoices</li>
                            <li>Contracts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandIdentity;