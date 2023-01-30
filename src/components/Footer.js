import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/aayyus._/?hl=en" target="blank"><InstagramIcon/></a> 
        <a href="https://www.facebook.com/aks.aayush.7" target="blank"><FacebookIcon/></a>
        <LinkedInIcon><a href=""></a></LinkedInIcon>

      </div>
      <p>portfolio.com</p>
    </div>
  );
}

export default Footer;
