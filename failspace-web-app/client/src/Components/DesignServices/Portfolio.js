/* === React Elements === */
import React from "react";
import { useState } from "react";
/* === React Components === */
import PerformancePrimers from "./Portfolio/PerformancePrimers"
const Portfolio = () => {

    return (
        <div className="standard-spacing bg-light-pink">
            <h1 className="page-title light-pink">Portfolio</h1>
            <div className="portfiolio-center">
                <div className="portfolio-index">
                    <div className="portfolio-title ivy" id="performance-primers">
                        <h2>Performance Primers</h2>
                    </div>
                    <div className="portfolio-title" id="lemon">
                        <h2>Experiments in Freedom</h2>
                    </div>
                    <div className="portfolio-title" id="royal-blue">
                        <h2>Eddy Kwon</h2>
                    </div>
                    <div className="portfolio-title" id="orange">
                        <h2>Center for Performance Research</h2>
                    </div>
                    <div className="portfolio-title" id="grape-soda">
                        <h2>Ethan Philbrick</h2>
                    </div>
                    <div className="portfolio-title" id="lavendar">
                        <h2>Mount Tremper Arts</h2>
                    </div>
                    <div className="portfolio-title ivy">
                        <h2>Rebecca Fitton</h2>
                    </div>
                    <div className="portfolio-title" id="lemon">
                        <h2>Pioneers Go East Collective</h2>
                    </div>
                    <div className="portfolio-title" id="royal-blue">
                        <h2>Video Work</h2>
                    </div>
                </div>
            </div>
            <div className="portfolio-show">
                <PerformancePrimers />
            </div>
        </div>
    )
}

export default Portfolio;