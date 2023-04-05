/* === React Elements === */
import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
/* === Images === */
import YCCLA1 from '../../../Portfolio/YCCLA_1.png'
import YCCLA2 from '../../../Portfolio/YCCLA_2.png'
import YCCLA3 from '../../../Portfolio/YCCLA_3.png'

const VAULT = (props) => {

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

    const onClickPrevious = () => {
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

    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal")
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("active");
            } else {
              reveals[i].classList.remove("active");
            }
          }
    }

    const setGrid = () => {
        console.log(window.innerWidth)
    }

    useEffect(() => {
        setGrid()
    }, [])

    window.addEventListener("scroll", reveal);
    reveal()

    return (
        <>
            <div className="flex column">
                <div className="full-width grid-container bg-light-pink">
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item-a"><iframe className="case-studies-video-player" src="https://player.vimeo.com/video/814666594?h=e6dd6bb10b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="FSDS CLIENT: VAULT"></iframe></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                </div>
                <div className="flex mobile-column-reverse standard-padding relative bg-light-pink">
                    <div className="SC-container">
                        <div className="flex mobile-center">
                            <h1 className="page-title bubblegum">VAULT</h1> 
                        </div>
                        <div className="reveal flex column">
                            <h2 className="intro">Between 2017–2020, 80+ dance artists, presenters, funders, technologists, scholars and educators gathered to investigate questions about dance artists, their creative practice, and the value of artist-driven archives.</h2>
                            <p>VAULT, organized by the internationally-renowned Bebe Miller Company, is a dynamic digital archive built from those meetings. It includes videos of conversations, presentations, writing, and other gathered materials, organized according to the main thematic areas that emerged: Archival Thinking; Context; Methods: and Why It Matters.</p>
                            <p>Each of the four thematic areas is a collection of gathered materials in the form of audio, video, image, and text documented over the years, and some of the gathered materials speaks to and is featured in more than one theme. In order to organize the multidisciplinary and thematically overlapping archive, the website utilizes bold color as an organizing principle. Each of the themes is paired with a vibrant color palate that directs the attention along a curated horizontal expanse. The gathered material pages responds to the point of entry and render their color depending on how the user is choosing to view the archive. The experience is as visually cohesive as it is thematically assembled.</p>
                        </div>
                    </div>
                    <div className="flex column side-column">
                        <div className="info-component">
                            <h3>Client</h3>
                            <p>Bebe Miller</p>  
                            <h3>Service</h3>
                            <p>Web Development</p>
                            <h3>Project Team</h3>
                            <p>Ampersand Paris  
                            <br></br>Angel Acuña</p>  
                            <h3>Sector</h3>
                            <p>Performing Arts</p>  
                            <h3>Site</h3>
                            <p><a href="http://www.vault-project.org/" target="_blank">vault-project.org</a></p>  
                        </div>
                    </div>
                </div>
                <div>
                    <div className="case--studies--container flex column bg-off-black">
                        <img className="reveal full-width " src="/Images/Portfolio/VAULT5.png" />
                        <img className="reveal" src="/Images/Portfolio/VAULT2.png" />
                        <div className="reveal flex jc-space-btwn mobile-column case--studies--container--small light-pink">
                            <div className="forty-eight-percent-w flex column">
                                <h3>The Goal</h3>
                                <p>We needed to design a digital archive that could be navigated in two unique ways: four central themes and a comprehensive index. The scope and breadth of the artistry needed to be held inside a cohesive design, one that allowed for the material and conversations to have a life beyond the time of convening while grounding the conversations in the past.</p>
                            </div>
                            <div className="forty-eight-percent-w flex column">
                                <h3>The Process</h3>
                                <p>We began our process by researching a wide array of colors and fonts and entered into a series of collaborative conversations that yielded a style guide for the project’s use. Our conversations revolved around documentation as an aesthetic pursuit and the suggestion of ‘forward motion’ both as it relates to dance as a moving medium and as a reference to the conversations about the futurity of the form.</p>
                                <p>After we identified key foundational elements of our visual identity, we engaged in an iterative wireframing process. We arrived at a two-paned navigation system, one menu that toggled the curated themes and another than contained a full list of gathered materials. The menus both functioned as a navigation component as well as lens through which the archive is viewed akin to the ring around a magnifying glass or a frame around a painting. We also systemized buttons, identifiers for audio, video, and text based media, spacing, and unique layouts for each of the themes. We then focused on key design and engineering strategies to translate the horizontal scroll to different sized screens.</p>
                            </div>
                        </div>
                        <img className="reveal full-width " src="/Images/Portfolio/VAULT4.png" />
                        <div className="reveal flex mobile-column jc-space-btwn full-width flex case--studies--container--small light-pink">
                            <img className="forty-eight-percent-w" src="/Images/Portfolio/VAULT3.png" />
                            <img className="forty-eight-percent-w" src="/Images/Portfolio/VAULT1.png" />
                        </div>
                        <div className="reveal flex mobile-column jc-space-btwn full-width flex case--studies--container--small light-pink">
                            <div className="case--studies--container--extra--small flex jc-space-btwn forty-eight-percent-w">
                                <img className="forty-eight-percent-w-mobile" src="/Images/Portfolio/Vault-mobile-4.png" />
                                <img className="forty-eight-percent-w-mobile" src="/Images/Portfolio/Vault-mobile-1.png" />
                            </div>
                            <div className="case--studies--container--extra--small flex jc-space-btwn forty-eight-percent-w">
                                <img className="forty-eight-percent-w-mobile" src="/Images/Portfolio/Vault-mobile-3.png" />
                                <img className="forty-eight-percent-w-mobile" src="/Images/Portfolio/Vault-mobile-2.png" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default VAULT;