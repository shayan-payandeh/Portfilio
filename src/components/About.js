import React from 'react';

function About() {
  return (
    <div id="about" className="w-full md:h-screen bg-gray-900 py-28">
      <div className="w-full max-w-[1240px] h-full m-auto grid md:grid-cols-2 gap-12">
        <div className="col-span-2 md:col-span-1 flex justify-center">
          <div className="h-80 w-[90%]">
            <img
              src={require('../assets/bg_2.png')}
              alt="bg"
              style={{ height: '100%', width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>
        <div className="text-center md:text-start col-span-2 md:col-span-1 px-2">
          <h2 className="text-white font-dmSerif text-2xl">Shayan Payandeh</h2>
          <p className="text-yellow-600 mt-2 tracking-wide">
            Freelancer {'&'} Developer
          </p>
          <p className="mt-14 max-w-[480px] m-auto md:ml-0 tracking-wider italic text-lg text-gray-300">
            I use my passion and skills to create digital products and
            experiences. National and international customers rely on me for
            design, implementation, and management of their digital products.
          </p>
          <div className="flex items-center justify-center bg-yellow-700 hover:bg-yellow-700/90 ease-in duration-300 mt-9 py-3 w-[150px] text-slate-100 m-auto md:mx-0 rounded-sm cursor-pointer">
            Connect me
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
