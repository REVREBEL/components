"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GetInTouchMultiColor.module.css";

export function GetInTouchMultiColor({
  as: _Component = _Builtin.Link,

  buttonLink = {
    href: "#",
  },

  buttonId,
  buttonCtaText = "[ Get In Touch ]",
  backgroundColorButtonStyle = "MultiColor Background",
}) {
  const _styleVariantMap = {
    "MultiColor Background": "",
    "Multicolor Outline": "w-variant-3c1210d9-17db-fa53-98d0-3aebd743dc21",
  };

  const _activeStyleVariant = _styleVariantMap[backgroundColorButtonStyle];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "button",
        "is-big",
        "is-rebel",
        _activeStyleVariant
      )}
      button={true}
      id={buttonId}
      block=""
      options={buttonLink}
    >
      {buttonCtaText}
    </_Component>
  );
}
