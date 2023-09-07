import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"

const ImageWithText = (props) => { 

    let image = props.data.Image.data.attributes.url

    return (
        <div className="image-with-text-wrapper"> 
            <div> 
                <h1>{props.data.Title}</h1>
                <p>{props.data.Body}</p>
            </div>
            <img src={`${ image }`} />
        </div>                
    )
    
}
  
export default ImageWithText;