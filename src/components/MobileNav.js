import React from "react";
import { Link } from "react-router-dom";

function mobileNav() {
  return (
    <div className="mobileNav">
        <nav className="m-6 flex flex-col gap-2">
            <Link to="/about" className="navlink px-5 text-xl text-white">
                ABOUT ME
            </Link>
            <Link to="/projects" className="navlink px-5 text-xl text-white">
                PROJECTS
            </Link>
            <Link to="/contact" className="navlink px-5 text-xl text-white">
                CONTACT
            </Link>
        </nav>
    </div>
    );
}

export default mobileNav;