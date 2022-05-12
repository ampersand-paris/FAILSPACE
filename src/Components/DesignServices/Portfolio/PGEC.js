/* === React Elements === */
import React from "react";

const PGEC = (props) => {
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <>
            <div style={contentStyle} className="portfolio-comp">

                <div className="porfolio-images"> 
                    <img className="portfolio-img"src="/images/Portfolio/PP_1.png" />
                    <img className="portfolio-img" src="/images/Portfolio/PP_2.png" />
                    <img className="portfolio-img" src="/images/Portfolio/PP_3.png" />
                </div>
                <div className="portfolio-desc">
                    <div className="portfolio-tab bg-lemon-gradient">
                    </div>
                    <div className="portfolio-text">
                        <h2>Pioneers Go East Collective</h2>
                        <h4>Social Media Management</h4>
                        <h4>Instagram</h4>

                        <p>The Performance Primers are a collective of artists based in Oakland, Ohlone territory. The Primers grow in direct response to the East Bay community needs, providing accessible performance space, caring community, and production support necessary to thrive. FAILSPACE Design Services, familiar with our own DIY approach, set out to design a website that resembles the home setting of Primer events. We designed each page to be a different room that could be found in the East Bay. We designed a hand drawn font that is a digital rendition of one of the Primer’s handwriting found in years of PP signs and programs. The finished website is a not unlike walking into a grandmother’s home, old hardwood, wallpaper that borders over the top, and a glass jar of our favorite candies.</p>
                    
                        <a href='https://www.instagram.com/performanceprimers'><p>@performanceprimers</p></a>
                        <a href="https://performanceprimers.com"><p>https://performanceprimers.com</p></a>
                    </div>
                </div>
                <div className="portfolio-tab bg-ivy-gradient">
                </div>
            </div>
        </>
    )
}

export default PGEC;