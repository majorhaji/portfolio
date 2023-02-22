import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Yusuf Haji</div>
      <div className="nav">
        <nav>
          <Link to="/about">
            <a href="">About</a>
          </Link>
          <Link to="/contact">
            <a href="">Contact</a>
          </Link>
        </nav>
      </div>
      <div className="console">
        <button className="dark-mode">Dark Mode</button>
      </div>
    </div>
  );
};

export default Header;
