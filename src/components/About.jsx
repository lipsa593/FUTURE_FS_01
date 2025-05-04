import React from 'react';

function About() {
  return (
    <main className="flex flex-1 flex-col justify-between h-full">
      <div className="flex p-10 relative">
        {/* Left Section for 3D Model or Image */}
        <div className="flex flex-1 justify-center items-center">
          {/* 3D Image */}
          <div className="w-full h-full rounded-lg flex items-center justify-center">
            <img
              src="/pic.png" // Corrected path for the image in the public folder
              alt="3D Illustration"
              className="max-w-[900px] max-h-[700px] object-contain rounded-lg" // Reduced size
            />
          </div>
        </div>

        {/* Right Section for Content */}
        <div className="flex flex-col flex-1">
          <div className='lg:max-w-[700px] sm:max-w-[500px] max-w-[400px] leading-relaxed'>
            <h1 className='lg:text-5xl sm:text-3xl text-xl font-extrabold mb-5 bg-gradient-radial from-violet-400 to-white bg-clip-text text-transparent'>
              About
            </h1>
            <p className='sm:text-lg text-base max-w-[650px]'>
              I’m a 3rd-year Computer Science student at Brainware University learning full-stack development, data analytics, and DSA. I build real-world projects, mentor interns, and actively seek internships to gain hands-on experience and prepare for campus placements.
            </p>

            {/* Cards Section */}
            <div className="flex flex-wrap gap-5 mt-10">
              <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg flex-1 min-w-[200px]">
                <h2 className="text-xl font-bold mb-2">Card 1</h2>
                <p>Details about Card 1 go here.</p>
              </div>
              <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg flex-1 min-w-[200px]">
                <h2 className="text-xl font-bold mb-2">Card 2</h2>
                <p>Details about Card 2 go here.</p>
              </div>
              <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg flex-1 min-w-[200px]">
                <h2 className="text-xl font-bold mb-2">Card 3</h2>
                <p>Details about Card 3 go here.</p>
              </div>
              <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg flex-1 min-w-[200px]">
                <h2 className="text-xl font-bold mb-2">Card 4</h2>
                <p>Details about Card 4 go here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
