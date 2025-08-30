import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Links from "./pages/Links";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion"

function App() {
  const location = useLocation();

  return (
    <div className="page-layout">
      <Navbar />
      <AnimatePresence mode="wait">
        <div className="routes">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/links" element={<PageWrapper><Links /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          </Routes>
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 }
};

const pageTransition = {
  duration: 0.5
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

export default App;