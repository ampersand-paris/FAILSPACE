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

    const toggleWebDev = () => {
        setBrandID('none')
        setEventsEx('none')
        setFilmMotion('none')
        setPrintPub('none')
        setSocialMedia('none')
        if(webDev === 'none'){
            setWebDev('flex')
        } else {
            setWebDev('none')    
        }
    }
    const toggleBrandID = () => {
        setWebDev('none')
        setEventsEx('none')
        setFilmMotion('none')
        setPrintPub('none')
        setSocialMedia('none')
        if(brandID === 'none'){
            setBrandID('flex')
        } else {
            setBrandID('none')    
        }
    }

    const toggleFilmMotion = () => {
        setBrandID('none')
        setEventsEx('none')
        setWebDev('none')
        setPrintPub('none')
        setSocialMedia('none')
        if(filmMotion === 'none'){
            setFilmMotion('flex')
        } else {
            setFilmMotion('none')    
        }
    }

    const togglePrintPub = () => {
        setBrandID('none')
        setEventsEx('none')
        setFilmMotion('none')
        setWebDev('none')
        setSocialMedia('none')
        if(printPub === 'none'){
            setPrintPub('flex')
        } else {
            setPrintPub('none')    
        }
    }

    const toggleSocialMedia = () => {
        setBrandID('none')
        setEventsEx('none')
        setFilmMotion('none')
        setPrintPub('none')
        setWebDev('none')
        if(socialMedia === 'none'){
            setSocialMedia('flex')
        } else {
            setSocialMedia('none')    
        }
    }

    const toggleEventsEx = () => {
        setBrandID('none')
        setWebDev('none')
        setFilmMotion('none')
        setPrintPub('none')
        setWebDev('none')
        if(eventsEx === 'none'){
            setEventsEx('flex')
        } else {
            setEventsEx('none')    
        }
    }

    return (
        <div className="standard-spacing">
            <h1 className="page-title bubblegum">Services</h1>
            <div className="services-page">
                <div className="service-list">
                    <div className="service" id="web-development">
                        <h2 onClick={toggleWebDev}>Web Development</h2>
                    </div>
                    <div className="service" id="brand-identity">
                        <h2 onClick={toggleBrandID}>Brand Identity</h2>
                    </div>
                    <div className="service" id="print-publication">
                        <h2 onClick={togglePrintPub}>Print & Publication</h2>
                    </div>
                    <div className="service" id="social-media">
                        <h2 onClick={toggleSocialMedia}>Social Media Management</h2>
                    </div>
                    <div className="service" id="film-motion">
                        <h2 onClick={toggleFilmMotion}>Film & Motion Graphics</h2>
                    </div>
                    <div className="service" id="events-exhibition">
                        <h2 onClick={toggleEventsEx}>Events & Exhibitions</h2>
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