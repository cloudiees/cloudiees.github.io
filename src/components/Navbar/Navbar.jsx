/* eslint-disable no-unused-vars */
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Logo from "../../assets/logotrimmed.png"
import { useEffect, useState } from "react"
import MenuIcon from "../../assets/menuIcon.svg"
import { motion, AnimatePresence, useAnimation, scale } from "framer-motion";
import "./Navbar.css"

function Navbar() {
  // Used to show menu popup for small window view
  const [showElement, setShowElement] = useState(false);
  // Minimum width for default view to be enabled
  // Used to determine whether to use the small window view
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [useDefaultLayout, setUseDefaultLayout] = useState(window.innerWidth >= window.innerHeight);
  // Resize handling
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowWidth(width)
      console.log(width)
      setUseDefaultLayout(width >= height)
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Used to detect if user has scrolled
  const [scrolled, setScrolled] = useState(false);
  // Scrolled handling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`navbar-pos ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar'>
        <CustomLink to="/" className="left" onClick={() => {
          setShowElement(false);
          setScrolled(false);
          window.scrollTo(0, 0);
        }}><img src={Logo} className="logo"></img></CustomLink>
        {useDefaultLayout ? <FullSizedComponent setShowElement={setShowElement} setScrolled={setScrolled} /> : <MenuComponent setShowElement={setShowElement} showElement={showElement} />}
      </div>
      <div className="navbar-popup-links">
        <AnimatePresence initial={false}>
          {showElement && <MenuPopup setShowElement={setShowElement} setScrolled={setScrolled} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Full sized rhs items
function FullSizedComponent({ setShowElement, setScrolled }) {
  setShowElement(false);
  return (
    <div className="navbar-links">
      <CustomLink to="/about" onClick={() => {
        setScrolled(false);
        window.scrollTo(0, 0);
      }}>About Me</CustomLink>
      <CustomLink to="/projects" onClick={() => {
        setScrolled(false);
        window.scrollTo(0, 0);
      }}>Projects</CustomLink>
      <CustomLink to="/experience" onClick={() => {
        setScrolled(false);
        window.scrollTo(0, 0);
      }}>Experience</CustomLink>
      <CustomLink to="/connect" onClick={() => {
        setScrolled(false);
        window.scrollTo(0, 0);
      }}>Connect</CustomLink>
    </div >
  );
}

// Small window view rhs items
function MenuComponent({ showElement, setShowElement }) {
  return (
    <div className="navbar-menu">
      <MenuButton setShowElement={setShowElement} showElement={showElement} />
    </div>
  );
}

// Small window navigation popup menu
function MenuPopup({ setShowElement, setScrolled }) {
  return (
    <motion.div
      layout
      initial={{ maxHeight: 0, opacity: 0 }}
      animate={{ maxHeight: "21.5rem", opacity: 1 }}
      exit={{ maxHeight: 0, opacity: 0 }}
      transition={{ duration: .4, ease: "easeInOut" }}
      style={{ display: 'flex', flexDirection: 'column'}}
    >
      <CustomLink to="/about" onClick={() => {
        setShowElement(false);
        setScrolled(false);
        window.scrollTo(0, 0);
      }}>About Me</CustomLink>
      <CustomLink to="/projects" onClick={() => {
        setShowElement(false);
        setScrolled(false);
        window.scrollTo(0, 0);
      }}>Projects</CustomLink>
      <CustomLink to="/experience" onClick={() => {
        setShowElement(false);
        setScrolled(false);
        window.scrollTo(0, 0);
      }}>Experience</CustomLink>
      <CustomLink to="/connect" onClick={() => {
        setShowElement(false);
        setScrolled(false);
        window.scrollTo(0, 0);
      }}>Connect</CustomLink>
    </motion.div>
  );
}

// Small window rhs button
function MenuButton({ showElement, setShowElement }) {
  return (
    <input type="image" className="menu-button" src={MenuIcon} onClick={() => setShowElement(!showElement)} />
  );
}

// Class for links to redirect and change the class of the selected menu item
function CustomLink({ to, children, className = "", ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  const combinedClassName = className + " " + (isActive ? "active" : "")
  return (
    <Link to={to} {...props} className={combinedClassName}>
      {children}
    </Link>

  )
}

export default Navbar;