
import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"

const FeatureImage = (props) => {
   
    let image = props.data.Image.data.attributes.url
 

    return (
        <div className="feature-image">  
            <img src={`${ image }`} />
        </div>                
    )
    
}
  
export default FeatureImage;