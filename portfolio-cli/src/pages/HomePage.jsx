import Intro from "../components/Intro";

import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
const HomePage = () => {
  return (
    <main className="home">
      <Header />
      <Intro />
      <Projects />
      <About />
      <Footer />
    </main>
  );
};

export default HomePage;
