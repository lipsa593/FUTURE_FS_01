// ProjectGrid.jsx
import React from 'react';

const ProjectGrid = () => {
  const projects = [
    {
      title: 'Real-time Chat App',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      imgSrc: 'https://via.placeholder.com/600x400',
      link: '/chat-app', // Added link for navigation
    },
    {
      title: 'E-Commerce Website',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      imgSrc: 'https://via.placeholder.com/600x400',
      link: '/ecommerce', // Added link for navigation
    },
    {
      title: 'Portfolio Website',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
      imgSrc: 'https://via.placeholder.com/600x400',
      link: '/portfolio', // Added link for navigation
    },
    {
      title: 'Social Media Platform',
      description: 'Excepteur sint occaecat cupidatat non proident.',
      imgSrc: 'https://via.placeholder.com/600x400',
      link: '/social-media', // Added link for navigation
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r px-6 py-12">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-white mb-12">Projects</h1>

      {/* Horizontal Scroll Section */}
      <div className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide mt-10 w-full space-x-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[100%] h-[60vh] rounded-lg overflow-hidden shadow-lg snap-center flex"
          >
            {/* Image Section */}
            <img 
              src={project.imgSrc}
              alt={project.title}
              className="w-1/2 object-cover"
            />
            {/* Text Section */}
            <div className="p-6 flex flex-col justify-center w-1/2">
              <h2 className="text-3xl font-extrabold text-white mb-4">{project.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
              <a
                href={project.link} // Added link to navigate to respective page
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition text-center"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
