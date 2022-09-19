/* === React Elements === */
import React from "react";
import { useState } from "react";

import EXP1 from '../../../Portfolio/EXP_1.png'
import EXP2 from '../../../Portfolio/EXP_2.png'
import EXP3 from '../../../Portfolio/EXP_3.png'
import EXP4 from '../../../Portfolio/EXP_4.png'

const ExpInFreedom = (props) => {
    
    const [picList, setPicList] = useState([EXP1, EXP2, EXP3, EXP4])
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

    const contentStyle = {
        display: (props.active)
    } 

    return (
        <>
            <div style={contentStyle} className="flex column bg-light-pink">
                <div className="full-width flex center space-btwn bg-off-black">
                    <button className="portfolio-bttn" onClick={onClickPrevious}>&#x3c;</button>
                    <img className="portfolio-img"src={picList[index]} />
                    <button className="portfolio-bttn" onClick={onClickNext}>&#x3e;</button>
                </div>
                <div className="flex mobile-center">
                    <h2 className="portfolio-page-title bubblegum">Experiments in Freedom</h2> 
                </div>
                <div className="flex al-center column">
                    <div className="portfolio-desc">
                        <p>Experiments in Freedom is a business by Syon Davis and Sesalli Castillo that creates space for healing through art, self exploration, and connection with earth. Their highly textured and nuanced work inspired a color-responsive and texture-driven aesthetic that (we hope) encourages an open smile to those who visit. The color palette is one of a saturated nature dense with ivies, dew, and flower petals, and these choices are reflective of their bold expertise in facilitation and presence as creative entrepreneurs. We are grateful to have learned from our clients, and we hope that you check out their services that include plant medicine, group facilitation, coaching, art classes, and strategic partnership.</p>
                        <p><a href='https://www.instagram.com/experimentsinfreedom'>@experimentsinfreedom</a></p>
                        <p><a href="https://experimentsinfreedom.com">https://experimentsinfreedom.com</a></p>      
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpInFreedom;