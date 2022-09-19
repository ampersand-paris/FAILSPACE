/* === React Elements === */
import React from "react";
import { Link } from "react-router-dom";

/* === Components === */


const DSNav = (props) => {

    const contentStyle = {
        display: (props.active)
    }

     // Uncommented to work on menu bug fix 
    
    return (
        // <div style={contentStyle} className="absolute full-width bg-light-pink border-bttm-off-black" onMouseLeave={props.function} id="dsnav">
        <div style={contentStyle} className="absolute full-width bg-light-pink border-bttm-off-black" id="dsnav">
            <div className="sub-nav flex mobile-column mobile-center" id="dssubnav">
                <div className="sub-menu-margin">
                    <Link to="/design-services/about"><h2>About</h2></Link> 
                </div>
                <div className="sub-menu-margin">
                    <Link to="/design-services/services"><h2>Services</h2></Link>
                </div>
                <div className="sub-menu-margin">
                    <Link to="/design-services/portfolio"><h2>Portfolio</h2></Link>
                </div>
                <div className="sub-menu-margin">
                    <Link to="/design-services/contact"><h2>Contact</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default DSNav;