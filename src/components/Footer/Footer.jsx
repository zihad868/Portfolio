import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:text-gray-900">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
        <ul className="self-center font-bold py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/skill'>Skill</Link>
          <Link to='/projects'>Projects</Link>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
        <div className="flex justify-start space-x-6">
                <a href="https://www.facebook.com/zihad.hasan.549668" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" alt="Facebook" />
                </a><br />
                <a href="https://github.com/zihad868" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="GitHub" />
                </a><br />
                <a href="https://www.linkedin.com/in/zihad-hasan-75449018b/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" alt="LinkedIn" />
                </a>
               </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
