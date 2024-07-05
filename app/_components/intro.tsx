import React from "react";
import Link from "next/link";

export default function Intro() {
  return (
    <div id="itemsWrapperLinks">
      <div id="itemsWrapper" className="webgl-fitthumbs fx-three">
        <div className="portfolio-wrap flex-grid content-full-width fade-scaleout-effect">
          <div className="portfolio">
            <div
              className="item wide trigger-item branding design"
              data-color="#de2606"
            >
              <div className="item-parallax">
                <div className="item-appear">
                  <div className="item-content">
                    <Link
                      className="item-wrap ajax-link-project"
                      data-type="page-transition"
                      href="project01.html"
                    />
                    <div className="item-wrap-image">
                      <img
                        src="images/01hero.jpg"
                        className="item-image grid__item-img trigger-item-link"
                        alt=""
                      />
                    </div>
                    <img
                      className="grid__item-img grid__item-img--large"
                      src="images/01hero.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="item-caption-wrapper">
                  <div className="item-caption">
                    <div className="item-title">
                      <span>London Royal Theatre</span>
                    </div>
                    <div className="item-cat">
                      <span data-hover="View Case">Brand Identity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item trigger-item design photo"
              data-color="#462883"
            >
              <div className="item-parallax">
                <div className="item-appear">
                  <div className="item-content">
                    <Link
                      className="item-wrap ajax-link-project"
                      data-type="page-transition"
                      href="project03.html"
                    />
                    <div className="item-wrap-image">
                      <img
                        src="images/03hero.jpg"
                        className="item-image grid__item-img trigger-item-link"
                        alt=""
                      />
                    </div>
                    <img
                      className="grid__item-img grid__item-img--large"
                      src="images/03hero.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="item-caption-wrapper">
                  <div className="item-caption">
                    <div className="item-title">
                      <span>Moon Purple Dust</span>
                    </div>
                    <div className="item-cat">
                      <span data-hover="View Case">Photography</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item wide trigger-item video" data-color="#000">
              <div className="item-parallax">
                <div className="item-appear">
                  <div className="item-content">
                    <Link
                      className="item-wrap ajax-link-project"
                      data-type="page-transition"
                      href="project04.html"
                    />
                    <div className="item-wrap-image">
                      <img
                        src="images/04hero.jpg"
                        className="item-image grid__item-img trigger-item-link"
                        alt=""
                      />
                    </div>
                    <img
                      className="grid__item-img grid__item-img--large"
                      src="images/04hero.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="item-caption-wrapper">
                  <div className="item-caption">
                    <div className="item-title">
                      <span>Hotel Room</span>
                    </div>
                    <div className="item-cat">
                      <span data-hover="View Case">Video</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item wide trigger-item photo" data-color="#70261b">
              <div className="item-parallax">
                <div className="item-appear">
                  <div className="item-content">
                    <Link
                      className="item-wrap ajax-link-project"
                      data-type="page-transition"
                      href="project05.html"
                    />
                    <div className="item-wrap-image">
                      <img
                        src="images/05hero.jpg"
                        className="item-image grid__item-img trigger-item-link"
                        alt=""
                      />
                      <div className="hero-video-wrapper">
                        <video  className="bgvid">
                          <source
                            src="https://keepgrading.cdn.prismic.io/keepgrading/4cc5e758-b802-4063-9790-dd5dd278f346_G2_MP.mp4"
                            type="video/mp4"
                          />
                          <source
                            src="https://keepgrading.cdn.prismic.io/keepgrading/ba4f9e29-6acc-4993-9ce3-8eb9261f414b_G2_WEBM.webm"
                            type="video/webm"
                          />
                        </video>
                      </div>
                    </div>
                    <img
                      className="grid__item-img grid__item-img--large"
                      src="images/05hero.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="item-caption-wrapper">
                  <div className="item-caption">
                    <div className="item-title">
                      <span>Opulence Cosmetics</span>
                    </div>
                    <div className="item-cat">
                      <span data-hover="View Case">Photography</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
