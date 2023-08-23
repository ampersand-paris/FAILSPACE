import appHeight from '../appHeight';
/* == DS == */
import About from '../Components/DesignServices/About';
import Contact from "../Components/DesignServices/Contact";
import Portfolio from "../Components/DesignServices/Portfolio";

/* == PORTFOLIO == */
import PerformancePrimers from "../Components/DesignServices/Portfolio/PerformancePrimers";
import CPR from "../Components/DesignServices/Portfolio/CPR"
import EthanPhilbrick from "../Components/DesignServices/Portfolio/EthanPhilbrick"
import ExpInFreedom from "../Components/DesignServices/Portfolio/ExpInFreedom"
import RebeccaFitton from "../Components/DesignServices/Portfolio/RebeccaFitton"
import YCCLA from "../Components/DesignServices/Portfolio/YCCLA"
import VAULT from "../Components/DesignServices/Portfolio/VAULT"

/* == NYCS == */
import Connect from "../Components/NYC/Connect";
import Programs from "../Components/NYC/Programs";
import RSVP from "../Components/NYC/RSVP";
import SteeringCommittee from "../Components/NYC/SteeringCommittee";
import Support from "../Components/NYC/Support";
import Home from "../Components/Home"
import Raffle from "../Components/NYC/Raffle"

