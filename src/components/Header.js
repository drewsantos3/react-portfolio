import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="container bg-black p-4">
      <div className="header-wrapper">
      <Link to="/" className="header text-5xl">Andrew Harold Santos</Link>
      </div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;