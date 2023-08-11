import { useEffect, useState } from "react";
import useFetch from "../useFetch";

const ServicesMenu = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/services?populate=*`)
    const [id, setId] = useState(1)

    let services = null;

    function menuHandle(arg) {
        setId(arg)
        console.log(id)
    }

    if (data) {
        
        services = data.data;
        console.log(services[id - 1].attributes.projects.data)

        return (
            <div className="services-wrapper">  
                <div>
                    <div className="services-menu-container">
                        <div className="services-menu">
                            {services.map((service) => 
                                <h3 onClick={() => menuHandle(service.id)}>{service.attributes.Service_Type}</h3>
                            )}
                        </div>  
                    </div>
                    <p>{services[id - 1].attributes.Service_Description}</p>
                </div>
                <div className="project-list">
                        {services[id - 1].attributes.projects.data.map((service) => 
                            <h3>{service.attributes.Project_Name}</h3>
                        )}
                </div>  
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