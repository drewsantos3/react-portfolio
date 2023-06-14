import React from "react";
import Nav from "./Nav";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="container bg-black p-4">
      <div className="typed-wrapper">
      <h1 className="typed">Andrew Santos - Full Stack Developer</h1>
      </div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;