import React from "react";
import Link from "next/link";

export default function Cta1() {
  return (
    <div id="page-nav">
      <div className="page-nav-wrap">
        <div className="page-nav-caption content-full-width block-title marquee-title">
          <div className="inner">
            <Link
              className="page-title next-ajax-link-page"
              data-type="page-transition"
              data-firstline="Next"
              data-secondline="Page"
              href="/about-us"
            >
              <div className="next-hero-title-wrapper">
                <div className="next-hero-title">
                  <span>Creative</span> <span>Studio Desgin</span>
                </div>
              </div>
            </Link>
            <div className="next-hero-subtitle-wrapper">
              <div className="next-hero-subtitle">
                <span>We would love to hear from you.</span>
                <span>Let’s work together</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
