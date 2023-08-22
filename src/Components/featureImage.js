import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"

const ImageWithText = (props) => {
   
    console.log(props)
 

    return (
        <div className="services-wrapper">  
            <h1>{props.data.Title}</h1>
            <p>{props.data.Body}</p>
        </div>                
    )
    
}
  
export default ImageWithText;