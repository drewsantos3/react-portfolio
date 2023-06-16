import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <nav className="m-6 flex flex-row gap-6">
        <Link to="/about" className="px-5 text-xl text-white">
          ABOUT ME
        </Link>
        <Link to="/projects" className="px-5 text-xl text-white">
          PROJECTS
        </Link>
        <Link to="/contact" className="px-5 text-xl text-white">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}

export default Nav;