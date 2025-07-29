"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BaseButton.module.css";

export function BaseButton({
  as: _Component = _Builtin.Link,
  buttonVisible = true,
  buttonButtonId,

  buttonButtonLink = {
    href: "#",
  },

  buttonButtonText = "[ Button ]",
  buttonStyleButtonColor = "Normal",
}) {
  const _styleVariantMap = {
    Normal: "",
    Outline: "w-variant-83321cf1-df78-b00f-beab-cb8ed6432c60",
    Inverse: "w-variant-83321cf1-df78-b00f-beab-cb8ed6432c61",
    Disabled: "w-variant-83321cf1-df78-b00f-beab-cb8ed6432c62",
    "Disabled Outline": "w-variant-83321cf1-df78-b00f-beab-cb8ed6432c63",
    Alert: "w-variant-83321cf1-df78-b00f-beab-cb8ed6432c64",
    "Alert Outline": "w-variant-83321cf1-df78-b00f-beab-cb8ed6432c65",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButtonColor];

  return buttonVisible ? (
    <_Component
      className={_utils.cx(_styles, "", "button-6", _activeStyleVariant)}
      button={true}
      id={buttonButtonId}
      block=""
      options={buttonButtonLink}
    >
      {buttonButtonText}
    </_Component>
  ) : null;
}
