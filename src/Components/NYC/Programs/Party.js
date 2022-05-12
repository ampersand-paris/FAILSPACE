/* === React Elements === */
import React from "react";

const Party = (props) => {
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <div style={contentStyle} className="table-description flex column scroll bg-orange">
            <div  className="table-padding">
                <div className="mentorship-letter">
                    <h1 class="party orange-text">PARTY is FAILSPACE's performance platform at the intersection of the DIY, the spontaneous, and the celebratory.</h1>
                </div>
            </div>
            <div className="table-heading orange-text">
                <h3>PARTY II</h3>
            </div>
            <div className="flex column bg-orange table-padding">
                <p className="zero-margin"><b>PARTY Details</b></p>
                <h4>October 19, 2019
                <br></br>The Woods</h4>
                <p className="zero-margin"><b>Performances</b></p>
                <div class="flex col-center space-btwn party-performer">
                    <p>J Bouey</p>
                </div>
                <div class="flex col-center space-btwn party-performer">
                    <p>Marie Lloyd Paspe</p>
                </div>
                <div class="flex col-center space-btwn party-performer">
                    <p>DJ Fesenjoon and Emcee Ntr0v3rt </p>
                    <h4>Dance Doulas </h4>
                </div>
                <div class="flex col-center space-btwn party-performer">
                    <p>Brooke Rucker and Ampersand Paris</p>
                    <h4>Intermission</h4>
                </div>
                <div class="flex col-center space-btwn party-performer">
                    <p>RHETLAW</p>
                    <h4>DJ Set</h4>
                </div>
                
            </div>
            <div className="table-heading orange-text">
                <h3>PARTY I</h3>
            </div>
            <div className="flex column bg-orange table-padding">
                <p className="zero-margin"><b>PARTY Details</b></p>
                <h4>May 18, 2018
                <br></br>The Woods</h4>
                <p className="zero-margin"><b>Performances</b></p>
                <div class="flex col-center space-btwn party-performer">
                    <p>Nora Alami</p>
                    <h4>disparate //  desparate</h4>
                </div>
                <div class="flex col-center space-btwn party-performer">
                    <p>roxy + company</p>
                    <h4>my body is my head</h4>
                </div>
                <div class="flex col-center space-btwn party-performer">
                    <p>Ampersand Paris and Chloe London</p>
                    <h4>Performance Imporvisation</h4>
                </div>
                <div class="flex col-center space-btwn party-performer">
                    <p>Catie Leasca</p>
                    <h4>orangebacktuck</h4>
                </div>
                <div class="flex col-center space-btwn party-performer">
                    <p>Ampersand Paris and Chloe London</p>
                    <h4>Performance Imporvisation</h4>
                </div>
            </div>
        </div>
    )
}

export default Party;