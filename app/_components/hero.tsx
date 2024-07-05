import React from "react";

export default function Hero() {
  return (
    <div id="hero">
      <div id="hero-styles">
        <div
          id="hero-caption"
          className="content-full-width parallax-scroll-caption indent-title"
        >
          <div className="inner">
            <div className="hero-title-wrapper">
              <h1 className="hero-title">
                <span>Digital</span>
                <span>Creative</span>
                <span>Studio</span>
              </h1>
            </div>
            <div className="hero-subtitle-wrapper">
              <h5 className="hero-subtitle">
                <span>
                  Just a design and strategy agency with an adaptive approach to
                  problem solving.
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div id="hero-footer">
          <div className="hero-footer-left">
            <div className="button-wrap right scroll-down">
              <div className="icon-wrap parallax-wrap">
                <div className="button-icon parallax-element">
                  <i className="arrow-icon-down" />
                </div>
              </div>
              <div className="button-text sticky right">
                <span data-hover="Scroll to Explore">Scroll to Explore</span>
              </div>
            </div>
          </div>
          <div className="hero-footer-right">
            <div id="info-text">Selected Case Studies (04)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
