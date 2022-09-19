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
                        <p>FAILSPACE Design Services collaborated with Rebecca Fitton and to produce marketing images and the zine for "re________". In its totality, "re________" is a digital, multi-room live performance at the intersection of place and Asian American identity. The zine holds the stories from Asian American collaborators and was mailed to audience members leading up to the performance so that it could be held and digested during the live event. The red and the gold offer a reverent framing of the stories they attempt to both weave together and make room for their differences.</p>
                        <p><a href='https://www.instagram.com/_rebecca.fitton'>@youcancookliterallyanything</a></p>
                        <p><a href="https://yccla.com">https://yccla.com</a></p>  
                    </div>    
                </div>
            </div>
        </>
    )
}

export default YCCLA;