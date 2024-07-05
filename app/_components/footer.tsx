import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hidden">
      <div id="footer-container">
        <div id="backtotop" className="button-wrap left">
          <div className="icon-wrap parallax-wrap">
            <div className="button-icon parallax-element">
              <i className="arrow-icon-up" />
            </div>
          </div>
          <div className="button-text sticky left">
            <span data-hover="Back Top">Back Top</span>
          </div>
        </div>
        <div className="footer-middle">
          <div className="copyright">
            <Link className="link" target="_blank" href="https://www.clapat.com/">
              ClaPat Themes
            </Link>{" "}
            © 2022
          </div>
        </div>
        <div className="socials-wrap">
          <div className="socials-icon">
            <i className="fa-solid fa-share-nodes" />
          </div>
          <div className="socials-text">Follow Us</div>
          <ul className="socials">
            <li>
              <span className="parallax-wrap">
                <Link
                  className="parallax-element"
                  href="https://www.dribbble.com/clapat"
                  target="_blank"
                >
                  Db
                </Link>
              </span>
            </li>
            <li>
              <span className="parallax-wrap">
                <Link
                  className="parallax-element"
                  href="https://www.twitter.com/clapatdesign"
                  target="_blank"
                >
                  Tw
                </Link>
              </span>
            </li>
            <li>
              <span className="parallax-wrap">
                <Link
                  className="parallax-element"
                  href="https://www.behance.com/clapat"
                  target="_blank"
                >
                  Be
                </Link>
              </span>
            </li>
            <li>
              <span className="parallax-wrap">
                <Link
                  className="parallax-element"
                  href="https://www.facebook.com/clapat.ro"
                  target="_blank"
                >
                  Fb
                </Link>
              </span>
            </li>
            <li>
              <span className="parallax-wrap">
                <Link
                  className="parallax-element"
                  href="https://www.instagram.com/clapat.themes/"
                >
                  In
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
