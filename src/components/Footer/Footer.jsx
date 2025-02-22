import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-6 z-20 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">© 2025 YourCompany</div>

        <div className="flex space-x-12 mt-4 md:mt-0">
          <Link to="#" className="hover:text-gray-400">
            Help
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Services
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            🔗 LinkedIn
          </a>
          <a href="#" className="hover:text-gray-400">
            🐦 Twitter
          </a>
          <a href="#" className="hover:text-gray-400">
            📘 Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
