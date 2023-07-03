import React from "react";
import Html from "../icons/icons8-html-96.png";
import Css from "../icons/icons8-css-filetype-96.png";
import Javascript from "../icons/icons8-javascript-96.png";
import react from '../icons/icons8-react-native-96.png';
import Marquee from "react-fast-marquee";


function Skills({img, name}) {
    return (
    <div className="skills-cont">
            <h2> SKILLS </h2>
            <article>
            I am a passionate software developer with a focus on creating visually appealing and responsive user interfaces.
            I have also developed proficiency in JavaScript, allowing me to enhance user experiences through interactive elements.
            Currently, I am excitedly exploring React and working towards developing dynamic and efficient web applications. 
            Continuously learning and growing, I am eager to collaborate on innovative projects and contribute to the creation of exceptional digital experiences.  
            </article>
        <div className="skills-scroll">

            <div className="scroll-items">
            <Marquee pauseOnHover>
                <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src={Html} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> HTML </h4>
                    </div>
                    
                </div>

                <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src={Css} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> CSS </h4>
                    </div>
                    
                </div>

                <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src={Javascript} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> JAVASCRIPT </h4>
                    </div>
                    
                </div>

                <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src={react} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> REACT </h4>
                    </div>
                    
                </div>
            </Marquee>
                


            </div>

        </div>

    </div>
    )
}

export default Skills;

