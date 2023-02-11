import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
