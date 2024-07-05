import React from "react";
import Link from "next/link";

export default function News() {
  return (
    <>
      <div
        className="content-row row_padding_top row_padding_left row_padding_right full light-section"
        data-bgcolor="#eee"
      >
        <h6>/ Get Informed</h6>
        <hr />
        <h1 className="big-title1 has-mask-fill no-margins">Read</h1>
        <h1 className="big-title1 has-mask-fill no-margins">All News</h1>
        <hr />
        <hr />
      </div>
      {/*/Row */}
      {/* Row */}
      <div
        className="content-row row_padding_left row_padding_right full light-section"
        data-bgcolor="#eee"
      >
        <article className="post">
          <div className="article-wrap">
            <div className="hover-reveal">
              <div className="hover-reveal__inner">
                <div className="hover-reveal__img">
                  <img src="images/news01.jpg" alt="Post Image" />
                </div>
              </div>
            </div>
            <Link
              className="post-title ajax-link has-mask-fill"
              href="index.html"
              data-type="page-transition"
              data-color="#000"
            >
              Collection of Work
            </Link>
          </div>
          <div className="article-content">
            <div className="entry-meta-wrap">
              <div className="entry-meta entry-categories">
                <ul className="post-categories">
                  <li className="link">
                    <Link
                      className="ajax-link"
                      href="index.html"
                      data-type="page-transition"
                    >
                      <span data-hover="Intern">Intern</span>
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      className="ajax-link"
                      href="index.html"
                      data-type="page-transition"
                    >
                      <span data-hover="Projects">Projects</span>
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      className="ajax-link"
                      href="index.html"
                      data-type="page-transition"
                    >
                      <span data-hover="Agency">Agency</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="entry-meta-wrap">
              <ul className="entry-meta entry-date">
                <li className="link">
                  <Link
                    className="ajax-link"
                    href="index.html"
                    data-type="page-transition"
                  >
                    <span data-hover="March 14, 2022">March 14, 2022</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="post">
          <div className="article-wrap">
            <div className="hover-reveal">
              <div className="hover-reveal__inner">
                <div className="hover-reveal__img">
                  <img src="images/news02.jpg" alt="Post Image" />
                </div>
              </div>
            </div>
            <Link
              className="post-title ajax-link has-mask-fill"
              href="index.html"
              data-type="page-transition"
              data-color="#000"
            >
              Site of the year
            </Link>
          </div>
          <div className="article-content">
            <div className="entry-meta-wrap">
              <div className="entry-meta entry-categories">
                <ul className="post-categories">
                  <li className="link">
                    <Link
                      className="ajax-link"
                      href="index.html"
                      data-type="page-transition"
                    >
                      <span data-hover="Intern">Intern</span>
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      className="ajax-link"
                      href="index.html"
                      data-type="page-transition"
                    >
                      <span data-hover="Projects">Projects</span>
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      className="ajax-link"
                      href="index.html"
                      data-type="page-transition"
                    >
                      <span data-hover="Agency">Agency</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="entry-meta-wrap">
              <ul className="entry-meta entry-date">
                <li className="link">
                  <Link
                    className="ajax-link"
                    href="index.html"
                    data-type="page-transition"
                  >
                    <span data-hover="March 14, 2022">March 14, 2022</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="post">
          <div className="article-wrap">
            <div className="hover-reveal">
              <div className="hover-reveal__inner">
                <div className="hover-reveal__img">
                  <img src="images/news03.jpg" alt="Post Image" />
                </div>
              </div>
            </div>
            <Link
              className="post-title ajax-link has-mask-fill"
              href="index.html"
              data-type="page-transition"
              data-color="#000"
            >
              The procces of design
            </Link>
          </div>
          <div className="article-content">
            <div className="entry-meta-wrap">
              <div className="entry-meta entry-categories">
                <ul className="post-categories">
                  <li className="link">
                    <Link
                      className="ajax-link"
                      href="index.html"
                      data-type="page-transition"
                    >
                      <span data-hover="Intern">Intern</span>
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      className="ajax-link"
                      href="index.html"
                      data-type="page-transition"
                    >
                      <span data-hover="Projects">Projects</span>
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      className="ajax-link"
                      href="index.html"
                      data-type="page-transition"
                    >
                      <span data-hover="Agency">Agency</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="entry-meta-wrap">
              <ul className="entry-meta entry-date">
                <li className="link">
                  <Link
                    className="ajax-link"
                    href="index.html"
                    data-type="page-transition"
                  >
                    <span data-hover="March 14, 2022">March 14, 2022</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <div className="two_fifth">
          <hr />
          <hr />
          <h5 className="has-mask">
            We help businesses to innovate and remain highly relevant to their
            customers only by developing digital creative products.
          </h5>
          <br />
          <div className="button-box has-animation" data-delay={100}>
            <div className="clapat-button-wrap parallax-wrap hide-ball">
              <div className="clapat-button parallax-element">
                <div className="button-border rounded parallax-element-second">
                  <Link
                    className="ajax-link"
                    href="index.html"
                    data-type="page-transition"
                  >
                    <span data-hover="READ BLOG">READ BLOG</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="three_fifth last" />
      </div>
    </>
  );
}
