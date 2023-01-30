import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css"
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h3> Hi, My name is Aayush.</h3>
        <div className="prompt"> <p> A software developer with a passion for learning and creating.</p>
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
            <span>HTML, CSS, JS, React</span>
            </li> 
            <li className="item">
            <h2> Languages</h2>
            <span>C, C++, Python</span>
            </li> 

         </ol>
        </div>
    </div>
  );
}

export default Home;
