import React, { useState } from "react";
import pic from "../avatar-michelle.jpg";

import "./Banner.css";
import facebook from "../icon-facebook.svg";
import twitter from "../icon-twitter.svg";
import pinterest from "../icon-pinterest.svg";
import TextInfo from "./TextInfo";
import DialogShare from "./DialogShare";

export default function Banner() {
  // eslint-disable-next-line
  const [downBanner, upBanner] = useState(false); // eslint-disable-next-line
  const [displayDialog, setDialog] = useState(false);
  const handleClick = () => {
    if (downBanner && window.innerWidth < 720) {
      upBanner(false);
    } else if (window.innerWidth < 720) {
      upBanner(true);
    } else {
      upBanner(false);
    }
  };

  const handleClickShare = (e) => {
    document.querySelector('.share-img').classList.toggle('active')
    if (displayDialog) {
      setDialog(false);
      e.preventDefault()
    } else {
      setDialog(true);
    }
  };
  // eslint-disable-next-line
  const [resize, setRisize] = useState(true);
  window.addEventListener("resize", () => {
    setRisize(true);
    upBanner(false);
  });
  const handleEvents = (e) => {
    if (window.innerWidth >= 720) {
      handleClickShare(e);
    } else {
      handleClick();
    }
  };
  return (
    <div className="sec-2">
      <TextInfo />
      {downBanner ? (
        <div className="Banner-Active">
          <div className="text">SHARE</div>
          <div className="social">
            <a target="_blanck" href="https://www.facebook.com/sharer/sharer.php?u=https://article-component-card.vercel.app/">
              <img src={facebook} alt="facebook" />
            </a>
            <a target="_blanck" href="https://twitter.com/intent/tweet?url=https://article-component-card.vercel.app/">
              <img src={twitter} alt="twitter" />
            </a>
            <a target="_blanck" href="https://www.pinterest.com/pin/create/button/?url=https://article-component-card.vercel.app/">
              <img src={pinterest} alt="pinterest" />
            </a>
          </div>
          <div className="share-img" onClick={handleClick}></div>
        </div>
      ) : (
        <div className="Banner">
          <img className="pic-profile" src={pic} alt="img-profile" />
          <div className="info">
            <span className="name">Michelle Appleton</span>
            <span className="date">28 Jun 2020</span>
          </div>
          <div className="share-img" onClick={handleEvents}></div>
          {displayDialog ? <DialogShare /> : console.log("down")}
        </div>
      )}
    </div>
  );
}
