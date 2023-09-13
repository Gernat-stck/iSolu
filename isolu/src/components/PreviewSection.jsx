import React from "react";
import logo from "../img/isolulogo.svg";
import "../styles/nav.css";
import PreviewingCard from "./PreviewingCard";

export default function PreviewSection() {
  return (
    <div className="mainlogosection">
      <div class="logo">
        <img className="mainlogo" src={logo} alt="iSolution Logo" />
      </div>
      <div class="navsection nav">
        <ul className="listnav">
          <li className="list">
            <a href="#about">
              About Us
              <span className="s"></span>
              <span className="s"></span>
              <span className="s"></span>
              <span className="s"></span>
            </a>
          </li>
          <li className="list">
            <a href="#pricing">
              Pricing
              <span className="s"></span>
              <span className="s"></span>
              <span className="s"></span>
              <span className="s"></span>
            </a>
          </li>
          <li className="list">
            <a href="#contact">
              Contact Us
              <span className="s"></span>
              <span className="s"></span>
              <span className="s"></span>
              <span className="s"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="previewing">
        <PreviewingCard />
      </div>
    </div>
  );
}
