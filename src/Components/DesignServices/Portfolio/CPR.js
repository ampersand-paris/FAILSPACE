/* === React Elements === */
import React from "react";
import { useState } from "react";
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
    
    const contentStyle = {
        display: (props.active)
    } 

    return (
        <>
            <div style={contentStyle} className="flex column col-center">
            <div className="porfolio-images center column flex space-btwn" id="images"> 
                    {picList.map((pic)=>{
                        return (
                            <img className="portfolio-img margin-top"src={pic} />
                        )
                    })}
                </div>
                <div className="porfolio-images center flex space-btwn" id="gallery"> 
                    <button className="portfolio-bttn" id="mirror" onClick={onClickPrevious}>&#x27BD;</button>
                    <img className="portfolio-img"src={picList[index]} />
                    <button className="portfolio-bttn" onClick={onClickNext}>&#x27BD;</button>
                </div>
                <div className="portfolio-desc flex col-center column orange-text">
                    <div className="CPR-logos">
                        <img className="portfolio-logo"src="/images/Portfolio/CPR CIRCLE ICON-green.png" />
                        <img className="portfolio-logo"src="/images/Portfolio/CIRCLE CPR-green.png" />
                        <img className="portfolio-logo"src="/images/Portfolio/CPR TOKEN-green.png" />
                        <img className="portfolio-logo"src="/images/Portfolio/CPR CIRCLE LOGO-green.png" />
                        <img className="portfolio-logo-lg"src="/images/Portfolio/CPR LOGO-green.png" />
                    </div>
                    <div className="flex column">
                        <p>We have been partners with The Center for Performance Research since 2019, and from our partnership grew an opportunity to rebrand the CPR logo and redesign their website. We took the classic CPR green and repurposed the rich hue with a minimal, modern, and bold new logo. We played with the circles in their filled, solid state to honor their existing community and history as well as circles with a porous perimeter to invoke invitation and change. On the website, we extended this playful deviation with new shades of green and layered images all while prioritizing access to key information, legibility, and clear direction.</p>
                        <p><a href='https://www.instagram.com/cprnyc'>@cprnyc</a></p>
                        <p><a href="https://cprnyc.org">https://cprnyc.org</a></p>      
                    </div>
                </div>
            </div>
        </>
    )
}

export default CPR;