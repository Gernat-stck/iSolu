import React from "react";
import "../styles/cardPrev.css";

export default function PreviewingCard() {
  return (
    <div className="container-cardprev">
      <div className="card-prev">
        <div className="face face1">
          <div className="content-prev">
            <i className="bi bi-pencil" style={{ color: "white" }}></i>
            <h3 classNameName="title">Design</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-prev">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
      <div className="card-prev">
        <div className="face face1">
          <div className="content-prev">
            <i className="bi bi-code" style={{ color: "white" }}></i>
            <h3 classNameName="title">Code</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-prev">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
      <div className="card-prev">
        <div className="face face1">
          <div className="content-prev">
            <i className="bi bi-rocket-takeoff" style={{ color: "white" }}></i>
            <h3 classNameName="title">Launch</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content-prev">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
