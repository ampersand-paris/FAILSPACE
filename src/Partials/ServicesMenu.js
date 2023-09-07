import { useEffect, useState } from "react";
import useFetch from "../useFetch";

const ServicesMenu = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/services?populate[projects][populate]=*`)
    const [id, setId] = useState(1)

    console.log('url', `${process.env.REACT_APP_BACKEND}/api/services?populate[projects][populate]=*`)
    
    let services = null;

    function menuHandle(arg, num) {
        setId(arg)
        let oldEl = document.getElementsByClassName('underline')[0];
        let el = document.getElementById(num);
        console.log('old', oldEl)
        console.log('new', el)
        if (oldEl === undefined) {
            el.classList.add("underline");
        }

        oldEl.classList.remove('underline');
        el.classList.add("underline");

    }

    if (isLoading) {
        return (
            <div className="services-container">
                <h1>Loading...</h1>
            </div>                  
        )
    }

    if (data) {
        
        services = data.data;
        console.log(services)

        return (
            <div className="services-wrapper">  
                <div>
                    <div className="services-menu-container">
                        <div className="services-menu">
                            {services.map((service) => 
                                <h3 id={service.attributes.HTML_iD} onClick={() => menuHandle(service.id, service.attributes.HTML_iD)}>{service.attributes.Service_Type}</h3>
                            )}
                        </div>  
                    </div>
                    <p>{services[id - 1].attributes.Service_Description}</p>
                </div>
                <div className="project-list">
                        {services[id - 1].attributes.projects.data.map((project) => 
                            <a href={`/services/${project.id}`}>
                                <div className="project-preview">
                                    <img src={`${project.attributes.Header_Image.data.attributes.url}`} />
                                    <h3>{project.attributes.Project_Name}</h3>
                                </div>
                            </a>
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