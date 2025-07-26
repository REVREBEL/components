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
    Outline: "w-variant-4d1236ce-93de-56c9-f63e-7d0d5c30825b",
    Inverse: "w-variant-8e2362bd-eac1-1d1c-d91c-a298a2a37577",
    Disabled: "w-variant-62794f1a-40ee-bd9f-ffbb-a70cc12f2e24",
    "Disabled Outline": "w-variant-b6a6bca8-d10c-39e8-d567-7b2a002cec39",
    Alert: "w-variant-b717d545-13ba-f498-dd5e-da6527c37167",
    "Alert Outline": "w-variant-151d6fd7-a086-df2e-6b87-593bd26f14f0",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButtonColor];

  return buttonVisible ? (
    <_Component
      className={_utils.cx(_styles, "", "button", _activeStyleVariant)}
      button={true}
      id={buttonButtonId}
      block=""
      options={buttonButtonLink}
    >
      {buttonButtonText}
    </_Component>
  ) : null;
}