import { useState } from 'react';
import { BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";
    
import Services from '../Pages/Services';
import ProjectDetail from '../Pages/ProjectDetail';

function Navigation() {

    const [open, setOpen] = useState(false)
    const [navHeight, setNavHeight] = useState('0px')

    const svgMouseEnter = () => {
        const svg = document.getElementById('menu-icon');
        const topVector = svg.getElementById('top-vector');
        const leftVector = svg.getElementById('left-vector');
        const rightVector = svg.getElementById('right-vector');

        if (open == true) {
            topVector.style.transform = "translate(0, -15px) rotate(90deg)"
            leftVector.style.transform = "translate(-15px,10px) rotate(90deg)"
            rightVector.style.transform = "translate(10px,10px) rotate(90deg)"
        } else {
            topVector.style.transform = "translate(0, -15px) rotate(0deg)"
            leftVector.style.transform = "translate(-15px,10px) rotate(0deg)"
            rightVector.style.transform = "translate(10px,10px) rotate(0deg)"
        }
    }

    const svgMouseLeave = () => {
        const svg = document.getElementById('menu-icon');
        const topVector = svg.getElementById('top-vector');
        const leftVector = svg.getElementById('left-vector');
        const rightVector = svg.getElementById('right-vector');
        topVector.style.transform = "rotate(90deg)"
        leftVector.style.transform = "rotate(90deg)"
        rightVector.style.transform = "rotate(90deg)"

        console.log(topVector)
        if (open == true) {
            topVector.style.transform = "translate(0, 0) rotate(90deg)"
            leftVector.style.transform = "translate(0, 0) rotate(90deg)"
            rightVector.style.transform = "translate(0, 0) rotate(90deg)"
        } else {
            console.log(open)
            topVector.style.transform = "translate(0, 0) rotate(0deg)"
            leftVector.style.transform = "translate(0, 0) rotate(0deg)"
            rightVector.style.transform = "translate(0, 0) rotate(0deg)"
        }
    }

    const svgMouseClick = () => {
        const svg = document.getElementById('menu-icon');
        const topVector = svg.getElementById('top-vector');
        const leftVector = svg.getElementById('left-vector');
        const rightVector = svg.getElementById('right-vector');
        const navMenu = document.getElementsByClassName('nav-container')

        if (open == false) {
            topVector.style.transform = "rotate(90deg)"
            leftVector.style.transform = "rotate(90deg)"
            rightVector.style.transform = "rotate(90deg)"
            setOpen(true)
            setNavHeight('calc(var(--app-height) - 71px)')
        } else {
            topVector.style.transform = "rotate(0deg)"
            leftVector.style.transform = "rotate(0deg)"
            rightVector.style.transform = "rotate(0deg)"
            setOpen(false)
            setNavHeight('0px')
        }
    }


    return (
        <Router>
            <div className="menu-container">
                <div className="menu-header">
                    <div className="menu-toggle">
                    <svg 
                        onMouseEnter={() => svgMouseEnter()} 
                        onMouseLeave={() => svgMouseLeave()} 
                        onClick={()=> svgMouseClick()} id="menu-icon" className="menu-icon" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.14 203.57">
                        <style>
                        
                        </style>
                        <g id="Layer_1-2" data-name="Layer 1" fill="#ffdff2">
                        <path transform="translate(0, 10px)" id="top-vector" className="cls-1" d="m197.59,35.26c-1.18-.95-2.47-1.72-3.85-2.28-.43-.24-.87-.45-1.32-.65L118.84,1.09c-1.7-.73-3.49-1.09-5.29-1.09-.97,0-1.94.1-2.9.32L13.15,21.98c-3.95.88-5.91,1.63-8.38,5.1-.78,1.1-2.58,3.64-3,5l32.29,15.05,50.05,22.21,118.66-26.26c-.84-3.11-2.6-5.75-5.18-7.82Zm-90.71,23.79l-.13-.08-.34.08-1.92-1.06-33.14-18.22,12.67,23.92h-.47L16.05,34.05l19.66-3.75,78.31-14.83,54.67,19.91h0l18.89,6.88-80.71,16.79Z"/>
                        <path id="left-vector" className="cls-1" d="m87.37,66.46L3.34,29.16c-1.13,1.71-1.98,3.67-2.52,5.78C.27,36.5,0,38.15,0,39.85l.59,110.5c.03,5.53,3.19,10.63,8.29,13.37l70.02,37.6c1.08.59,2.22,1.05,3.39,1.38,1.6.55,3.3.85,5,.87v-22.31s.07-100.54.07-100.54v-14.26Zm-5.24,121.41l-66.09-37.6-.46-90.49-.11-20.01,66.36,28.76-37.48,18.23,27.35,15.88,10.74,6.24-.31,78.99Z"/>
                        <path id="right-vector" className="cls-1" d="m203.96,47.62c-.01-2.59-2.21-7.25-2.21-7.25l-118.48,24.49v137.83s.01.01.02.01c1.65.57,3.41.87,5.17.87,1.4,0,2.81-.19,4.19-.57l100.07-27.69c6.76-1.87,11.43-7.98,11.42-14.93l-.18-112.76Zm-115.18,140.47v-.13l-.47.13-.17-107.6,31.53,32.91.73-51.76,67.38-13.99.17,112.75-99.17,27.69Z"/>
                        </g>
                    </svg>
                    <h1 className='menu'>MENU</h1>
                    </div>
                    <a href="/"><h1 className='wordmark'>FAILSPACE</h1></a>
                </div>
                <div className="nav-position">
                    <div className="nav-container" style={{height: navHeight}}> 
                        <div className="menu-list-container">
                        {/* <div>
                            <h1>Funding Model</h1>
                        </div> */}
                        <div>
                            <a href="/steering-committee"><h1>Steering Committee</h1></a>
                        </div>
                        <div>
                            <h1>Events & Programs</h1>
                            <a href="/programs"><h4>Programs</h4></a>
                            <a href="/upcoming"><h4>Upcoming</h4></a>
                            <a href="/support"><h4>Support</h4></a>
                            <a href="/connect"><h4>Connect</h4></a>
                        </div>
                        <div>
                            <h1>Design</h1>
                            <a href="/design-services"><h4>Our Studio</h4></a>
                            {/* <a href="/design-services/projects"><h4>Projects</h4></a> */}
                            <a href="/services"><h4>Services</h4></a>
                            <a href="/project-inquiry"><h4>Project Inquiry</h4></a>
                        </div>
                        {/* <div>
                            <h1>Process</h1>
                        </div> */}
                        {/* <div>
                            <h1>Store</h1>
                        </div> */}
                        </div>
                        <div className="contact-container">
                            <div className="black-bar"></div>
                            <a target="_blank" href="https://newyorklivearts.secure.force.com/donate/?dfId=a0n3q00000XEPkmAAH"><h5>Donate</h5></a>
                            <a target="-blank" href="https://failspacenyc.us20.list-manage.com/subscribe?u=de00eea217caef3b1de6fe2c8&id=efa4424436"><h5>Join our monthly newsletter</h5></a>
                            <div className="social-icons-container">
                                <a target="-blank" href="https://www.instagram.com/failspace_nyc/">
                                    <svg className="social-media-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 467.38 448.96"><defs></defs><g  fill="#ffdff2" id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M131.24,168.24C131.51,74.13,208.93-2,303.66.16,395.33,2.3,469.12,78.79,467.35,172c-1.73,90.85-77.08,166.57-171.63,164.53C205.84,334.59,131.22,261,131.24,168.24Z"/><path class="cls-1" d="M.06,224.23Q.06,113.5,0,2.78C0,.39.65,0,2.87,0Q41.34.14,79.81,0c1.77,0,2.42.29,2.42,2.28q-.09,222.18,0,444.36c0,1.69-.27,2.29-2.17,2.29q-38.82-.1-77.65,0C.24,449,0,448.25,0,446.41Q.1,335.32.06,224.23Z"/></g></g></svg>
                                </a>
                                <a target="-blank" href="https://www.instagram.com/failspace_nyc/">
                                    <svg className="social-media-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506.45 506.45"><defs></defs><g fill="#ffdff2" id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M1.32,343.19V163.26c1.89-.93.9-2.64,1-4,.7-17.44,1.8-34.84,6.1-51.85C19.18,64.68,44,33.53,84.81,15.86c22.3-9.65,46-12.42,70-13.45,3.13-.13,6.5,1,9.45-1.09H341.19c1.32,2,3.33.89,5,.94C363.94,2.9,381.66,4,399,8.38,441.77,19.17,472.92,44,490.59,84.81c9.65,22.3,12.42,46,13.45,70,.13,3.14-1,6.5,1.09,9.45V343.19c-1.89.93-.91,2.64-1,4-.7,17.44-1.81,34.83-6.1,51.84-10.8,42.78-35.62,73.93-76.44,91.6-22.29,9.65-46,12.41-70,13.46-3.47.15-7.16-1.05-10.45,1.08H163.26c-.93-1.89-2.64-.9-4-1-15.77-.67-31.5-1.63-47-5C73.48,490.8,43,470.56,22.86,435.9,10.29,414.22,5.15,390.32,3.24,365.55,2.67,358.1,3.48,350.51,1.32,343.19Zm252.26-296c-21.14,0-42.29-.18-63.43.06-19.79.21-39.62.3-59.27,3.15-18.71,2.71-36.09,8.72-50.69,21.4C59.76,89.5,51.85,113,49.34,138.85c-2.86,29.53-2.13,59.18-2.43,88.79s0,58.94.28,88.41c.21,19.79.31,39.62,3.13,59.27,2.71,18.89,8.76,36.41,21.61,51.12,17.8,20.39,41.29,28.2,67.17,30.69,29.37,2.83,58.85,2.1,88.29,2.41,29.63.31,59.28,0,88.91-.28,19.79-.21,39.63-.31,59.27-3.16,18.88-2.74,36.37-8.85,51.06-21.75,20.19-17.74,28-41.07,30.48-66.76,2.87-29.53,2.18-59.18,2.42-88.79.28-33.46,0-66.93-.49-100.38-.31-19.61-.44-39.31-5-58.57C446.3,87,426.8,64.67,394.24,54.44c-12.78-4-26-5.45-39.32-6.12C321.16,46.64,287.36,47.24,253.58,47.14Z"/><path class="cls-1" d="M382.69,253.26a129.47,129.47,0,1,1-129.43-129.5A129.39,129.39,0,0,1,382.69,253.26ZM253.18,169.43c-45.73,0-83.73,37.59-83.75,82.83,0,46.69,37.16,84.74,82.83,84.76,46.91,0,84.76-37.19,84.76-83.34A83.87,83.87,0,0,0,253.18,169.43Z"/><path class="cls-1" d="M418,118.71a30.4,30.4,0,1,1-30.57-30.26A30.46,30.46,0,0,1,418,118.71Z"/></g></g></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/steering-committee" element={<SteeringCommittee />} />
                <Route path="/design-services" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ProjectDetail />} />
                <Route path="/design-services/projects" element={<Portfolio />} />
                <Route path="/project-inquiry" element={<Contact />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/upcoming" element={<RSVP />} />
                <Route path="/support" element={<Support />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/design-services/portfolio/performance-primers" element={<PerformancePrimers />} />
                <Route path="/design-services/portfolio/experiments-in-freedom" element={<ExpInFreedom />} />
                <Route path="/design-services/portfolio/cpr" element={<CPR />} />
                <Route path="/design-services/portfolio/ethan-philbrick" element={<EthanPhilbrick />} />
                <Route path="/design-services/portfolio/rebecca-fitton" element={<RebeccaFitton />} />
                <Route path="/design-services/portfolio/yccla" element={<YCCLA />} />
                <Route path="/design-services/portfolio/vault" element={<VAULT />} />
                <Route path="/raffle" element={<Raffle />} />
            </Routes>
        </Router>
  );
}

export default Navigation;
