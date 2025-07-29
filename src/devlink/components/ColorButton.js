"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ColorButton.module.css";

export function ColorButton({
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
    "Blue Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb4",
    White: "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb5",
    "White Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb6",
    Purple: "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb7",
    "Purple Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb8",
    Green: "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffb9",
    "Green Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffba",
    Yellow: "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffbb",
    "Yellow Outline": "w-variant-9daaf30d-f421-1f7b-35a8-1d87babbffbc",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButtonColor];

  return buttonVisible ? (
    <_Component
      className={_utils.cx(_styles, "", "button-3", _activeStyleVariant)}
      button={true}
      id={buttonButtonId}
      block=""
      options={buttonButtonLink}
    >
      {buttonButtonText}
    </_Component>
  ) : null;
}
