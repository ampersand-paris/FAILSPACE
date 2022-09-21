/* === React Elements === */
import React from "react";
import { useState } from "react";

/* === Images === */
import PP1 from '../../../Portfolio/CPR_1.png'
import PP2 from '../../../Portfolio/CPR_2.png'

const CPR = (props) => {

    const [picList, setPicList] = useState([PP1, PP2])
    const [index, setIndex] = useState(0)

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
                    <h2 className="portfolio-page-title bubblegum">Center for Performance Research</h2> 
                </div>
                <div className="flex al-center column">
                    <div className="portfolio-desc">
                        <p>We have been partners with The Center for Performance Research since 2019, and from our partnership grew an opportunity to rebrand the CPR logo and redesign their website. We took the classic CPR green and repurposed the rich hue with a minimal, modern, and bold new logo. We played with the circles in their filled, solid state to honor their existing community and history as well as circles with a porous perimeter to invoke invitation and change. On the website, we extended this playful deviation with new shades of green and layered images all while prioritizing access to key information, legibility, and clear direction.</p>
                        <p><a href='https://www.instagram.com/cprnyc' target="_blank">@cprnyc</a></p>
                        <p><a href="https://cprnyc.org" target="_blank">https://cprnyc.org</a></p>      
                    </div>
                </div>
            </div>
        </>
    )
}

export default CPR;