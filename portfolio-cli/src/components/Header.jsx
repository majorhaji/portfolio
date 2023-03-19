import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = (e) => {
    setIsDarkMode(!isDarkMode);
    const root = window.document.documentElement;
    root.classList.toggle("dark-mode", isDarkMode);
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Yusuf Haji</Link>
      </div>
      <div className="nav">
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <div className="console">
        <input
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          onClick={toggleDarkMode}
        />
        <label for="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
