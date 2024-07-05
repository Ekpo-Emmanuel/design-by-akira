import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="classic-menu invert-header" data-menucolor="#171717">
      <div id="header-container">
        <div id="logo" className="hide-ball">
          <Link
            className="ajax-link"
            data-type="page-transition"
            href="index.html"
          >
            <img
              className="black-logo"
              src="images/logo.png"
              alt="ClaPat Logo"
            />
            <img
              className="white-logo"
              src="images/logo-white.png"
              alt="ClaPat Logo"
            />
          </Link>
        </div>
        <nav>
          <div className="nav-height">
            <div className="outer">
              <div className="inner">
                <ul data-breakpoint={1025} className="flexnav">
                <li className="link menu-timeline">
                    <Link
                      className="ajax-link"
                      data-type="page-transition"
                      href="/about-us"
                    >
                      <div className="before-span">
                        <span data-hover="Contact">Contact</span>
                      </div>
                    </Link>
                  </li>
                  {/* <li className="link menu-timeline">
                    <Link className="active" href="/">
                      <div className="before-span">
                        <span data-hover="Home">Home</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <Link className="" href="#">
                      <div className="before-span">
                        <span data-hover="Portfolio">Portfolio</span>
                      </div>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className="ajax-link"
                          href="portfolio-metro-grid.html"
                          data-type="page-transition"
                        >
                          Spaced Metro
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="ajax-link"
                          href="portfolio-parallax-grid.html"
                          data-type="page-transition"
                        >
                          Random Parallax
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="ajax-link"
                          href="portfolio-ladder-grid.html"
                          data-type="page-transition"
                        >
                          Ladder Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="ajax-link"
                          href="portfolio-scaleout-grid.html"
                          data-type="page-transition"
                        >
                          Scaleout Thirds
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="ajax-link"
                          href="portfolio-classic-grid.html"
                          data-type="page-transition"
                        >
                          Classic Duo
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="ajax-link"
                          href="portfolio-mixed-grid.html"
                          data-type="page-transition"
                        >
                          Mixed Grid
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="link menu-timeline">
                    <Link
                      className="ajax-link"
                      data-type="page-transition"
                      href="/about-us"
                    >
                      <div className="before-span">
                        <span data-hover="About">About</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <Link
                      className="ajax-link"
                      data-type="page-transition"
                      href="contact.html"
                    >
                      <div className="before-span">
                        <span data-hover="Contact">Contact</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <Link className="" href="#">
                      <div className="before-span">
                        <span data-hover="More">More</span>
                      </div>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className="ajax-link"
                          href="typography.html"
                          data-type="page-transition"
                        >
                          Typography
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="ajax-link"
                          href="multimedia.html"
                          data-type="page-transition"
                        >
                          Multimedia
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="ajax-link"
                          href="shortcodes.html"
                          data-type="page-transition"
                        >
                          Shortcodes
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/*/Navigation */}
        {/* Menu Burger */}
        <div className="button-wrap right menu burger-lines">
          <div className="icon-wrap parallax-wrap">
            <div className="button-icon parallax-element">
              <div id="burger-wrapper">
                <div id="menu-burger">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
          <div className="button-text sticky right">
            <span data-hover="Menu">Menu</span>
          </div>
        </div>
        {/*/Menu Burger */}
      </div>
    </header>
  );
}
