import "./Normalize.css";
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Switch } from "react-router-dom";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        if (darkMode) {
        document.body.classList.add("dark");
        } else {
        document.body.classList.remove("dark");
        }
    }, [darkMode]);
    
    return (
        <Router>
        <div className="App">
            <Switch>
            <Route exact path="/">
                <Home darkMode={darkMode} setDarkMode={setDarkMode} />
            </Route>
            <Route path="/about">
                <About darkMode={darkMode} setDarkMode={setDarkMode} />
            </Route>
            <Route path="/projects">
                <Projects darkMode={darkMode} setDarkMode={setDarkMode} />
            </Route>
            <Route path="/contact">
                <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
            </Route>
            </Switch>
        </div>
        </Router>
    );
    }

export default App;