import "./App.css";

import Header from "./components/Header";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
