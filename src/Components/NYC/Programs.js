/* === React Elements === */
import React from "react";
import { useState } from "react";
import MentorshipTwentyTwenty from "./Programs/2020Mentorship";
import MentorshipTwentyTwentyOne from "./Programs/2021Mentorship";
import TAP from "./Programs/TAP"
import Party from "./Programs/Party";

const Programs = (props) => {
    const [mentorhsip2021, setMentorhsip2021] = useState('flex');    
    const [mentorhsip2020, setMentorhsip2020] = useState('none');
    const [tap, setTap] = useState('none');
    const [party, setParty] = useState('none');

    const [ivy, setIvy] = useState('var(--ivy)')
    const [lemon, setLemon] = useState('none')
    const [orange, setOrange] = useState('none')
    const [royalBlue, setRoyalBlue] = useState('none')

    const toggleMentorhsip2020 = () => {
        // Components
        setMentorhsip2021('none')
        setTap('none')
        setParty('none')
        // bgColor
        setIvy('')
        setRoyalBlue('')
        setOrange('')
        if(mentorhsip2020 === 'none'){
            setMentorhsip2020('flex')
            setLemon('var(--lemon)')
        } else {
            setMentorhsip2020('none')   
            setLemon('') 
        }
    }
    const toggleMentorhsip2021 = () => {
        // Components
        setMentorhsip2020('none')
        setTap('none')
        setParty('none')
        // bgColor
        setLemon('')
        setOrange('')
        setRoyalBlue('')
        if(mentorhsip2021 === 'none'){
            setMentorhsip2021('flex')
            setIvy('var(--ivy)')
        } else {
            setMentorhsip2021('none')    
            setIvy('')
        }
    }

    const toggleTAP = () => {
        // Components
        setMentorhsip2021('none')
        setMentorhsip2020('none')
        setParty('none')
        // bgColor
        setIvy('')
        setLemon('')
        setOrange('')
        if(tap === 'none'){
            setTap('flex')
            setRoyalBlue('var(--royal-blue')
        } else {
            setTap('none')    
            setRoyalBlue('')
        }
    }

    const toggleParty = () => {
        // Components
        setMentorhsip2021('none')
        setTap('none')
        setMentorhsip2020('none')
        // bgColor
        setIvy('')
        setRoyalBlue('')
        setLemon('')
        if(party === 'none'){
            setParty('flex')
            setOrange('var(--orange)')
        } else {
            setParty('none')
            setOrange('') 
        }
    }
   
    return (
        <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Programs</h1>
            <div className="services-page mobile-column">
                <div className="service-list">
                    <div onClick={toggleMentorhsip2021} className="service" id="ivy" style={{backgroundColor: ivy}}>
                        <h2>2021 Mentorship Workshops</h2>
                    </div>
                    <div onClick={toggleMentorhsip2020} className="service" id="lemon" style={{backgroundColor: lemon}}>
                        <h2>2020 Mentorship Workshops</h2>
                    </div>
                    <div onClick={toggleTAP} className="service royal-blue" style={{backgroundColor: royalBlue}}>
                        <h2>Teaching Artist Program</h2>
                    </div>
                    <div onClick={toggleParty} className="service orange" style={{backgroundColor: orange}}>
                        <h2>Party</h2>
                    </div>
                </div>
            <div class="scroll">
                <MentorshipTwentyTwenty active={mentorhsip2020} />
                <MentorshipTwentyTwentyOne active={mentorhsip2021} />
                <TAP active={tap} />
                <Party active={party} />

                {/* <WebDevelopment active={webDev} />
                <BrandIdentity active={brandID} />
                <SocialMedia active={socialMedia} />
                <PrintPublication active={printPub} />
                <FilmMotion active={filmMotion} />
                <EventsExhibition active={eventsEx} /> */}
            </div>
        </div>
    </div>
    )
}

export default Programs;