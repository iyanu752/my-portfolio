import React from "react";
import Illustration from "../cyborg.png";


function Main() {
    return(
    <div className="container">

    <div className="illustration">
                <img className="cyborg-png" src= {Illustration} />
            </div>

        <div className="paragraph-flex">
            <span> Welcome to my portfolio</span>
            <h1>{`Hi!, I'm Iyanu`} <span className="wrap">Fullstack Developer</span></h1>
                <p>
                        Hello there! My name is Iyanu, and I'm thrilled to welcome you to my portfolio website. I
                        am a passionate and creative full-stack software developer with a wide range of interests and skills beyond coding.
                        When I'm not immersed in the world of programming, I find joy in expressing my artistic side. 
                        Drawing and animating allow me to explore my imagination and bring my ideas to life.
                </p>
                <p>
                        I invite you to explore my work, delve into my projects, and  thank you for visiting, and I hope you enjoy your time here. 
                        Feel free to reach out to me for any inquiries or collaboration opportunities,
                        I'm always excited to connect with fellow enthusiasts in the tech and creative communities. 
                </p>

                {/* <div className="buttons">
                <div className="contact-div">
                <button className="contact-btn">
                    <a className="button-link" href="#">Contact me</a>
                    <img src=" " />
                    </button>
                </div>

                <div className="contact-div">
                <button className="resume-btn">
                    <a className="button-link" href="#">Resume</a>
                    <img src=" " />
                    </button>  
                </div>
                </div>             */}
                    
        </div>

        

    </div>
    );
}

export default Main;