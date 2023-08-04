/* === React Elements === */
import React from "react";
import { useState, useEffect } from "react";

const Home = () => {

    const [word, setWord] = useState('FAIL');
    const [count, setCount] = useState(true);

    let wordList = [ 'FAIL','Mentorship ','Design ','Cooperative ','Experimentation ','PARTY ' ]

    const changeWords = () => {
        setCount(count => count + 1);
        console.log(count)
        setWord(wordList[count])
        console.log(word)
    }

    var i = 0

    useEffect(() => {

        const intervalID = setInterval(function(){
            if (i === wordList.length - 1) {
                setWord('___________ ')
                if (count === false ) {
                    setCount(true)
                } else if (count === true) {
                    setCount(false)
                }
            } else {
                console.log(i)
                setWord(wordList[i])
                i++
            }
          }, 5000);

        return () => clearInterval(intervalID);
      }, [count]);

    return (
        <div className="standard-spacing full-height bg-bubblegum flex column center col-center al-center">
        
            <img src="/light-ani.GIF" className="third"/>
            <h1 className="intro-text">{word}SPACE</h1>
        </div>
    )
}

export default Home;