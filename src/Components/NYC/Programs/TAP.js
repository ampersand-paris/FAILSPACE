/* === React Elements === */
import React from "react";

const TAP = (props) => {
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <div style={contentStyle} className="table-description flex column bg-royal-blue">
            <div  className="table-padding">
                <div className="mentorship-letter">
                    <p class="royal-blue-text">FAILSPACE's Teaching Artis Program is the FAILSPACE's founding program. This program was founded with the intention to meaningfully support teaching artists with ample time, space, and administrative support. Our Teaching Artist Program provides space for these teachers to experiment with their peers and receive constructive feedback through peer-to-peer mentorship.</p>
                    <p class="royal-blue-text">This program is for teachers who have never taught. 
                    <br></br>This program is for teachers expanding their teaching practice. 
                    <br></br>This program is for teachers experimenting with process.
                    <br></br>This program is for teachers new to or passing through New York City.</p>
                    <p class="royal-blue-text">If you are intersted in teaching through our Teaching Artist Program, please reach out to us via our contact page.</p>
                </div>
            </div>
            <div className="table-heading royal-blue-text">
                <h3>Past Teachers</h3>
            </div>
            <div className="flex column bg-royal-blue table-padding">        
                <div class="flex start space-btwn teaching-artist">
                    <div>    
                        <p>Estrellx Supernova</p>
                    </div>
                    <h4 class="half">New Moon Realness: Tools for Quebrantamiento en los Ulitmos Tiempos, Virtual</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>    
                        <p>Christopher Unpezverde Nunez</p>
                    </div>
                    <h4 class="half">Audio description, speech to text, prioritizing accessibility, Virtual</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>
                        <p>Raha Benham</p>
                    </div>
                    <h4 class="half">Sensory imagery, investigate improvisation, recharge and recoup</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>
                        <p>Marie Lloyd Paspe</p>
                    </div>
                    <h4 class="half">splitting the /gap</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>
                        <p>Sarah Chien</p>
                    </div>
                    <h4 class="half">Passing Through</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>
                        <p>Catie Leasca</p>
                    </div>
                    <h4 class="half">State change, imporvisation, everything belongs and nothing does not</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>
                        <p>Francisco Cordova</p>
                    </div>
                    <h4 class="half">BODY ACTION</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>
                        <p>Jose Corral</p>
                    </div>
                    <h4 class="half">Body Geometry & Flow</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                   <div>
                        <p>Rui Dun</p>
                    </div>
                    <h4 class="half">Devise, move through, enact change</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>
                        <p>Estado Flotante</p>
                    </div>
                    <h4 class="half">Shaping perception, encountering group and individual rhythms, object composition</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>
                        <p>Lisa Fagan</p>
                    </div>
                    <h4 class="half">Improvisation, score making, flash composition, and lightning-speed editing</h4>
                </div>
                <div class="flex start space-btwn teaching-artist">
                    <div>
                        <p>Nora Alami</p>
                    </div>
                    <h4 class="half">Altar making, ritual, tarot</h4>
                </div>
            </div>
        </div>
    )
}

export default TAP;