import React from "react";
import Link from "next/link";

export default function Challenge() {
  return (
    <div
      className="content-row row_padding_left row_padding_right full light-section fadeout-element"
      data-bgcolor="#eee"
    >
      <hr />
      <h1 className="text-align-center">
        We help{" "}
        <span
          className="has-hover-image hide-ball"
          data-img="images/studio01.jpg"
        >
          businesses
        </span>{" "}
        to innovate and remain highly relevant to their{" "}
        <span
          className="has-hover-image hide-ball"
          data-img="images/studio02.jpg"
        >
          customers
        </span>{" "}
        by developing edge digital products
      </h1>
      <hr />
      <hr />
      <div className="one_half" />
      <div className="one_half last">
        <h5 className="has-mask-fill">The Challenge</h5>
        <p className="has-animation" data-delay={0}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum.
        </p>
        <hr />
        <h5 className="has-mask-fill">The Approach</h5>
        <p className="has-animation" data-delay={100}>
          You need to be sure there isn't anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet tend to
          repeat predefined chunks as necessary, making this the first true
          generator on the Internet. It uses a dictionary with Latin words.
        </p>
      </div>
      <div className="one_half">
        <div className="button-wrap right">
          <div className="icon-wrap parallax-wrap">
            <div className="button-icon parallax-element">
              <i className="arrow-icon-down" />
            </div>
          </div>
          <Link
            className="ajax-link"
            data-type="page-transition"
            href="/about-us"
          >
            <div className="button-text sticky right">
              <span data-hover="Read About Us">Read About Us</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="one_half last" />
      <hr />
    </div>
  );
}
