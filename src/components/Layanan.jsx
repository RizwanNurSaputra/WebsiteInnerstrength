import React from "react";
import { tentangKami } from "../data/dummy";
const Layanan = () => {
    return (
    <div>
        <h3>Layanan</h3>
        <br/><h1>Layanan Masalah Kesehatan Mental yang Kami Sediakan</h1>
        {tentangKami.map((item, i) => {
            return (
                <div>
                <div>

                <img 
                src={item.image} 
                alt="" />
                </div>
                <h1>{item.title}</h1>
            </div>
        );
        })}
    </div>
    );
};

export default Layanan;