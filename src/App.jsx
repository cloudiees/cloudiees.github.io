/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects";
import Experience from "./components/pages/Experience/Experience";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion"
import { GlowCapture } from "@codaworks/react-glow";
import Links from "./components/pages/Links/Links";

function App() {
  const location = useLocation();

  return (
    <GlowCapture>
      <div className="page-layout">
        <Navbar />
        <AnimatePresence mode="wait">
          <div className="routes">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/connect" element={<PageWrapper><Links /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
            </Routes>
          </div>
        </AnimatePresence>
        {/* <Footer /> */}
      </div>
    </GlowCapture>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -15 }
};

const pageTransition = {
  duration: 0.475
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