import React from "react";

const Step = () => {
    return <div id="page" className="pt-8 lg:px-[72px]">
        <div className="pt-20 max-w-[600px] flex flex-col justify-center gap-y-5">
        <h1 className="font-bold text-4xl text-gray-500 text-[20px] ps-8 gap-y-3">Terapis Profesional dan
            <br/>Bersertifikat yang dapat Anda 
            <br/>Percayai</h1>
            <p className="pt-4 ps-8">Di InnerStrength, kami memahami bahwa menemukan terapis yang tepat
            dapat menjadi proses yang rumit dan membingungkan. Anda ingin memastikan bahwa Anda 
            menemukan seseorang yang memiliki kualifikasi, berpengalaman, dan mampu memberikan dukungan
             yang Anda butuhkan.</p>
            <div>
                <button className="px-6 lg:px-8 py-2 bg-blue-600 hover:bg-blue-500 hover:text-white outline-none rounded">Temukan Terapis</button>
            </div>
        </div>
    </div>;
};

export default Step;