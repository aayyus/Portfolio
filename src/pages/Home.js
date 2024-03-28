import React,{useState, useEffect} from 'react';
import {motion}  from 'framer-motion';


import "../styles/Home.css"


function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const updateMousePosition = debounce((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, 10);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: 'difference'
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    
    <div className="home">
    
    <motion.div
          className='cursor'
          variants={variants}
          animate={cursorVariant}
        />

      <div className="about">
        <h3 className='name' onMouseEnter={textEnter} onMouseLeave={textLeave}> Hi, My name is Aayush.</h3>
        <div className="prompt"> <p> A web developer with a passion for learning and creating.</p>
          {/* <LinkedInIcon/>
<FacebookIcon/>
<InstagramIcon/> */}
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML, CSS, JS, React, Next Js, minimals, Angular</span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>C, C++, Python, firebase, wordpress, appwrite, PHP, SQL</span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home;
