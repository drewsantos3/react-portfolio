import React from "react";
import Nav from "./Nav";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="bg-black p-4">
      <h2 className="m-6 text-6xl text-white font-bold">Andrew Santos</h2>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;