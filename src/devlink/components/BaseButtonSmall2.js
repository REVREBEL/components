"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BaseButtonSmall2.module.css";

export function BaseButtonSmall2({
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
    Outline: "w-variant-71bb0163-2127-d545-b10e-b8ec61422562",
    Inverse: "w-variant-71bb0163-2127-d545-b10e-b8ec61422563",
  };

  const _activeStyleVariant = _styleVariantMap[colorStyleButtonSettings];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "",
        "button-11",
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
