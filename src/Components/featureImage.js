
import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"

const FeatureImage = (props) => {
   
    let image = props.data.Image.data.attributes.url
 

    return (
        <div className="feature-image">  
            <img src={`${process.env.REACT_APP_BACKEND}${ image }`} />
        </div>                
    )
    
}
  
export default FeatureImage;