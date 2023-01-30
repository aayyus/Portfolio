import React, { useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  
  const location = useLocation();//  says which route you are in
 useEffect(() =>{
  setExpandNavbar(false)

 }, [location])
 
  return (
    <div className="navbar" id={expandNavbar? "open ":"close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
          className="burger"
        >
          <div className="line">-</div>
          <div className="line">-</div>
          <div className="line">-</div>
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
