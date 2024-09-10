import React from "react";
import PickMeals from "../assets/pick-meals-image (1).png"
import ChooseMeals from "../assets/choose-image (1).png" 
import DeliveryMeals from "../assets/delivery-image (1).png"


const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem dolor sit hope I get better. after all this what. why does it have to be like this"   
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: " hope GOd helps me fgbbskfjnl;dd'fkojihrgdkzcnms;l\'dpw ifhrwjga/kfds.br ojpfirbgsdhgfkzdf iuofel/dskmd jufsd;ol/ekgskm iohferj;argfiudbgjk.rfdojgislne"

        },
    ];

    return(
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading"> Work </p>
                <h1 className="primary-heading"> How It Works </h1>
                <p className="primary-text"> 
                    
                    We are committed to providing affordable and best quality services to our customers.
                    Our Team is dedicated to serving you.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                <div className="work-section-info" key={data.title}>
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p> {data.text}</p>
                    </div>
                ))}
            </div>
        </div>
     ); 
   // <div> Work </div>
};
export default Work;
