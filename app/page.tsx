import FAQ from "./_components/FAQ";
import About from "./_components/about";
import Challenge from "./_components/challenge";
import Clients from "./_components/clients";
import Cta1 from "./_components/cta/cta1";
import Hero from "./_components/hero";
import Intro from "./_components/intro";
import News from "./_components/news";
import Snapshots from "./_components/snapshots";

export default function Home() {
  return (
    <div id="main">
      <Hero />
      <div id="main-content">
        <div id="main-page-content" className="content-max-width">
          <div
            className="content-row row_padding_bottom full light-section"
            data-bgcolor="#eee"
          >
            <Intro />
          </div>
          <Challenge />
          <About />
          <Snapshots />
          <div
            className="content-row row_padding_top row_padding_bottom row_padding_left row_padding_right full light-section"
            data-bgcolor="#eee"
          >
            <hr className="animated-line has-animation" />
          </div>

          <Clients />
          {/* <News /> */}
          <div
            className="content-row row_padding_top row_padding_bottom row_padding_left row_padding_right full light-section"
            data-bgcolor="#eee"
          >
            <hr className="animated-line has-animation" />
          </div>
          <FAQ />
        </div>
        <Cta1 />
      </div>
    </div>
  );
}
