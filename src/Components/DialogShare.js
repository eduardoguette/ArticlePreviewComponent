import React from "react";
import "./DialogShare.css";
import facebook from "../icon-facebook.svg";
import twitter from "../icon-twitter.svg";
import pinterest from "../icon-pinterest.svg";

export default function DialogShare() {
  return (
    <div className="container-dialog">
      <span>SHARE</span>
      <img  src={facebook} alt="facebook"/>
      <img  src={twitter} alt="twitter"/>
      <img  src={pinterest} alt="pinterest"/>
    </div>
  );
}
