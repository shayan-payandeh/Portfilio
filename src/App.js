import './App.css';
import About from './components/About';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { IoIosArrowUp } from 'react-icons/io';
import { useEffect, useState } from 'react';

function App() {
  const [section, setSection] = useState(false);

  const changeSectionByScroll = () => {
    if (window.scrollY >= 721) {
      setSection(true);
    } else setSection(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeSectionByScroll);
  });

  return (
    <div className="App relative">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      {section && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hidden md:block fixed rounded-full bottom-0 right-0 mr-16 mb-16 bg-yellow-600 p-3 cursor-pointer"
        >
          <IoIosArrowUp color="white" />
        </div>
      )}
    </div>
  );
}

export default App;
