import * as React from "react";

function Mouse() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 80"
      width="50"
      height="80"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "30px",
        height: "30px",
        transform: "translate3d(0px, 0px, 0px)",
        contentVisibility: "visible",
      }}
    >
      <defs>
        <clipPath id="__lottie_element_7">
          <rect width="50" height="80" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clip-path="url(#__lottie_element_7)">
        <g transform="matrix(1,0,0,1,0,0)" opacity="1"           
        style={{
            display: "block"
          }}>
          <path
            fill="rgb(255,255,255)"
            fill-opacity="1"
            d=" M25,5 C36.02799987792969,5 45,13.972000122070312 45,25 C45,25 45,55 45,55 C45,66.02799987792969 36.02799987792969,75 25,75 C13.972000122070312,75 5,66.02799987792969 5,55 C5,55 5,25 5,25 C5,13.972000122070312 13.972000122070312,5 25,5z M25,0 C25,0 25,0 25,0 C11.192999839782715,0 0,11.192999839782715 0,25 C0,25 0,55 0,55 C0,68.80699920654297 11.192999839782715,80 25,80 C38.80699920654297,80 50,68.80699920654297 50,55 C50,55 50,25 50,25 C50,11.192999839782715 38.80699920654297,0 25,0z"
          ></path>
        </g>
        <g
          transform="matrix(1,0,0,1,0,20.71192169189453)"
          opacity="1"
          style={{
            display: "block"
          }}
          className="move-up-down"
        >
          <path
            fill="rgb(255,255,255)"
            fill-opacity="1"
            d=" M30,22 C30,24.76099967956543 27.761999130249023,27 25,27 C22.23900032043457,27 20,24.76099967956543 20,22 C20,19.23900032043457 22.23900032043457,17 25,17 C27.761999130249023,17 30,19.23900032043457 30,22z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Mouse;
