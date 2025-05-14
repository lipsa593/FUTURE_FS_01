import 'boxicons/css/boxicons.min.css';

const Header = () => {
  return (
    <header className="z-50 fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md flex justify-between items-center px-6 lg:px-16 py-4">
      <div className="text-2xl lg:text-5xl font-extrabold">
        PORTFOLIO
      </div>
      <nav className="flex gap-4 lg:gap-10 text-sm lg:text-2xl">
        <a className="fas fa-star hover:text-gray-500 duration-300" href="#about">About</a>
        <a className="fas fa-star hover:text-gray-500 duration-300" href="#experience">Experience</a>
        <a className="fas fa-star hover:text-gray-500 duration-300" href="#project">Project</a>
        <a className="fas fa-star hover:text-gray-500 duration-300" href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;