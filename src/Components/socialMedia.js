
import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"

const SocialMediaGallery = (props) => {
    console.log(props)

    let images = props.data.galleryMedia.data

    return (
        <div className="social-media-wrapper">  
            {images.map((image) => 
                <img src={`${process.env.REACT_APP_BACKEND}${ image.attributes.url }`} />
            )}
        </div>                
    )
    
}
  
export default SocialMediaGallery;