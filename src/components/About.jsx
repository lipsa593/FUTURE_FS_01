import React from 'react';

function About() {
  return (
    <main className="flex flex-1 flex-col justify-between h-full">
      <div className="flex flex-col md:flex-row p-6 sm:p-10 relative"> {/* Added responsive flex direction */}
        {/* Left Section for 3D Model or Image */}
        <div className="flex flex-1 justify-center items-center">
          {/* 3D Image */}
          <div className="w-full h-full rounded-lg flex items-center justify-center">
            <img
              src="/pic.png" // Corrected path for the image in the public folder
              alt="3D Illustration"
              className="max-w-[300px] sm:max-w-[600px] md:max-w-[900px] max-h-[300px] sm:max-h-[500px] md:max-h-[700px] object-contain rounded-lg" // Added responsive sizes
            />
          </div>
        </div>

        {/* Right Section for Content */}
        <div className="flex flex-col flex-1 mt-6 md:mt-0"> {/* Added responsive margin */}
          <div className='lg:max-w-[700px] sm:max-w-[500px] max-w-[400px] leading-relaxed'>
            <h1 className='lg:text-5xl sm:text-3xl text-xl font-extrabold mb-5 bg-gradient-radial from-violet-400 to-white bg-clip-text text-transparent'>
              About
            </h1>
            <p className='sm:text-lg text-base max-w-[650px]'>
              I’m a 3rd-year Computer Science student at Brainware University learning full-stack development, data analytics, and DSA. I build real-world projects, mentor interns, and actively seek internships to gain hands-on experience and prepare for campus placements.
            </p>

            {/* Cards Section */}
            <div className="flex flex-wrap gap-5 mt-10">
              <div className="bg-slate-500 text-white p-5 rounded-lg shadow-lg flex-1 min-w-[150px] sm:min-w-[200px] hover:scale-105 hover:bg-slate-600 transition-transform duration-300">
                <img
                  src="/dsa.svg" // Replace with the actual path to the DSA image
                  alt="DSA"
                  className="w-full h-16 sm:h-20 object-contain mb-3"
                />
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">DSA</h2>
              </div>
              <div className="bg-slate-500 text-white p-5 rounded-lg shadow-lg flex-1 min-w-[150px] sm:min-w-[200px] hover:scale-105 hover:bg-slate-600 transition-transform duration-300">
                <img
                  src="/web.svg" // Replace with the actual path to the Web Development image
                  alt="Web Development"
                  className="w-full h-16 sm:h-20 object-contain mb-3"
                />
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">Web Development</h2>
              </div>
              <div className="bg-slate-500 text-white p-5 rounded-lg shadow-lg flex-1 min-w-[150px] sm:min-w-[200px] hover:scale-105 hover:bg-slate-600 transition-transform duration-300">
                <img
                  src="/analytics.svg" // Replace with the actual path to the Data Analytics image
                  alt="Data Analytics"
                  className="w-full h-16 sm:h-20 object-contain mb-3"
                />
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">Data Analytics</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
