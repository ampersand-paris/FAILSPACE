import { useEffect, useState } from "react";
import useFetch from "../useFetch";

import ServicesMenu from "../Partials/ServicesMenu";

const Services = (props) => {

    return (
        <div className="services-container">
            <h1>Services</h1>
            <ServicesMenu />
            <div className="services-footer">
                <a href="/design-services/contact"><h3>Project Inquiry</h3></a>
            </div>
        </div>                  
    )
}
  
export default Services