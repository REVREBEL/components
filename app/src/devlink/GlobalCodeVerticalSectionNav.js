"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GlobalCodeVerticalSectionNav.module.css";

export function GlobalCodeVerticalSectionNav({
  as: _Component = _Builtin.HtmlEmbed,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "fancy-vertical-section-navigation-with-active-styles--custom-global-css"
      )}
      value="%3Cstyle%3E%0A%0A%20%20*%20%7B%0A%20%20%20%20-webkit-font-smoothing%3A%20antialiased%3B%0A%20%20%7D%0A%0A%2F*%20Fluid%20Design%20for%20Desktop%20Breakpoint%20*%2F%0A%20%20html%20%7B%20font-size%3A%201.0625rem%3B%20%7D%0A%20%20%40media%20screen%20and%20(max-width%3A120em)%20%7B%20html%20%7B%20font-size%3A%20calc(0.3171583850931675rem%20%2B%200.6211180124223604vw)%3B%20%7D%20%7D%0A%20%20%40media%20screen%20and%20(max-width%3A110em)%20%7B%20html%20%7B%20font-size%3A%20calc(0.2833279009126467rem%20%2B%200.651890482398957vw)%3B%20%7D%20%7D%0A%20%20%40media%20screen%20and%20(max-width%3A991px)%20%7B%20html%20%7B%20font-size%3A%201rem%3B%20%7D%20%7D%0A%0A%3C%2Fstyle%3E"
    />
  );
}
