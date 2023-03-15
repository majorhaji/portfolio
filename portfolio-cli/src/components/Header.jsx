import { Link } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";

const Header = () => {
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
        <input type="checkbox" id="toggle" className="toggle--checkbox" />
        <label for="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
