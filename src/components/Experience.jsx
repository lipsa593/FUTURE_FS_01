import React, { useState } from 'react';

const experienceData = [
  {
    title: "Fullstack Developer Intern",
    company: "FutureIntren",
    date: "April 2025- Present",
  },
  {
    title: "Data Analyst Intern",
    company: "Gametosa",
    date: "November 2024 – April 2025",
  },
  {
    title: "Btech CSE(DS) student",
    university: "Brainware University",
    date: "August 2021 – Present",
  }
];

const skills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "C", icon: "/icons/c.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind-css.svg" },
];

export default function Experience() {
  const [positions, setPositions] = useState(
    skills.map((_, index) => ({
      x: 50 + (index % 3) * 150, // Calculate x position based on column
      y: 100 + Math.floor(index / 3) * 150, // Further reduced y position to uplift balls
    }))
  );

  const handleDrag = (e, index) => {
    const newPositions = [...positions];
    newPositions[index] = {
      x: e.clientX - e.target.offsetWidth / 2, // Update x position
      y: positions[index].y,                  // Keep y position constant
    };
    setPositions(newPositions);
  };

  return (
    <section id="experience" className="bg-gradient-to-r to-black px-4 sm:px-6 relative">
      {/* Main Heading */}
      <h2 className="text-5xl font-bold absolute top-8 left-8 text-white">Experience</h2>
      <div className="flex-1 mt-20">
        <div className="max-w-5xl mx-auto flex gap-8 flex-row-reverse">
          {/* Right-Aligned 2D Movable Balls */}
          <div className="relative w-2/3 h-[500px] flex flex-wrap gap-8"> {/* Added flex-wrap and gap */}
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-36 h-36 rounded-full flex items-center justify-center bg-gradient-to-b from-gray-700 to-gray-900 shadow-lg cursor-pointer hover:scale-110 hover:shadow-xl transition-transform duration-300"
                style={{
                  left: `${positions[index]?.x || 0}px`, // Fallback to 0 if position is undefined
                  top: `${positions[index]?.y || 0}px`, // Fallback to 0 if position is undefined
                  padding: "1rem",
                }}
                draggable
                onDrag={(e) => handleDrag(e, index)}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-24 h-24 object-contain rounded-full"
                  onError={(e) => {
                    e.target.src = "/icons/default-icon.svg"; // Fallback icon if the image fails to load
                  }}
                />
              </div>
            ))}
          </div>

          {/* Timeline with Vertical Line */}
          <div className="relative w-1/3 flex flex-col items-start gap-6 ml-12 mt-8"> {/* Adjusted spacing */}
            <div className="absolute left-8 top-0 w-2 bg-gray-600 h-full"></div> {/* Adjusted line position */}
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="mb-6 relative flex items-center gap-4 ml-8 hover:scale-105 hover:shadow-lg transition-transform duration-300" // Added hover effects
              >
                <div className="w-5 h-5 bg-purple-600 rounded-full"></div>
                <div className="bg-[#1f1f2e] p-4 rounded-lg shadow-lg border border-purple-700 max-w-[250px]">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.company && <p className="text-sm text-purple-300">{item.company}</p>} {/* Display company if it exists */}
                  {item.university && <p className="text-sm text-purple-300">{item.university}</p>} {/* Display university if it exists */}
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}