import React from 'react';

function Main() {
  return (
    <div
      id="/"
      className="w-full h-screen bg-black flex items-center justify-center"
    >
      <div className="w-full h-full max-w-[1220px] grid md:grid-cols-2 py-28">
        <div className="col-span-2 lg:col-span-1 px-4 py-12 ">
          <div className="text-white flex flex-col justify-center text-center lg:text-start lg:justify-start">
            <h5>
              Hey, I'm{' '}
              <span className="font-caveat text-2xl text-yellow-600">
                Shayan
              </span>
            </h5>
            <h1 className="max-w-[310px] text-[34px] font-dmSerif font-bold tracking-wider mt-4 m-auto lg:mx-0">
              I Build & Design Web Applications.
            </h1>
            <p className="max-w-[300px] mt-5 m-auto lg:mx-0 text-gray-200 italic">
              I use my passion and skills to create digital products and
              experiences.
            </p>
            <div className="bg-yellow-700 hover:bg-yellow-700/90 ease-in duration-300 text-slate-100 flex justify-center items-center w-[150px] py-3 mt-10 m-auto rounded-sm cursor-pointer lg:mx-0">
              Work with me
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center pt-12">
          <div className="h-full w-full -scale-x-100 ">
            <img src={require('../assets/bg_2.png')} alt="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
