import React from "react";

export default function FAQ() {
  return (
    <div
      className="content-row row_padding_left row_padding_right full light-section"
      data-bgcolor="#eee"
    >
      <div className="one_third">
        <h6 className="has-mask-fill">FAQ's</h6>
        <h5>Got questions?</h5>
      </div>
      <div className="two_third last">
        <dl className="accordion has-animation">
          <dt>
            <span className="link">Friendly Support</span>
            <div className="acc-icon-wrap parallax-wrap">
              <div className="acc-button-icon parallax-element">
                <i className="fa fa-arrow-right" />
              </div>
            </div>
          </dt>
          <dd className="accordion-content">
            We will be with you every step of the way. It’s a promise!
          </dd>
          <dt>
            <span className="link">Money Back</span>
            <div className="acc-icon-wrap parallax-wrap">
              <div className="acc-button-icon parallax-element">
                <i className="fa fa-arrow-right" />
              </div>
            </div>
          </dt>
          <dd className="accordion-content">
            If you don’t like our theme, we will refund all your money back.
          </dd>
          <dt>
            <span className="link">Premium Quality</span>
            <div className="acc-icon-wrap parallax-wrap">
              <div className="acc-button-icon parallax-element">
                <i className="fa fa-arrow-right" />
              </div>
            </div>
          </dt>
          <dd className="accordion-content">
            All Themes are made by Envato Elite Author - ClaPat
          </dd>
          <dt>
            <span className="link">Custom Work</span>
            <div className="acc-icon-wrap parallax-wrap">
              <div className="acc-button-icon parallax-element">
                <i className="fa fa-arrow-right" />
              </div>
            </div>
          </dt>
          <dd className="accordion-content">
            Send us a message with everything you need to customize.
          </dd>
        </dl>
      </div>
    </div>
  );
}
