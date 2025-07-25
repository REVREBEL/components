"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BaseButtonSmall.module.css";

export function BaseButtonSmall({
  as: _Component = _Builtin.Link,
  buttonLabel = "[ Button ]",

  link = {
    href: "#",
  },

  visibility = true,
  id,
  colorStyleButtonSettings = "Normal",
}) {
  const _styleVariantMap = {
    Normal: "",
    Outline: "w-variant-94e45a2b-d9f3-fdc9-af2d-434b3a56792c",
    Inverse: "w-variant-94e45a2b-d9f3-fdc9-af2d-434b3a56792d",
  };

  const _activeStyleVariant = _styleVariantMap[colorStyleButtonSettings];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "",
        "button",
        "is-small",
        _activeStyleVariant
      )}
      button={true}
      id={id}
      block=""
      options={link}
    >
      {buttonLabel}
    </_Component>
  ) : null;
}
