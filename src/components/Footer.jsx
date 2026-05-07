import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-800 text-white shadow-inner shadow-indigo-700/30">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl font-semibold mb-2">
            <Link to="/" className="hover:text-indigo-300 transition-colors duration-300">
              Thanks for visiting
            </Link>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            This is a blog website sharing the latest news on{" "}
            <span className="text-indigo-300 font-medium">
              Technology, Entertainment, Health
            </span>{" "}
            and more.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            © 2025 <span className="font-semibold text-indigo-300">Nextline News</span>. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="text-gray-200 mb-3 text-lg font-semibold tracking-wide">Follow us</p>
          <nav>
            <ul className="flex gap-5 text-2xl items-center">
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-indigo-400/50 rounded-full hover:bg-indigo-600/80 hover:border-transparent hover:shadow-lg hover:shadow-indigo-600/40 transition-all duration-300 flex items-center justify-center"
                >
                  <Github className="text-white w-5 h-5" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/sanskriti-gupta-2898b1313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-indigo-400/50 rounded-full hover:bg-indigo-600/80 hover:border-transparent hover:shadow-lg hover:shadow-indigo-600/40 transition-all duration-300 flex items-center justify-center"
                >
                  <Linkedin className="text-white w-5 h-5" />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-indigo-400/50 rounded-full hover:bg-indigo-600/80 hover:border-transparent hover:shadow-lg hover:shadow-indigo-600/40 transition-all duration-300 flex items-center justify-center"
                >
                  <Instagram className="text-white w-5 h-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-indigo-700 mt-6"></div>
    </footer>
  );
};

export default Footer;
