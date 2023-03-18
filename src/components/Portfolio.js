import React, { useState } from 'react';
import projectImage0 from '../assets/Projects/project_e-commerce.png';
import projectImage1 from '../assets/Projects/project_dashboard.png';
import projectImage2 from '../assets/Projects/project_darkPortfolio.png';
import projectImage3 from '../assets/Projects/project_portfolio.png';

function Portfolio() {
  const [categoryName, setCategoryName] = useState('all');
  const categoryList = ['All', 'React', 'Next'];
  const projectList = [
    { title: 'E-commerce', image: projectImage0, category: 'next' },
    { title: 'Dashboard', image: projectImage1, category: 'react' },
    { title: 'Portfolio', image: projectImage3, category: 'next' },
    { title: 'Dark Portfolio', image: projectImage2, category: 'react' },
  ];
  const [projects, setProjects] = useState(projectList);

  const changeCategoryHandler = (input) => {
    const category = input.toLowerCase();
    setCategoryName(category);
    const projects =
      input === 'All'
        ? projectList
        : projectList.filter((project) => project.category === category);
    setProjects(projects);
  };
  return (
    <div id="portfolio" className="md:h-auto bg-gray-900 py-20">
      <div className="w-full max-w-[1240px] h-full  m-auto">
        <ul className="flex flex-wrap  font-medium text-center justify-center text-gray-500 border-b w-[50%] md:w-[30%] m-auto border-gray-500 ">
          {categoryList.map((category) => (
            <li
              onClick={() => changeCategoryHandler(category)}
              className={
                category.toLowerCase() === categoryName.toLowerCase()
                  ? 'mx-4 my-4 cursor-pointer lg:tracking-wider text-yellow-600'
                  : 'mx-4 my-4 cursor-pointer tracking-wider'
              }
            >
              {category}
            </li>
          ))}
        </ul>
        <div className=" grid grid-cols-2 gap-6 m-auto mt-10 max-w-[800px]">
          {projects.map((project) => (
            <div
              key={project.title}
              className="col-span-2 sm:col-span-1 flex items-center justify-center p-2 "
            >
              <div>
                <img
                  className="rounded-md ease-in duration-[400ms] cursor-pointer hover:scale-105 opacity-60 hover:opacity-100"
                  src={project.image}
                  alt="/"
                  style={{ height: '200px', width: '300px' }}
                />
                <h3 className="text-yellow-600 mt-3 text-center  tracking-widest ">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
