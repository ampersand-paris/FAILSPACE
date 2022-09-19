/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"

/* === React Components === */

const Portfolio = () => {

    return (
        <div className="full-height standard-spacing bg-light-pink">
            <h1 className="page-title bubblegum">Portfolio</h1>
            <div className="extra-margin">
                <div className="portfiolio-center">
                    <div className="flex jc-space-btwn mobile-column side-padding-2vW bg-off-black light-pink">
                        <h3 className="third no-space">Client</h3>
                        <h3 className="third no-space">Services</h3>
                        <h3 className="third no-space">Technologies</h3>
                    </div>
                    <Link 
                            to="/design-services/portfolio/performance-primers"
                            className="no-hyperlink-style"  >
                        <div className="cursor flex mobile-column jc-baseline side-padding-2vW top-padding-2vH border-bttm-off-black">
                            <h4 className="third no-space bigger-h4">Performance Primers</h4>
                            <h4 className="third no-space">Web Development, Brand Identity</h4>
                            <h4 className="third no-space">Cargo, HTML & CSS</h4>
                        </div>
                    </Link> 
                    <Link 
                            to="/design-services/portfolio/experiments-in-freedom"
                            className="no-hyperlink-style"  >
                        <div className="cursor flex mobile-column jc-baseline side-padding-2vW top-padding-2vH border-bttm-off-black">
                            <h4 className="third no-space bigger-h4">Experiments in Freedom</h4>
                            <h4 className="third no-space">Web Development, Brand Identity</h4>
                            <h4 className="third no-space">Cargo, HTML, CSS & JavaScript</h4>
                        </div>
                    </Link> 
                    <Link 
                            to="/design-services/portfolio/cpr"
                            className="no-hyperlink-style"  >
                        <div className="cursor flex mobile-column jc-baseline side-padding-2vW top-padding-2vH border-bttm-off-black">
                            <h4 className="third no-space bigger-h4">Center for Performance Research</h4>
                            <h4 className="third no-space">Web Development, Brand Identity</h4>
                            <h4 className="third no-space">Squarespace, HTML & CSS</h4>
                        </div>
                    </Link> 
                    <Link 
                            to="/design-services/portfolio/ethan-philbrick"
                            className="no-hyperlink-style"  >
                        <div className="cursor flex mobile-column jc-baseline side-padding-2vW top-padding-2vH border-bttm-off-black">
                            <h4 className="third no-space bigger-h4">Ethan Philbrick</h4>
                            <h4 className="third no-space">Web Development, Brand Identity</h4>
                            <h4 className="third no-space">Cargo CMS, HTML & CSS</h4>
                        </div>
                    </Link> 
                    <Link 
                            to="/design-services/portfolio/rebecca-fitton"
                            className="no-hyperlink-style"  >
                        <div className="cursor flex mobile-column jc-baseline side-padding-2vW top-padding-2vH border-bttm-off-black">
                            <h4 className="third no-space bigger-h4">Rebecca Fitton</h4>
                            <h4 className="third no-space">Print Publication</h4>
                            <h4 className="third no-space"></h4>
                        </div>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default Portfolio;