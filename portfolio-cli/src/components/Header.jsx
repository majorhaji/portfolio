import { Link } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Yusuf Haji</div>
      </Link>
      <div className="nav">
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <div className="console">
        <button className="dark-mode">Dark Mode</button>
      </div>
    </div>
  );
};

export default Header;
