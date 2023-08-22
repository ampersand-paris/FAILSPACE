import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"

import ImageWithText from "../Components/featureImage";

const ProjectDetail = () => {
    const { id } = useParams()
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/projects/${id}?populate=*`)

    let project = null;
    let sections = [];
    let display = [];

    if (data) {
        
        project = data.data;
        sections = project.attributes.projectBody
        
        for (let i = 0; i < sections.length; i ++) {
            if (sections[i].__component === "display.image-with-text") {
                console.log(sections[i])
                display.push(<ImageWithText data={sections[i]} />)
                console.log(display)
            }
        }

        return (
            <div className="services-wrapper">  
                

                <h1>{project.attributes.Project_Name}</h1>
                {display.map((section) => 
                    <div>
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