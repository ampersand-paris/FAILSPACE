/* === React Elements === */
import React from "react";
import { useState } from "react";

/* === Images === */
import YCCLA1 from '../../../Portfolio/YCCLA_1.png'
import YCCLA2 from '../../../Portfolio/YCCLA_2.png'
import YCCLA3 from '../../../Portfolio/YCCLA_3.png'

const YCCLA = (props) => {

    const [picList, setPicList] = useState([YCCLA1, YCCLA2, YCCLA3])
    const [index, setIndex] = useState(0)
    const [mobile, setMobile] = useState(false)

    const onClickNext = () => {
        if (index + 1 === picList.length){
            setIndex(
                0
              )
          } else {
              setIndex(
                  index + 1
              )
          }
    }

    const onClickPrevious= () => {
        if (index - 1 === -1 ){
            setIndex( 
              picList.length - 1
            )
        } else {
            setIndex(
                index - 1
            )
        }   
    }

    return (
        <>
            <div className="flex column bg-light-pink">
                <div className="full-width flex center space-btwn bg-off-black">
                    <button className="portfolio-bttn" onClick={onClickPrevious}>&#x3c;</button>
                    <img className="portfolio-img"src={picList[index]} />
                    <button className="portfolio-bttn" onClick={onClickNext}>&#x3e;</button>
                </div>
                <div className="flex mobile-center">
                    <h2 className="portfolio-page-title bubblegum">YCCLA</h2> 
                </div>
                <div className="flex al-center column">
                    <div className="portfolio-desc">
                        <p>FAILSPACE Design Services built the YCCLA hub for recipes. This website uses the power of a full-stack application to deliver dynamic pages that contain recipes with color schemes that respond to recipe-specific data. The animations of the website are akin to opening a drawer, emblematic of the user's AFK experience while following one of the recipes. The digital home is tactile and heartwarming just as the postcards that it serves.</p>
                        <p><a href='https://www.instagram.com/youcancookliterallyanything' target="_blank">@youcancookliterallyanything</a></p>
                        <p><a href="http://www.yccla.com/" target="_blank">https://www.yccla.com</a></p>  
                    </div>    
                </div>
            </div>
        </>
    )
}

export default YCCLA;