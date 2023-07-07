import React from "react"; 
import Slider from "react-slick";



function Projects () {

    var settings = {
        dots: false,
        infinite: true,
        className: "center",
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };




    return(
        <div>
            <div className=" projects-cont">
                <h2> PROJECTS </h2>
                <Slider {...settings}>
                    <div className="projects-spacing">

                        <div className="projects-div">
                            <img className ="img-adj" src="https://i.pinimg.com/564x/44/49/3d/44493dda088ecc4f4f103ce1940a2338.jpg"/>
                            <div className=" disc">
                             <h3 className="project-dis">LEAD-TRACKER-CHROME-EXTENTION</h3>
                             <p className="project-p">
                                The Lead Tracker Chrome Extension is a  tool that helps you manage leads and maximize your sales potential.
                            </p>
                                <div className="project-btns">
                                    <button className="projects-btn" >live site</button>
                                 <button className="projects-btn">github </button>
                                 </div>
                            </div>
                        </div>
                    </div>


                    <div className="projects-spacing">
                        <div className="projects-div">
                            <img  className ="img-adj" src="https://i.pinimg.com/564x/44/49/3d/44493dda088ecc4f4f103ce1940a2338.jpg"/>
                            <div className=" disc">
                                <h3 className="project-dis">AGE-CALCULATOR-APP</h3>
                                <p className="project-p">
                                    The Age Calculator, is a user-friendly tool that makes calculating age quick and effortless.
                                    </p>
                                <div className="project-btns">
                                 <button className="projects-btn">live site</button>
                                    <button className="projects-btn">github </button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="projects-spacing">
                        <div className="projects-div">
                        <img className ="img-adj"  src="https://i.pinimg.com/564x/44/49/3d/44493dda088ecc4f4f103ce1940a2338.jpg"/>
                            <div className=" disc">
                                <h3 className="project-dis">Facial-recognition-attendance-app</h3>
                                <p className="project-p"> I created a facial recognition attendance application as my final year project for my University</p>
                                <div className="project-btns">
                                 <button className="projects-btn">live site</button>
                                    <button className="projects-btn">github </button>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="projects-spacing">
                        <div className="projects-div">
                        <img className ="img-adj" src="https://i.pinimg.com/564x/44/49/3d/44493dda088ecc4f4f103ce1940a2338.jpg"/>
                            <div className=" disc">
                                <h3 className="project-dis">huddle-landing-page-with-curved-sections</h3>
                                <p className="project-p">a submission for the front end mentor challenge huddle-landing-page-with-curved-sections</p>
                                <div className="project-btns">
                                 <button className="projects-btn"><a href="https://iyanu752.github.io/huddle-landing-page-with-curved-sections/"target="_blank" rel="noopener noreferrer"> live site </a></button>
                                    <button className="projects-btn"> <a href="https://github.com/iyanu752/huddle-landing-page-with-curved-sections"target="_blank" rel="noopener noreferrer"> github </a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
                
            </div>
        </div>
    )
}

export default Projects;