import React from "react";

export default function Preloader() {
  return (
    <div
      className="preloader-wrap"
      data-firstline="Stay"
      data-secondline="Relaxed"
    >
      <div className="outer">
        <div className="inner">
          <div className="trackbar">
            <ul className="preloader-intro">
              <li className="preloader-list">bold</li>
              <li className="preloader-list">brave</li>
              <li className="preloader-list">iconic</li>
              <li className="preloader-list">simple</li>
              <li className="preloader-list">louder</li>
            </ul>
            <div className="loadbar" />
          </div>
          <div className="percentage-wrapper">
            <div className="percentage" id="precent" />
          </div>
          <div className="percentage-intro">Please Wait</div>
        </div>
      </div>
    </div>
  );
}
