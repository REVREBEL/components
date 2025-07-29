"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ColorButton2.module.css";

export function ColorButton2({
  as: _Component = _Builtin.Link,
  buttonVisible = true,
  buttonButtonId,
  buttonButtonText = "[ Button ]",

  buttonButtonLink = {
    href: "#",
  },

  buttonStyleButtonColor = "Blue",
}) {
  const _styleVariantMap = {
    Blue: "",
    "Blue Outline": "w-variant-66270fe7-797b-8fd1-dda5-8279db6384c4",
    White: "w-variant-66270fe7-797b-8fd1-dda5-8279db6384c5",
    "White Outline": "w-variant-66270fe7-797b-8fd1-dda5-8279db6384c6",
    Purple: "w-variant-66270fe7-797b-8fd1-dda5-8279db6384c7",
    "Purple Outline": "w-variant-66270fe7-797b-8fd1-dda5-8279db6384c8",
    Green: "w-variant-66270fe7-797b-8fd1-dda5-8279db6384c9",
    "Green Outline": "w-variant-66270fe7-797b-8fd1-dda5-8279db6384ca",
    Yellow: "w-variant-66270fe7-797b-8fd1-dda5-8279db6384cb",
    "Yellow Outline": "w-variant-66270fe7-797b-8fd1-dda5-8279db6384cc",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButtonColor];

  return buttonVisible ? (
    <_Component
      className={_utils.cx(_styles, "", "button-12", _activeStyleVariant)}
      button={true}
      id={buttonButtonId}
      block=""
      options={buttonButtonLink}
    >
      {buttonButtonText}
    </_Component>
  ) : null;
}
