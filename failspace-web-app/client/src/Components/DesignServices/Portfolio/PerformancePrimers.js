/* === React Elements === */
import React from "react";
import { useState } from "react";
import PP1 from '../../../Portfolio/PP_1.png'
import PP2 from '../../../Portfolio/PP_2.png'
import PP3 from '../../../Portfolio/PP_3.png'


const PerformancePrimers = (props) => {
    
    const [picList, setPicList] = useState([PP1, PP2, PP3])
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
                <div className="porfolio-images center flex space-btwn"> 
                    <button className="portfolio-bttn" id="mirror" onClick={onClickPrevious}>&#x27BD;</button>
                    <img className="portfolio-img"src={picList[index]} />
                    <button className="portfolio-bttn" onClick={onClickNext}>&#x27BD;</button>
                </div>
                <div className="portfolio-desc flex column ivy-text">
                    <p>The Performance Primers are a collective of artists based in Oakland, Ohlone territory. The Primers grow in direct response to the East Bay community needs, providing accessible performance space, caring community, and production support necessary to thrive. FAILSPACE Design Services, familiar with our own DIY approach, set out to design a website that resembles the home setting of Primer events. We designed each page to be a different room that could be found in the East Bay. We designed a hand drawn font that is a digital rendition of one of the Primer’s handwriting found in years of PP signs and programs. The finished website is a not unlike walking into a grandmother’s home, old hardwood, wallpaper that borders over the top, and a glass jar of our favorite candies.</p>
                    <p><a href='https://www.instagram.com/performanceprimers'>@performanceprimers</a></p>
                    <p><a href="https://performanceprimers.com">https://performanceprimers.com</a></p>      
                </div>
            </div>
        </>
    )
}

export default PerformancePrimers;