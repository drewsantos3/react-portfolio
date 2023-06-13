import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav className="m-6 flex flex-row gap-6" currentPage={currentPage}>
        <button className="px-5 text-xl text-white" onClick={() => handlePageChange("About")}>
          ABOUT ME
        </button>
        <button className="px-5 text-xl text-white" onClick={() => handlePageChange("Projects")}>
          PROJECTS
        </button>
        <button className="px-5 text-xl text-white" onClick={() => handlePageChange("Contact")}>
          CONTACT
        </button>
      </nav>
    </div>
  );
}

export default Nav;