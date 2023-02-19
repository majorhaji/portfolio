import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Header from "../components/Header";
const HomePage = () => {
  return (
    <main className="home">
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </main>
  );
};

export default HomePage;
