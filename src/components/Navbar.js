import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [section, setSection] = useState('home');

  const changeSectionByScroll = () => {
    if (window.scrollY >= 0 && window.scrollY <= 721) {
      setSection('home');
    } else if (window.scrollY > 721 && window.scrollY <= 1443) {
      setSection('about');
    } else if (window.scrollY > 1443 && window.scrollY <= 2164) {
      setSection('skills');
    } else if (window.scrollY > 2164 && window.scrollY <= 2886) {
      setSection('portfolio');
    } else {
      setSection('contact');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeSectionByScroll);
  });

  const menuItems = [
    { title: 'Home', link: '/#' },
    { title: 'About', link: '/#about' },
    { title: 'Skills', link: '/#skills' },
    { title: 'Portfolio', link: '/#portfolio' },
    { title: 'Contact', link: '/#contact' },
  ];

  const mobileNavbarHanlder = () => {
    setShowMobileNavbar((prev) => !prev);
  };

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY >= 90 ? setShadow(true) : setShadow(false);
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        'fixed w-full h-20 bg-black/90 sm:px-8 md:px-11 lg:px-[140px] z-50'
      }
    >
      <div className="w-full h-full max-w-[1240px] flex items-center justify-between">
        <div className="text-white text-2xl font-caveat tracking-wide px-3">
          <h2>Shayan Payandeh</h2>
        </div>
        <div>
          <ul className="hidden md:flex text-white">
            {menuItems.map((item) => (
              <li
                onClick={() => setSection(item.title.toLowerCase())}
                key={item.title}
                className={
                  section === item.title.toLowerCase()
                    ? 'md:ml-5 lg:ml-7 md:text-[12px] lg:text-[15px] text-yellow-600'
                    : 'md:ml-5 lg:ml-7 md:text-[12px] lg:text-[15px] '
                }
              >
                <HashLink smooth to={item.link}>
                  <span className="cursor-pointer hover:text-yellow-600 ease-in duration-200 tracking-widest">
                    {item.title}
                  </span>
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-between">
          <div className="rounded-xl p-1 ml-2 hover:scale-125 ease-in duration-300 cursor-pointer">
            <FaGithub style={{ color: 'orange' }} size={16} />
          </div>
          <div className="rounded-xl p-1 ml-2 hover:scale-125 ease-in duration-300 cursor-pointer">
            <FaLinkedinIn style={{ color: 'orange' }} size={16} />
          </div>
          <div className="rounded-xl p-1 ml-2 hover:scale-125 ease-in duration-300 cursor-pointer">
            <FaInstagram style={{ color: 'orange' }} size={16} />
          </div>
          <div className="rounded-xl p-1 ml-2 hover:scale-125 ease-in duration-300 cursor-pointer">
            <FaYoutube style={{ color: 'orange' }} size={16} />
          </div>
        </div>
        <div className="md:hidden cursor-pointer" onClick={mobileNavbarHanlder}>
          <AiOutlineMenu color="white" size={25} className="mx-3" />
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          showMobileNavbar
            ? 'md:hidden top-0 left-0 fixed w-full h-full bg-black/60 ease-in duration-700'
            : ''
        }
      >
        <div
          className={
            showMobileNavbar
              ? 'md:hidden top-0 left-0 fixed h-screen w-full bg-yellow-900 ease-in duration-700'
              : 'fixed top-[-100%]  ease-in duration-700'
          }
        >
          <div className="flex w-full items-center justify-between px-5 py-16">
            <div className="text-white text-2xl font-caveat tracking-wider px-3">
              <h2>Shayan Payandeh</h2>
            </div>
            <div
              onClick={mobileNavbarHanlder}
              className="bg-yellow-700 rounded-full shadow-sm shadow-gray-300 mx-3 p-2 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <AiOutlineClose color="white" size={20} />
            </div>
          </div>
          <div>
            <ul className="flex flex-col items-center text-orange-100">
              {menuItems.map((item) => (
                <li
                  key={item.title}
                  onClick={() => setShowMobileNavbar(false)}
                  className="mt-8 font-serif tracking-widest cursor-pointer hover:scale-110 hover: ease-in duration-300"
                >
                  <HashLink smooth to={item.link}>
                    {item.title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          <div className=" w-[50%] m-auto flex items-center justify-between mt-32">
            <div className="rounded-xl bg-orange-100 p-3 shadow-md shadow-gray-400 hover:scale-110 ease-in duration-300 cursor-pointer">
              <FaGithub />
            </div>
            <div className="rounded-xl bg-orange-100 p-3 shadow-md shadow-gray-400 hover:scale-110 ease-in duration-300 cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="rounded-xl bg-orange-100 p-3 shadow-md shadow-gray-400 hover:scale-110 ease-in duration-300 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="rounded-xl bg-orange-100 p-3 shadow-md shadow-gray-400 hover:scale-110 ease-in duration-300 cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
