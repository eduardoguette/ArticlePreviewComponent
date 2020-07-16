import React, { Fragment } from 'react';
import pic from "../avatar-michelle.jpg"
import facebook from "../icon-facebook.svg"
import twitter from "../icon-twitter.svg"
import pinterest from "../icon-pinterest.svg"
import './Banner.css'


export default function Banner() {
  const handleClick = e => {
    e.preventDefault();
    if (e.target.parentElement.classList.contains("Banner")) {
      e.target.parentElement.style.display = "none"
      document.querySelector('.Banner-Active').style.display = "flex";
    } else {
      e.target.parentElement.style.display = "none"
      document.querySelector('.Banner').style.display = "flex";
    }
  }

  return (
    <Fragment>
      <div className="Banner">
        <img className="pic-profile" src={pic} alt="img-profile" />
        <div className="info">
          <span className="name">Michelle Appleton</span>
          <span className="date">28 Jun 2020</span>
        </div>
        <div className="share-img" onClick={handleClick}>
        </div>
      </div>
      <div className="Banner-Active">
        <div className="text">
          SHARE
        </div>
        <div className="social">
          <a target="_blanck" href="https://www.facebook.com/sharer/sharer.php?u=https://article-component-card.vercel.app/" >
            <img src={facebook} alt="facebook" />
          </a>
          <a target="_blanck" href="https://twitter.com/intent/tweet?url=https://article-component-card.vercel.app/">
            <img src={twitter} alt="twitter" />
          </a>
          <a target="_blanck" href="https://www.pinterest.com/pin/create/button/?url=https://article-component-card.vercel.app/">
            <img src={pinterest} alt="pinterest" />
          </a>
        </div>
        <div className="share-img" onClick={handleClick}>
        </div>
      </div>
    </Fragment>
  )
}