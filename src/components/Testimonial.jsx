import React from "react";
import ProfilePic from "../assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai";


const Testimonial = () => {
    return(
        <div className="work-section-wrapper" >
            <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className="primary-heading">What They Are Saying </h1>
                    <p className="primary-text">
                    I recently dined at Foodie and was blown away by the exceptional service and mouthwatering dishes. From the moment I walked in, the atmosphere was warm and welcoming
                    </p>

            </div>
            <div className="testimonial-section-bottom">
                <img src= {ProfilePic}               alt="" />
                <p>
                    FOODIE Customer
                </p>
            
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar/>
            </div>
                <h2>John Bryan</h2>
            </div>
        </div>
    );
};

export  default Testimonial;