/* === React Elements === */
import React from "react";
import { useState } from "react";
import MentorshipTwentyTwenty from "./Programs/2020Mentorship";
import MentorshipTwentyTwentyOne from "./Programs/2021Mentorship";

const Programs = (props) => {
    const [mentorhsip2021, setMentorhsip2021] = useState('flex');    
    const [eventsEx, setEventsEx] = useState('none');
    const [mentorhsip2020, setMentorhsip2020] = useState('none');
    const [filmMotion, setFilmMotion] = useState('none');
    const [printPub, setPrintPub] = useState('none');
    const [socialMedia, setSocialMedia] = useState('none');

    const [ivy, setIvy] = useState('var(--ivy)')
    const [lemon, setLemon] = useState('none')
    const [lavendar, setLavendar] = useState('none')
    const [grapeSoda, setGrapeSoda] = useState('none')
    const [orange, setOrange] = useState('none')
    const [royalBlue, setRoyalBlue] = useState('none')

    const toggleMentorhsip2020 = () => {
        // Components
        setMentorhsip2021('none')
        setEventsEx('none')
        setFilmMotion('none')
        // bgColor
        setIvy('')
        setLavendar('')
        setGrapeSoda('')
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
        setEventsEx('none')
        setFilmMotion('none')
        setPrintPub('none')
        setSocialMedia('none')
        // bgColor
        setLemon('')
        setLavendar('')
        setGrapeSoda('')
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

    const toggleFilmMotion = () => {
        // Components
        setMentorhsip2021('none')
        setEventsEx('none')
        setMentorhsip2020('none')
        setPrintPub('none')
        setSocialMedia('none')
        // bgColor
        setIvy('')
        setLavendar('')
        setLemon('')
        setOrange('')
        setRoyalBlue('')
        if(filmMotion === 'none'){
            setFilmMotion('flex')
            setGrapeSoda('var(--grape-soda')
        } else {
            setFilmMotion('none')    
            setGrapeSoda('')
        }
    }

    const togglePrintPub = () => {
        // Components
        setMentorhsip2021('none')
        setEventsEx('none')
        setFilmMotion('none')
        setMentorhsip2020('none')
        setSocialMedia('none')
        // bgColor
        setIvy('')
        setLavendar('')
        setGrapeSoda('')
        setOrange('')
        setLemon('')
        if(printPub === 'none'){
            setPrintPub('flex')
            setRoyalBlue('var(--royal-blue)')
        } else {
            setPrintPub('none')   
            setRoyalBlue('') 
        }
    }
   
    return (
        <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Programs</h1>
            <div className="services-page">
                <div className="service-list">
                    <div onClick={toggleMentorhsip2021} className="service" id="ivy" style={{backgroundColor: ivy}}>
                        <h2>2021 Mentorship Workshops</h2>
                    </div>
                    <div onClick={toggleMentorhsip2020} className="service scroll" id="lemon" style={{backgroundColor: lemon}}>
                        <h2>2020 Mentorship Workshops</h2>
                    </div>
                    <div onClick={toggleFilmMotion} className="service scroll" id="royal-blue" style={{backgroundColor: royalBlue}}>
                        <h2>Teaching Artist Program</h2>
                    </div>
                    <div onClick={togglePrintPub} className="service scroll" id="orange" style={{backgroundColor: orange}}>
                        <h2>Party</h2>
                    </div>
                </div>
            <div>
                <MentorshipTwentyTwenty active={mentorhsip2020} />
                <MentorshipTwentyTwentyOne active={mentorhsip2021} />
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