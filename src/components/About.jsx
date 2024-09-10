import React from "react";
// import { BsFillPlayCircleFill} from "react-icons/bs";


const About = () => {
    return ( <div className="about-section-container">
                <div className="about-background-image-container">
                    <img src="../assets/aboutbackground(1)"  alt=""/>

                    </div>
                    <div className="about-section-image-container">
                        <img src="../assets/AboutBackgroundImage(1)" alt="" />
                    </div>
                    <div className="about-section-text-container">
                            <p className="primary-subheading">About</p>
                            <h1 className="primary-heading">
                                We are Foodie 
                                 </h1>
                                <p className="primary-text">
                                    We are a dedicated team that aim to satisfy our customers cravings and needs
                                    Your food is just an order away.
                                   
                                </p>
                                <p className="primary-text">
                                    Our ever improving delivery services are affordable and timely.
                                                
                        
                                </p>
                                <div className="about-buttons-container">
                                    <button className="secondary-button">Learn More </button>
                                    <button className="watch-video-button">
                                        {/* <BsFillPlayCircleFill/>   */}
                                        Watch Video </button>

                                </div>
                    </div>                    
        </div>
        );
};
export default About;