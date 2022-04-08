/* === React Elements === */
import React from "react";
import { useState } from "react";
/* === React Components === */
import BrandIdentity from "./Services/BrandIdentity";
import WebDevelopment from "./Services/WebDevelopment";
import SocialMedia from "./Services/SocialMedia";
import PrintPublication from "./Services/PrintPublication";
import FilmMotion from "./Services/FilmMotion";
import EventsExhibition from "./Services/EventsExhibition";

const Services = () => {

    const [webDev, setWebDev] = useState('flex');
    const [brandID, setBrandID] = useState('none');
    const [eventsEx, setEventsEx] = useState('none');
    const [filmMotion, setFilmMotion] = useState('none');
    const [printPub, setPrintPub] = useState('none');
    const [socialMedia, setSocialMedia] = useState('none');

    const [ivy, setIvy] = useState('var(--ivy)')
    const [lemon, setLemon] = useState('none')
    const [lavendar, setLavendar] = useState('none')
    const [grapeSoda, setGrapeSoda] = useState('none')
    const [orange, setOrange] = useState('none')
    const [royalBlue, setRoyalBlue] = useState('none')

    const toggleWebDev = () => {
        // Components
        setBrandID('none')
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
        if(webDev === 'none'){
            setWebDev('flex')
            setIvy('var(--ivy)')
        } else {
            setWebDev('none')   
            setIvy('') 
        }
    }
    const toggleBrandID = () => {
        // Components
        setWebDev('none')
        setEventsEx('none')
        setFilmMotion('none')
        setPrintPub('none')
        setSocialMedia('none')
        // bgColor
        setIvy('')
        setLavendar('')
        setGrapeSoda('')
        setOrange('')
        setRoyalBlue('')
        if(brandID === 'none'){
            setBrandID('flex')
            setLemon('var(--lemon)')
        } else {
            setBrandID('none')    
            setLemon('')
        }
    }

    const toggleFilmMotion = () => {
        // Components
        setBrandID('none')
        setEventsEx('none')
        setWebDev('none')
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
        setBrandID('none')
        setEventsEx('none')
        setFilmMotion('none')
        setWebDev('none')
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

    const toggleSocialMedia = () => {
        // Components
        setBrandID('none')
        setEventsEx('none')
        setFilmMotion('none')
        setPrintPub('none')
        setWebDev('none')
        // bgColor
        setIvy('')
        setLavendar('')
        setGrapeSoda('')
        setLemon('')
        setRoyalBlue('')
        if(socialMedia === 'none'){
            setSocialMedia('flex')
            setOrange('var(--orange)')
        } else {
            setSocialMedia('none')    
            setOrange('')
        }
    }

    const toggleEventsEx = () => {
        // Components
        setBrandID('none')
        setWebDev('none')
        setFilmMotion('none')
        setPrintPub('none')
        setWebDev('none')
        // bgColor
        setIvy('')
        setLemon('')
        setGrapeSoda('')
        setOrange('')
        setRoyalBlue('')
        if(eventsEx === 'none'){
            setEventsEx('flex')
            setLavendar('var(--lavendar)')
        } else {
            setEventsEx('none')   
            setLavendar('') 
        }
    }

    return (
        <div className="standard-spacing  bg-light-pink">
            <h1 className="page-title bubblegum">Services</h1>
            <div className="services-page">
                <div className="service-list">
                    <div onClick={toggleWebDev} className="service" id="ivy" style={{backgroundColor: ivy}}>
                        <h2>Web Development</h2>
                    </div>
                    <div onClick={toggleBrandID} className="service" id="lemon" style={{backgroundColor: lemon}}>
                        <h2>Brand Identity</h2>
                    </div>
                    <div onClick={togglePrintPub} className="service" id="royal-blue" style={{backgroundColor: royalBlue}}>
                        <h2>Print & Publication</h2>
                    </div>
                    <div onClick={toggleSocialMedia} className="service" id="orange"style={{backgroundColor: orange}}>
                        <h2>Social Media Management</h2>
                    </div>
                    <div onClick={toggleFilmMotion} className="service" id="grape-soda" style={{backgroundColor: grapeSoda}}>
                        <h2>Film & Motion Graphics</h2>
                    </div>
                    <div onClick={toggleEventsEx} className="service" id="lavendar" style={{backgroundColor: lavendar}}>
                        <h2>Events & Exhibitions</h2>
                    </div>
                </div>
                <div>
                    <WebDevelopment active={webDev} />
                    <BrandIdentity active={brandID} />
                    <SocialMedia active={socialMedia} />
                    <PrintPublication active={printPub} />
                    <FilmMotion active={filmMotion} />
                    <EventsExhibition active={eventsEx} />
                </div>
            </div>
        </div>
    )
}

export default Services;