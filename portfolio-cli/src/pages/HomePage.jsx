import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <main className="home">
      <Intro />
      <Projects />
      <Footer />
    </main>
  );
};

export default HomePage;
