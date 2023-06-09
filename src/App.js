import "./Normalize.css";
import "./index.css";
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Home from './components/Home';
import { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, } from "react-router-dom";

function App() {
    const darkMode = useState(false);
    
    useEffect(() => {
        if (darkMode) {
        document.body.classList.add("dark");
        } else {
        document.body.classList.remove("dark");
        }
    }, [darkMode]);
    
    return (
        <Router>
        <div className="all dark">
          {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;