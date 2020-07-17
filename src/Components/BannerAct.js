/* import React, { useState } from "react"
import facebook from "../icon-facebook.svg"
import twitter from "../icon-twitter.svg"
import pinterest from "../icon-pinterest.svg"

export default function BannerAct() { // eslint-disable-next-line
  const [downBanner, upBanner] = useState(false)
  const handleClick = e => {
    e.preventDefault();
    //("Banner")) {
    //   e.target.parentElement.style.display = "none"
    //   document.querySelector('.Banner-Active').style.display = "flex";
    upBanner(true)
    console.log(downBanner)
    setTimeout(() => {
      upBanner(false)
    }, 500)
    // } else {
    //   e.target.parentElement.style.display = "none"
    // document.querySelector('.Banner').style.display = "flex";
    //}
  }
  return (
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
  )
} */