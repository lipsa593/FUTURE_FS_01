import 'boxicons/css/boxicons.min.css';
import React, { useEffect } from 'react';
import { ComputersCanvas } from './canvas/Computers'; // Using named import

const Hero = () => {
  useEffect(() => {
    console.log('Hero component mounted.');
    return () => {
      console.log('Hero component unmounted.');
    };
  }, []);

  return (
    <main className="flex flex-1 flex-col justify-between h-full mt-20 lg:mt-24 px-4 sm:px-6"> {/* Added responsive padding */}
      <div className="flex flex-col md:flex-row p-5 relative"> {/* Added responsive flex direction */}
        {/* Left Content */}
        <div className="flex flex-col flex-1">
          <div className="introducing-container w-[230px] md:w-[300px] h-[33px] flex items-center justify-center mb-5 relative">
            <div>
              <i className="bx bxs-star-half"> Developer Profile</i>
            </div>
          </div>
          <div className="lg:max-w-[900px] sm:max-w-[600px] max-w-[400px] leading-relaxed"> {/* Increased max width */}
            <h1 className="lg:text-5xl sm:text-3xl text-xl font-extrabold mb-5 bg-gradient-radial from-violet-400 to-white bg-clip-text text-transparent">
              Hi, I'm Lipsa Porel
            </h1> {/* Decreased font size */}
            <p className="max-w-[900px] lg:text-lg sm:text-sm text-xs"> {/* Decreased font size */}
              Aspiring Data Analyst & Full Stack Developer | Building Projects, Practicing DSA & Seeking Internships
            </p>
            <a
              href="/resume.pdf" // Path to the resume file in the public folder
              download="Lipsa_Porel_Resume.pdf" // Suggested filename for the downloaded file
              className="mt-5 inline-block bg-violet-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-violet-600 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Content: ComputersCanvas */}
        <div className="flex flex-[1.5] h-[300px] sm:h-[500px] -mt-10 sm:-mt-20"> {/* Added responsive height */}
          <ComputersCanvas />
        </div>
      </div>
    </main>
  );
};

export default Hero;