/* === React Elements === */
import React from "react";
import { useState } from "react";

const SteeringCommittee = () => {

   
    return (
        <>
            <div className="standard-spacing bg-light-pink">
                <h1 className="page-title bubblegum">Steering Committee</h1>
                <h2 className="intro">We are four artists working cooperatively to support multiple platforms for artists to grow their teaching and performance practices.</h2>
            </div>
            <div class="section-heading">
                <h3>Current Members</h3>
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
                        <div class="flex space-btwn SC-member">
                            <div class="flex bio column">
                                <h3>Nora Alami</h3>
                                <p>Nora Alami deconstructs and integrates historically disparate dance forms. Navigating the overlap between her Moroccan and American heritage, her work builds performative contexts that investigate the embodied experience of colonization and identity politics. In flux between fluidity, tension, awkwardness, and discomfort, Nora presents evocations that are dramaturgical, conceptual, and in ritual. Her tools: radical acts of permission-giving, intentional displacement of cultural vantage points, and multidisciplinarity braiding.</p>

                                <p>Her choreography has been presented at the Center for Performance Research, New York Live Arts, International Center of Photography, pOnderosa, Colorado College, and Movement Research at Judson Church. She has performed at the Edinburgh Fringe Festival, River to River Festival, and toured internationally at the 2018 Focus on Mediterranean Choreography platform in Castiglioncello and Spoleto, Italy.</p>

                                <p>She has been awarded the Alliance for Artist Communities’ Diversity + Leadership Fellowship, New York Live Arts Fresh Tracks Choreographic Residency, and Miguel Gutierrez’s Landing 2.0. Currently, Nora collaborates as a creative producer for Jasmine Hearn Collaborates, a dramaturg for Medusa: A New Musical, on the Steering Committee for FAILSPACE, and as a creative consultant supporting the arts. Recently, Nora was a 2021 JACK Resident Artist, a 2021 BRIClab: Performing Arts Resident Artist, and a recipient of the 2021 Rest and Restore Residency at The Petronio Center. She is the 2022 Resident Artist at Triskelion Arts where she is building The Eros Project. She is building out 3rd Body with collaborator Jadd Tank which was recently in residency at the Houston Metropolitan Dance Center. @noralami</p>
                            </div>
                            <div class="portrait">
                                <img class="SC-portrait" src="/images/Portraits/nora.jpg"/>
                            </div>
                        </div>
                        <div class="flex SC-member">
                            <div class="flex bio column">
                                <h3>Lena Engelstein</h3>
                                <p>Dance artist and graphic designer from San Diego residing in Philadelphia. Angel is committed to actively engage in responsible collaborative environments, not just with the objective of accumulating community, but to purposefully (in togetherness) co-evolve horizontally and detoxify from depersonalized power structures.  They aspire to be surrounded by relative and diverse perspectives, carrying a potential manifestation of adjacent fluid practices co-creating towards collective experiences and empowerment for future generations. Identity welcoming itself through action, relation, experience and therefore love. “I dance with the person I am. I live with the wisdom dance lends.” Angel is fascinated by the expansive and transformational world of digital media and its possible ability to manifest anywhere. Whether it’s film work, photography or any digital media, the material interests are sourced in performance and dance, highlighting the magnetism of movement. They currently are the marketing director and one of the designers of NYC’s dance collective FAILSPACE NYC. Angel is one of four founding members of group project a film collective in Philadelphia. Recently Angel joined CHILD, a company of artists making shows using an experimental framework directed by Lisa Fagan.</p>
                            </div>
                            <img class="portrait" src="/images/Portraits/lena.jpg"/>
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
                        <p>in our meetings we seek to uphold our mission: to support multiple platforms for artists to grow their teaching and performance practices. we generate and practice cooperative leadership strategies, cultivate community, and build solidarity with our people. our people are artists interested in using the framework of failure to disrupt and undo systems of oppression in our local performing arts community. we move at the speed of trust to make iterative and fractural change.</p>
                        <h3>How we do:</h3>
                       <ul>
                            <li>Listen from the inside out. Listen from the bottom up. Trust your gut.</li>                    
                            <li>W.A.I.T - Why Am I Talking?</li>
                            <li>Make Space. Make Space. (For you listening / for your speaking)</li>
                            <li>Self care and community care--pay attention to what your body needs</li>
                            <li>Building, not selling--when you speak, converse, don't pitch</li>
                            <li>Value the process as much as, if not more than, you value the outcomes</li>                    
                            <li>Be freaky with yourself, be freaky with your ideas</li>                    
                            <li>Be free with yourself, be free with your ideas</li>
                        </ul>
                        <h3>Current compensation:</h3>
                            <p>$30 / hour</p>
                    </div>
                </div>
            </div>
            <div class="section-heading">
                <h3>Past Members</h3>
            </div>
            <div className="standard-spacing  bg-light-pink">
                <div class="flex column SC-container">
                    <div class="flex SC-member">
                        <div class="flex bio column">
                            <h3>Pablo Muñoz</h3>
                            <p>I work to problematize dancing bodies as a social practice, in order to generate seductive flows of thought in motion.</p>   
                            <p>I started studying modern and contemporary dance in 2003 in Uruguay, and then in Brazil, Argentina, France and the United States. As a dance creator, I have designed and managed several dance pieces mainly in collaboration with artists from the Uruguayan dance community and beyond, such as Iris Mouret, Ximena Castillo, Annick Maucouvert, Marcelo Marascio, Claudia Pisani, Catalina Chouhy Marcos Ramírez, Sofía Lans, Juan Ibarlucea, Mariana Porciúncula, Federico Lucas, Pedro Plavan, Guillermo Tarasewicz, Manuela Casanova, Francis Torena, Julian Phillips, Stuart Shugg and Linda Sastradipradja. I was granted the Justino Zavala Muniz fellowship for dance creation (2014-15) from the Ministry of Culture of Uruguay, which allowed me to travel to Europe and New York. In the US I participated in Landing 2.0 coordinated by Miguel Gutierrez and in a performance organized by luciana achugar and Maríangela Lopez in Region_es festival. In April 2019 I was part of E|MERGE Interdisciplinary Collaborative Residency at Earthdance.</p>
                            <p>I am a visual communication designer graduated from Facultad de Arquitectura, Diseño y Urbanismo, Udelar, Uruguay, where I am an assistant teacher and researcher. In May 2019 I graduated from the MA in Liberal Studies at the CUNY Graduate Center with a thesis entitled: “Dance of Exile. The Sakharoffs’ Visual Performances in Montevideo (1935-1948)”, advised by Edward D. Miller. Currently I continue working on this project in Argentina, studying Tango at Escuela Nacional de Formación Artística (SODRE) and in Licenciatura en Danza Contemporánea (Facultad de Artes, Udelar).</p>
                        </div>
                        <div class="portrait">
                            <img class="SC-portrait" src="/images/Portraits/pablo.jpg"/>
                        </div>
                    </div>
                    <div class="flex SC-member">
                        <div class="flex bio column">
                            <h3>Rebecca Fitton</h3>
                            <p>Bio TBD</p>
                        </div>
                    </div>
                    <img class="portrait" src="/images/Portraits/pablo.jpg"/>
                </div>
            </div>
        </>
    )
}

export default SteeringCommittee;