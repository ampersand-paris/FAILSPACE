import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"

import ImageWithText from "../Components/imageWithText";
import FeatureImage from "../Components/featureImage";
import SocialMediaGallery from "../Components/socialMedia";

const ProjectDetail = () => {
    const { id } = useParams()
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/projects/${id}?populate[projectBody][populate]=*&populate[Header_Image][populate]=*&populate[services][populate]=*`)

    let project = null;
    let sections = [];
    let services = [];
    let display = [];

    if (data) {
        
        project = data.data;
        sections = project.attributes.projectBody
        services = project.attributes.services.data
        
        for (let i = 0; i < sections.length; i ++) {
            if (sections[i].__component === "display.image-with-text") {
                display.push(<ImageWithText data={sections[i]} />)
            } else if (sections[i].__component === "display.full-image") {
                display.push(<FeatureImage data={sections[i]} />)
            } else if (sections[i].__component === "display.social-media-gallery") {
                display.push(<SocialMediaGallery data={sections[i]} />)
            }
        }


        return (
            <div className="project-container">
                <div>  
                    <img className="project-header-image" src={`${project.attributes.Header_Image.data.attributes.url}`}></img>
                    <div className="project-details">
                        <h1>{project.attributes.Project_Name}</h1>
                        <div className="project-types">
                            {services.map((service, index) => 
                                <p>{service.attributes.Service_Type}</p>
                            )}
                        </div>
                    </div>
                </div>
                {display.map((section, index) => 
                    <div key={ index }>
                        { section }
                    </div>
                )}
            </div>                
        )
    } else {

        return (
            <div className="services-container">
                <h1>Error</h1>
            </div>                  
        )
    }
    
}
  
export default ProjectDetail;