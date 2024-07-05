import React from "react";
import NavItem from "./navItem";
import { navLinks } from "@/app/lib/actions";


export default function NavLinks() {
  return (
    <nav>
      <div className="nav-height">
        <div className="outer">
          <div className="inner">
            <ul data-breakpoint={1025} className="flexnav">
                {navLinks.map((item, index) => (
                    <NavItem  
                        label={item.label}
                        url={item.url}
                        key={index}
                    />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
