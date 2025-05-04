import 'boxicons/css/boxicons.min.css';

const Header = () => {
  return (
    <header className='z-10 flex justify-between mb-24 pt-10 items-center'>
      <div className="lg:text-5xl font-extrabold text-2xl">
        PORTFOLIO
      </div>
      <div className='flex gap-10'> 
        <a className='fas fa-star text-2xl hover:text-gray-500 duration-300' href="#about">About</a>
        <a className='fas fa-star text-2xl hover:text-gray-500 duration-300' href="#experience">Experience</a>
        <a className='fas fa-star text-2xl hover:text-gray-500 duration-300' href="#project">Project</a>
        <a className='fas fa-star text-2xl hover:text-gray-500 duration-300' href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Header;