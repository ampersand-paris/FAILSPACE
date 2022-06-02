/* === React Elements === */
import React from "react";

const SocialMedia = (props) => {

    const contentStyle = {
        display: (props.active)
    }  
    
    return (
        <div style={contentStyle} className="table-description flex column bg-orange full-height">
            <div className="flex column table-padding">
                <div className="branding-intro orange-text">
                    <h1 className="branding orange-text">We translate your brand's <em className="big-text">mission</em>, <em className="big-text">story</em>, and <em className="big-text">values</em> into <em className="big-text">graphic content</em>.</h1>
                </div>
            </div>
            <div className="table-heading orange-text">
                    <h3>Campaigns</h3>
            </div>
            <div className="flex table-padding">
                <div>
                    <p>FAILSPACE Design Services helps our clients build brand awareness by first understanding the brand. We take the time to get to know and help clarify the brand's mission, story, and values so that when it comes time to creating graphic content, we can confidently layer meaning. We understand that in order to break through digital whitenoise, brands must authentically communicate to their audiences and educate them how to recognize what the brand has to offer. The success of our campaigns is measured by how effectively we communicate why your brand is meaningful to your audience.</p>
                    <p>We use Google and Instagram Analytics to measure and respond to your audience in order to deliver results in realtime.</p>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;