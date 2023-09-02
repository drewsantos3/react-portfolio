import React from "react";
import { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";


function Nav() {

  const [isActive, setisActive] = React.useState(false);

  const toggleActiveClass = () => {
    setisActive(!isActive);
  };

  const removeActiveClass = () => {
    setisActive(false);
  };

  return (
    <div className={styles.nav}>
      <nav className="m-6 flex flex-row gap-6">
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
        <li onClick={removeActiveClass}>
          <Link to="/about" className={`${styles.navlink}`}>ABOUT ME</Link>
        </li>
        <li onClick={removeActiveClass}>
          <Link to="/projects" className={`${styles.navlink}`}>PROJECTS</Link>
        </li>
        <li onClick={removeActiveClass}>
          <Link to="/contact" className={`${styles.navlink}`}>CONTACT</Link>
        </li>
        </ul>

        <div className={`${styles.burger} ${isActive ? styles.active : ""}`} onClick={toggleActiveClass}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      
      </nav>
    </div>
  );
}

export default Nav;
