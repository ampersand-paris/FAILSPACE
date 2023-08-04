/* === React Elements === */
import React from "react";
import { useState, useEffect } from "react";

/* === Images === */
import PP1 from '../../../Portfolio/PP_1.png'
import PP2 from '../../../Portfolio/PP_2.png'
import PP3 from '../../../Portfolio/PP_3.png'


const PerformancePrimers = (props) => {
    
    const [picList, setPicList] = useState([PP1, PP2, PP3])
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

    const contentStyle = {
        display: (props.active)
    } 
  
    return (
        <>
            <div style={contentStyle} className="flex column bg-light-pink">
                <div className="full-width flex center space-around bg-off-black">
                    <button className="portfolio-bttn" onClick={onClickPrevious}>&#x3c;</button>
                    <img className="portfolio-img"src={picList[index]} />
                    <button className="portfolio-bttn" onClick={onClickNext}>&#x3e;</button>
                </div>
                <div className="flex mobile-center">
                    <h2 className="portfolio-page-title bubblegum">Performance Primers</h2> 
                </div>
                <div className="flex al-center column">
                    <div className="portfolio-desc">
                        <p>The Performance Primers are a collective of artists based in Oakland, Ohlone territory. The Primers grow in direct response to the East Bay community needs, providing accessible performance space, caring community, and production support necessary to thrive. FAILSPACE Design Services, familiar with our own DIY approach, set out to design a website that resembles the home setting of Primer events. We designed each page to be a different room that could be found in the East Bay. We designed a hand drawn font that is a digital rendition of one of the Primer’s handwriting found in years of PP signs and programs. The finished website is not unlike walking into a grandmother’s home, old hardwood, wallpaper that borders over the top, and a glass jar of our favorite candies.</p>
                        <p><a href='https://www.instagram.com/performanceprimers' target="_blank">@performanceprimers</a></p>
                        <p><a href="https://performanceprimers.com" target="_blank">https://performanceprimers.com</a></p>      
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default PerformancePrimers;