import React from "react"; 
import Slider from "react-slick";



function Projects () {

    var settings = {
        dots: true,
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
                             <h3>Description</h3>
                             <p>lorem ipseum</p>
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
                                <h3>Description</h3>
                                <p>lorem ipseum</p>
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
                                <h3>Description</h3>
                                <p>lorem ipseum</p>
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
                                <h3>Description</h3>
                                <p>lorem ipseum</p>
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
                                <h3>Description</h3>
                                <p>lorem ipseum</p>
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
                                <h3>Description</h3>
                                <p>lorem ipseum</p>
                                <div className="project-btns">
                                 <button className="projects-btn">live site</button>
                                    <button className="projects-btn">github </button>
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