import React from 'react';

function Contact() {
  return (
    <div id="contact" className="w-full md:h-screen bg-black py-20">
      <div className="flex flex-col w-full h-full max-w-[1240px] text-center m-auto ">
        <div className="p-3">
          <h2 className="text-white text-2xl tracking-wide font-bold">
            Contact me
          </h2>
        </div>
        <div className="grid grid-cols-5 h-full">
          <div className="col-span-5 md:col-span-2 py-11 flex justify-center">
            <div className="text-center md:text-start">
              <h4 className="tracking-wider text-white ">Have a question?</h4>
              <p className="text-slate-400 text-xs ">I'm here to help you</p>
              <p className="text-yellow-600  text-xs tracking-wide">
                Email me at shayan.iker@yahoo.com
              </p>

              <h4 className="tracking-wider text-white  mt-7">
                Current Location
              </h4>
              <p className="text-slate-400 text-xs ">Iran, Bandarabbas</p>
              <p className="text-yellow-600  text-xs tracking-wide">
                Serving client worldwide
              </p>
            </div>
          </div>
          <div className="col-span-5 md:col-span-3 py-11 px-4 ">
            <form class="w-full max-w-lg m-auto">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-gray-900 text-gray-200 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-700"
                    id="grid-first-name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-gray-900 text-gray-200 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-yellow-700"
                    id="grid-last-name"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <input
                    class="appearance-none block w-full bg-gray-900 text-gray-200 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-700"
                    id="grid-subjects"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <textarea
                    rows={5}
                    class="appearance-none block w-full bg-gray-900 text-gray-200 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-yellow-700"
                    id="grid-subjects"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="flex justify-start">
                <button className="bg-yellow-700 py-3 px-6 text-white rounded-sm hover:bg-yellow-700/90 ease-in duration-300">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
