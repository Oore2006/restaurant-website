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
                                Water Is An Important Part of A Balanced Diet
                                 </h1>
                                <p className="primary-text">
                                    lorem ipsum just some text that i would like to put here
                                    Hope it gets better. Hope Everything gets better
                                </p>
                                <p className="primary-text">
                                    Non  tincundant magma not always a choice. It was not my fault
                                    I tried. I really did my best
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