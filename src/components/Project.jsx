// ProjectGrid.jsx
import React from 'react';

const ProjectGrid = () => {
  const projects = [
    {
      title: 'Travel Planner',
      description: 'My Travel Planner is a user-friendly website that allows users to discover destinations, check weather conditions, and plan trips with ease. It’s built with a focus on clean design and interactive features..',
      imgSrc: '/travel_planner.png', // Replace with a valid local or hosted image
      link: '/chat-app',
    },
    {
      title: 'Portfolio Website',
      description: 'This website is a collection of my projects, skills, and achievements in web development, data analytics, and programming, built to reflect my growth as a Computer Science student.',
      imgSrc: '/portfolio.png', // Replace with a valid local or hosted image
      link: '/portfolio',
    },
    {
      title: 'Olimpic Athlete Dashboard',
      description: 'This Olympic Games dashboard offers an interactive way to explore medal counts, athlete achievements, and country performances. With filters for year, country, sport, and more, users can visualize data through maps, charts, and tables to gain insights into Olympic history and trends.',
      imgSrc: '/analyticp1.png', // Replace with a valid local or hosted image
      link: '/portfolio',
    },
    {
      title: 'Skycast',
      description: 'Skycast is a dynamic weather web application built using HTML, CSS, and JavaScript. It provides accurate, real-time weather information with a sleek and modern user interface.',
      imgSrc: '/task2.png', // Replace with a valid local or hosted image
      link: '/portfolio',
    },
    {
      title: 'TechVibe',
      description: 'Redesigned Amazon’s website into TechVibe, a modern tech shopping platform using Next.js and Tailwind CSS. Integrated AI tools like for smart layouts and branding assets (logo, banner, color scheme). Key features include a clean UI, mobile responsiveness, AI-generated visuals, and simplified navigation with product favorites and cart options.',
      imgSrc: '/task3.png', // Replace with a valid local or hosted image
      link: '/portfolio',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r px-4 sm:px-6 py-12">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-8 sm:mb-12">Projects</h1>

      {/* Horizontal Scroll Section */}
      <div className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide mt-6 sm:mt-10 w-full space-x-4 sm:space-x-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[90%] sm:w-[100%] h-[40vh] sm:h-[60vh] rounded-lg overflow-hidden shadow-lg snap-center flex"
          >
            {/* Image Section */}
            <img 
              src={project.imgSrc}
              alt={project.title}
              className="w-3/5 object-cover" // Decreased image width to 2/5
            />
            {/* Text Section */}
            <div className="p-4 sm:p-6 flex flex-col justify-center w-2/5"> {/* Increased text width to 3/5 */}
              <h2 className="text-xl sm:text-3xl font-extrabold text-white mb-2 sm:mb-4">{project.title}</h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">{project.description}</p>
              <a
                href={project.link} // Added link to navigate to respective page
                className="bg-pink-500 hover:bg-pink-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition text-center"
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
