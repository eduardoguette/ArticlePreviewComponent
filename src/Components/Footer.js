import React from "react";
import "./Footer.css"
import logoTwitter from "../twitter-brands.svg"
import logoInstagram from "../instagram-brands.svg"
import logoGit from "../github-brands.svg"

export default function Footer() {
  return (
    <div className="footer">
      {/* <p>Hecho por Eduardo Guette </p> */}
      <div className="socialLogos">
        <a target="_blanck" href="https://twitter.com/eduardoguette" className="social" >
          <img src={logoTwitter} alt="twitter" />
        </a>
        <a target="_blanck" href="https://instagram.com/eduardoguette" className="social" >
          <img src={logoInstagram} alt="instagram" />
        </a>
        <a target="_blanck" href="https://github.com/eduardoguette" className="social" >
          <img src={logoGit} alt="git" />
        </a>
      </div>
    </div>
  )
}