import React from "react";
import Nav from "./Nav";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="container bg-black p-4">
      <div className="header-wrapper">
      <h1 className="header">Andrew Harold Santos</h1>
      </div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;