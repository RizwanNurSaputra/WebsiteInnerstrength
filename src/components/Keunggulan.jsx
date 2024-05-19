import React from "react";
import satu from "../assets/satu.png";
import dua from "../assets/dua.png";
import tiga from "../assets/tiga.png";

const Keunggulan = () => {
    return (
        <div className="pt-8">
            <h3 className="font-bold text-center">Keunggulan</h3>
            <br></br><h1 className="font-bold text-3xl text-center">Kenapa Memilih Kami?</h1>
            <div>
                <img src={satu} alt="" className="pt-6 px-14 flex-col object-left" />
            </div>
            <div>
            <img src={dua} alt="" className="pt-6 px-14 flex-col object-center"/>
            </div>
            <div>
            <img src={tiga} alt="" className="pt-6 px-14 flex-col object-right"/>
            </div>
        </div>
    );
};

export default Keunggulan;