import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Links from "./pages/Links";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="page-layout">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
