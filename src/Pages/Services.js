import { useEffect, useState } from "react";
import useFetch from "../useFetch";

import ServicesMenu from "../Partials/ServicesMenu";

const Services = (props) => {

    return (
        <div className="services-container">
            <h1>Services</h1>
            <ServicesMenu />
            <div className="services-footer">
                <h3>Project Inquiry</h3>
            </div>
        </div>                  
    )
}
  
export default Services