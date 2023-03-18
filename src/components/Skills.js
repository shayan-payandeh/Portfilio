import React from 'react';
import htmlLogo from '../assets/logos/logo_html_1.png';
import cssLogo from '../assets/logos/logo_css_1.png';
import jsLogo from '../assets/logos/logo_js_1.png';
import nodejsLogo from '../assets/logos/logo_nodejs_2.png';
import reactLogo from '../assets/logos/logo_react_1.png';
import nextjsLogo from '../assets/logos/logo_nextjs_1.png';
import tailwindLogo from '../assets/logos/logo_tailwind_1.png';
import githubLogo from '../assets/logos/logo_github_1.png';

function Skills() {
  const mySkills = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'Java Script', logo: jsLogo },
    { name: 'Node JS', logo: nodejsLogo },
    { name: 'React Js', logo: reactLogo },
    { name: 'Next Js', logo: nextjsLogo },
    { name: 'Tailwind', logo: tailwindLogo },
    { name: 'Github ', logo: githubLogo },
  ];
  return (
    <div id="skills" className="w-full md:h-screen p-2 py-28 bg-black">
      <div className="max-w-[1240px] mx-auto h-full">
        {/* <p className="text-xl tracking-widest text-[#5651e5]">Skills</p> */}
        <h2 className="text-center lg:text-start py-4 text-yellow-600 text-xl tracking-wide">
          What I Can Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {mySkills.map((skill) => (
            <div
              key={skill.name}
              className="w-[60%] h-[90px] md:w-full m-auto p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-900 cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                  <img src={skill.logo} width={55} height={55} alt="skills" />
                </div>
                <div className="flex flex-col items-center justify-center text-white">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
