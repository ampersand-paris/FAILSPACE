/* === React Elements === */
import React from "react";
import { useState } from "react";

const About = () => {

   
    return (
        <>
            <div className="standard-spacing bg-light-pink">
                <h1 className="page-title bubblegum">About</h1>
                <h2 className="intro">FAILSPACE Design Services is committed to equitable design that serves the aesthetic and branding needs of their clients while investing in a cooperative and artist driven future.</h2>
            </div>
            <div class="section-heading">
                <h3>Design Partners</h3>
            </div>
            <div className="standard-spacing bg-light-pink">
                <div class="flex space-btwn">
                    <div class="flex column SC-container">
                        <div class="flex SC-member">
                            <div class="flex bio column">
                            <h3>Angel Acuña</h3>
                                <p>Dance artist and graphic designer from San Diego residing in Philadelphia. Angel is committed to actively engage in responsible collaborative environments, not just with the objective of accumulating community, but to purposefully (in togetherness) co-evolve horizontally and detoxify from depersonalized power structures.  They aspire to be surrounded by relative and diverse perspectives, carrying a potential manifestation of adjacent fluid practices co-creating towards collective experiences and empowerment for future generations. Identity welcoming itself through action, relation, experience and therefore love. “I dance with the person I am. I live with the wisdom dance lends.” Angel is fascinated by the expansive and transformational world of digital media and its possible ability to manifest anywhere. Whether it’s film work, photography or any digital media, the material interests are sourced in performance and dance, highlighting the magnetism of movement. They currently are the marketing director and one of the designers of NYC’s dance collective FAILSPACE NYC. Angel is one of four founding members of group project a film collective in Philadelphia. Recently Angel joined CHILD, a company of artists making shows using an experimental framework directed by Lisa Fagan.</p>
                            </div>
                            <div class="portrait">
                                <img class="SC-portrait" src="/images/Portraits/angel 2.png"/>
                            </div>
                        </div>
                        <div class="flex SC-member">
                            <div class="flex bio column">
                                <h3>Ampersand Paris</h3>
                                <p>Ampersand Paris is an interdisciplinary performing artist and fermentation revivalist. They are the founder of FAILSPACE and design partner at FAILSPACE Design Services. Their current practice is a fermentation CSA that sustainably feeds community while cultivating a trans-microbiopolitic for making and being. Their “Field Guide to Lactofermentation” will be published in the Spring 2022 Movement Research Performance Journal. Their performance work has been shown at the School for Contemporary Dance & Thought (SCD&T), the Northampton Center for the Arts, multiple ACDA Regional Conferences, CAMP_iN Dance Festival, the Midwest RADfest, and the Turner-Fischer Center for Opera. They have taught nationally and internationally at Macalester College, SCD&T, DansArt Academy, and MAS & Co. Studio. They hold a B.A. in dance from Middlebury College where they were the recipient of the 2017 Mahlingaiah Family Dance Prize. <a href="www.ampersand.paris">www.ampersand.paris</a></p>
                            </div>
                            <div class="portrait">
                                <img class="SC-portrait" src="/images/Portraits/ampy 2.png"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex column side-column SC-info">
                        <h3>What we do:</h3>
                        <p>Designing with FAILSPACE is a collaborative relationship between designer and client. The FAILSPACE Design Services process unfolds over a series of conversations in which our designers identify an aesthetic voice, develop its expression, and refine its function. Throughout the process, we continually uplift design that calls in and returns to the client's mission and highest values.</p>
                        <p>For our full list of services, please visit our <a href="/design-services/services">services</a> page.</p>
                        <h3>Rates:</h3>
                            <p>Rates are determined on a per project basis and based on the project's technical needs and timeframe. </p>
                            <p>Please contact us with your inquiry via our <a href="/contact">contact</a> page. In service of making our work more financially accessible, we have subsized rates and payment plans available for artists and arts-based non-profits.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;