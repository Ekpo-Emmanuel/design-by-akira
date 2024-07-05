import PageTitle from "@/app/_components/page Header/PageTitle";
import React from "react";
import Services from "./_components/services";
import Snapshots from "@/app/_components/snapshots";

export default function page() {
  return (
    <div>
      <PageTitle title="ABOUT" subtitle="OUR STUDIO" />
      <div id="hero-image-wrapper" className="change-header-color">
        <div id="hero-background-layer" className="parallax-scroll-image">
          <div
            id="hero-bg-image"
            style={{ backgroundImage: "url(images/about.jpg)" }}
          />
        </div>
      </div>
      <div id="main-content">
        <div id="main-page-content" className="content-max-width">
          <Services />
          <div
            className="content-row row_padding_top row_padding_left row_padding_right full light-section"
            data-bgcolor="#eee"
          ></div>
          <Snapshots />
        </div>
      </div>
    </div>
  );
}
