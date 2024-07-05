import React from "react";

interface pageTitleProps {
    title: string;
    subtitle: string;
}

export default function PageTitle(props: pageTitleProps) {
  return (
    <div id="hero" className="has-image">
      <div id="hero-styles">
        <div
          id="hero-caption"
          className="content-full-width parallax-scroll-caption"
        >
          <div className="inner">
            <div className="hero-title-wrapper">
              <h1 className="hero-title">
                <span>{props.title}</span>
                <span>{props.subtitle}</span>
              </h1>
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
            <div id="info-text">Over 10 Years of Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
