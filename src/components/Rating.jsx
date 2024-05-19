import React from "react";
import rating from "../assets/rating.png";
const Rating = () => {
    return (
        <div className="pt-6 font-bold text-3xl px-14" >
            <h1>Membantu Anda menemukan
            <br></br><span className="text-blue-600">keseimbangan dan kesejahteraan</span> 
            <br></br><span className=" text-blue-600">mental</span> yang lebih baik.</h1>
            <div>
                <img src={rating} alt="" className="flex justify-between"/>
            </div>
        </div>
    );
};

export default Rating;