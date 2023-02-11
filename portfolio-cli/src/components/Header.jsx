import Console from "./Console";
import LogoSection from "./LogoSection";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <LogoSection />
      <Nav />
      <Console />
    </div>
  );
};

export default Header;
