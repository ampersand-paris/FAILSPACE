import { useEffect, useState } from "react";
import useFetch from "../useFetch";

const ServicesMenu = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/projects/:id?populate=*`)
    const [id, setId] = useState(1)


    let project = null;

    if (data) {
        
        project = data.data;
        console.log(project)

        return (
            <div className="services-wrapper">  
                <h1>{project.attributes.Project_Name}</h1>
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
  
export default ServicesMenu