import React from "react";

export default function Clients() {
  return (
    <div
      className="content-row row_padding_left row_padding_right full light-section"
      data-bgcolor="#eee"
    >
      <div className="one_third">
        <h5>Trusted By</h5>
      </div>
      <div className="two_third last">
        {/* Clients Table */}
        <ul className="clients-table has-animation" data-delay={10}>
          <li className="link has-animation">
            <img src="images/client-01-black.png" alt="client" />
          </li>
          <li className="link has-animation">
            <img src="images/client-02-black.png" alt="client" />
          </li>
          <li className="link has-animation">
            <img src="images/client-03-black.png" alt="client" />
          </li>
          <li className="link has-animation">
            <img src="images/client-04-black.png" alt="client" />
          </li>
          <li className="link has-animation">
            <img src="images/client-05-black.png" alt="client" />
          </li>
          <li className="link has-animation">
            <img src="images/client-06-black.png" alt="client" />
          </li>
          <li className="link has-animation">
            <img src="images/client-07-black.png" alt="client" />
          </li>
          <li className="link has-animation">
            <img src="images/client-08-black.png" alt="client" />
          </li>
          <li className="link has-animation">
            <img src="images/client-01-black.png" alt="client" />
          </li>
          <li className="link has-animation">
            <img src="images/client-02-black.png" alt="client" />
          </li>
        </ul>
        {/*/Clients Table */}
      </div>
    </div>
  );
}
