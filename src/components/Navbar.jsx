import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Logo from "../assets/logotrimmed.png"
import { useEffect, useState } from "react"
import MenuIcon from "../assets/menuIcon.svg"


function Navbar() {
  const [showElement, setShowElement] = useState(false);
  const MIN_DEFAULT_WIDTH = 652;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [useDefaultLayout, setUseDefaultLayout] = useState(window.innerWidth >= MIN_DEFAULT_WIDTH);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width)
      console.log(width)
      setUseDefaultLayout(width >= MIN_DEFAULT_WIDTH)
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [scrolled, setScrolled] = useState(false);
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
          <CustomLink to="/" className="left"><img src={Logo} className="logo"></img></CustomLink>
          {useDefaultLayout ? <FullSizedComponent setShowElement={setShowElement} setScrolled={setScrolled}/> : <MenuComponent setShowElement={setShowElement} showElement={showElement}/>}
      </div>
      <div  className='navbar-popup-links'>
        {showElement ? <MenuPopup setShowElement={setShowElement} setScrolled={setScrolled}/> : <></>}
      </div>
    </div>
  );
}

function FullSizedComponent({setShowElement, setScrolled}){
  setShowElement(false);
  return(
    <div className="navbar-links">
        <CustomLink to="/about" onClick={()=>{
          setScrolled(false);
          window.scrollTo(0,0);
        }}>About Me</CustomLink>
        <CustomLink to="/projects" onClick={()=>{
          setScrolled(false);
          window.scrollTo(0,0);
        }}>Projects</CustomLink>
        <CustomLink to="/experience" onClick={()=>{
          setScrolled(false);
          window.scrollTo(0,0);
        }}>Experience</CustomLink>
        <CustomLink to="/links" onClick={()=>{
          setScrolled(false);
          window.scrollTo(0,0);
        }}>Links</CustomLink>
    </div>
  );
}

function MenuComponent({showElement, setShowElement}){
  return(
      <div className="navbar-menu">
        <MenuButton setShowElement={setShowElement} showElement={showElement}/>
      </div>
  );
}

function MenuPopup({setShowElement, setScrolled}){
  return(
    <>
        <CustomLink to="/about" onClick={() => { 
          setShowElement(false);
          setScrolled(false);
          window.scrollTo(0,0);
        }}>About Me</CustomLink>
        <CustomLink to="/projects" onClick={() => { 
          setShowElement(false);
          setScrolled(false);
          window.scrollTo(0,0);
        }}>Projects</CustomLink>
        <CustomLink to="/experience" onClick={() => { 
          setShowElement(false);
          setScrolled(false);
          window.scrollTo(0,0);
        }}>Experience</CustomLink>
        <CustomLink to="/links" onClick={() =>{ 
          setShowElement(false);
          setScrolled(false);
          window.scrollTo(0,0);
        }}>Links</CustomLink>
    </>
  );
}

function MenuButton({showElement, setShowElement}){
  return(
    <input type="image" className="menu-button" src={MenuIcon} onClick={() => setShowElement(!showElement)}/>
  );
}

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