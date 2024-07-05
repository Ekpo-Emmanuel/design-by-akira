import React from "react";

export default function About() {
  return (
    <div
      className="content-row full dark-section change-header-color"
      data-bgcolor="#eee"
    >
      <figure className="has-parallax has-parallax-content" data-delay={100}>
        <img src="images/about.jpg" alt="Image Title" />
        <div className="parallax-image-content content-max-width text-align-center">
          <div className="outer">
            <div className="inner">
              <h3 className="has-mask-fill no-margins">
                Awarded international
              </h3>
              <h3 className="has-mask-fill">Digital Studio</h3>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
