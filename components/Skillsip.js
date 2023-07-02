import React from "react";
import Node from "../icons/icons8-node-js-96.png";
import MongoDb from "../icons/icons8-db-2-96.png";
import Express from "../icons/icons8-express-js-96.png";
import Marquee from "react-fast-marquee";

function Skillip () {
    return(
        <div>
        <h2> SKILLS I AM CURRENTLY LEARNING </h2>
        <p>
        As I continue to learn and grow in this ever-evolving field, 
        I'm eager to collaborate on innovative projects and
         contribute my expertise to create exceptional digital experiences.
         Here are the list of skills I am currently learning. 
        </p>
        <div className="skills-scroll">

            <div className="scroll-items">

            <Marquee direction="right" pauseOnHover>
            <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src= {Node} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> NODE JS </h4>
                    </div>
                    
                </div>

                <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src={Express} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> EXPRESS JS </h4>
                    </div>
                    
                </div>

                <div className="scroll-container">
                    <div className="skill-img-div">
                        <img className="skill-img" src={MongoDb} alt="skills"/>
                    </div>
                    <div className="skill-name-div">
                        <h4 className="skill-names"> MONGODB </h4>
                    </div>
                    
                </div>
            </Marquee>

            </div>

        </div>

        </div>
    )
}

export default Skillip;