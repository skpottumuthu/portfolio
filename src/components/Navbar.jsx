function Navbar() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-black p-4 fixed w-full top-0 left-0 z-50 h-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold hover:text-blue-500 transition">
          {/* Santosh Kumar Pottumuthu */}
        </h1>
        <ul className="flex space-x-12 text-white">
          <li>
            <button onClick={() => handleScroll('home')} className="hover:text-blue-500">
              Home
            </button>
          </li>

          <li>
            <button onClick={() => handleScroll('experience')} className="hover:text-blue-500">
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('education')} className="hover:text-blue-500">
              Education
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('skills')} className="hover:text-blue-500">
              Skills
            </button>
          </li>
         
          <li>
            <button onClick={() => handleScroll('projects')} className="hover:text-blue-500">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('contact')} className="hover:text-blue-500">
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
