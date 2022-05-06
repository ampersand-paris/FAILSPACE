/* === React Elements === */
import React from "react";
import { useState } from "react";

const BrandIdentity = (props) => {
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <div style={contentStyle} className="table-description flex scroll column bg-lemon">
            <div className="table-padding">
                <div className="mentorship-letter">
                    <h1 className="party"><span class="lemon-text">We help clients</span> <em>define</em> <span class="lemon-text">and</span> <em>refine</em> <span class="lemon-text">their visual presence.</span></h1>
                </div>
            </div>
            <div className="table-heading lemon-text">
                <h3>Build Your Brand</h3>
            </div>
            <div className="flex column table-padding">
                <p>We work with clients who want to develop a unique digital presence. Whether our clients come to us with a branding history or is beginning to carve out a space for themselves in their industry, we believe that good branding starts with building a relationship to the client and their mission.</p> 
                <p>We work intimately and iteratively with our branding clients to arrive at an emergent brand at the intersection of their project needs, creative expression, and voice.</p>
                <div className="flex">
                    <div className="half table-padding">
                    <h4>Branding Design</h4>
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
                    <div className="half table-padding">
                    <h4>Stationary Design</h4>
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