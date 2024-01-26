import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <div className="flex flex-row justify-between">
        <Link to="/" className="font-bold text-white m-6">Andrew H Santos</Link>
        <div>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </div>
    </header>
     
  );
}

export default Header;
