"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BaseButton2.module.css";

export function BaseButton2({
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
    Outline: "w-variant-a2b20fa4-a8ef-ebff-7dd4-b5b6bcc9f5f1",
    Inverse: "w-variant-a2b20fa4-a8ef-ebff-7dd4-b5b6bcc9f5f2",
    Disabled: "w-variant-a2b20fa4-a8ef-ebff-7dd4-b5b6bcc9f5f3",
    "Disabled Outline": "w-variant-a2b20fa4-a8ef-ebff-7dd4-b5b6bcc9f5f4",
    Alert: "w-variant-a2b20fa4-a8ef-ebff-7dd4-b5b6bcc9f5f5",
    "Alert Outline": "w-variant-a2b20fa4-a8ef-ebff-7dd4-b5b6bcc9f5f6",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButtonColor];

  return buttonVisible ? (
    <_Component
      className={_utils.cx(_styles, "", "button-9", _activeStyleVariant)}
      button={true}
      id={buttonButtonId}
      block=""
      options={buttonButtonLink}
    >
      {buttonButtonText}
    </_Component>
  ) : null;
}
