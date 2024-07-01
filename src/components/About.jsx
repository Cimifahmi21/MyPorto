import React from "react";

const About = () => {
  return (
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-3 border">


          <div
          name="about"
          className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="mx-auto p-10 justify-center items-center text-center">
                <h3>
                    Judul
                </h3>
                <p>Nama: Fahmi Irvansyah.</p>
                <p>Tempat dan Tanggal Lahir: Bandung , April 1998</p>
                <p></p>
            </div>
          
        </div>
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                About
              </p>
            </div>
    
            <p className="text-xl mt-20">
             Saya adalah seorang yang tertarik di bidang Teknologi jauh dari sebelum dunia IT terkenal karena banyak peminat
            </p>
            <br/>
          </div>


        <div className= "col-span-1 bg-slate-500 text-black text-center border border-black">
                <p>col2</p>
            </div>
        </div>
      </div>
      );
};

export default About;