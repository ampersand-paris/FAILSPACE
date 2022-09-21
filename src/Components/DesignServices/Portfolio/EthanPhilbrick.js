/* === React Elements === */
import React from "react";
import { useState } from "react";

/* === Images === */
import EP1 from '../../../Portfolio/EP_1.png'
import EP2 from '../../../Portfolio/EP_2.png'
import EP3 from '../../../Portfolio/EP_3.png'

const EthanPhilbrick = (props) => {
    
    const [picList, setPicList] = useState([EP1, EP2, EP3])
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
                    <h2 className="portfolio-page-title bubblegum">Ethan Philbrick</h2> 
                </div>
                <div className="flex al-center column">
                    <div className="portfolio-desc">
                        <p>We fell in love (and def cried) when Ethan closed out our introductory meeting with five minutes of improvised cello. Our co-creation brought us through a landscape of persistent periwinkle and tactile collage. We wanted to let Ethan's work speak for itself with support from consistent organization across all webpages and a visual taste of a decadent red sans-serif all caps dream font. We tried to capture in our design the same tender invitation into being together with our soft bellies and hard edges that Ethan extends to his audiences with his performance, music, and writing.</p>
                        <p>Full disclosure, our time ended together with kombucha and rainbow cookies.</p>
                        <p><a href='https://www.instagram.com/ethanphilbrick' target="_blank">@ethanphilbrick</a></p>
                        <p><a href="https://ethanphilbrick.com" target="_blank">https://ethanphilbrick.com</a></p>   
                    </div>   
                </div>
            </div>
        </>
    )
}

export default EthanPhilbrick;