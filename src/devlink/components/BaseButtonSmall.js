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
    Outline: "w-variant-0c8ca6dd-5aeb-bc9c-8576-fa16fb400d30",
    Inverse: "w-variant-0c8ca6dd-5aeb-bc9c-8576-fa16fb400d31",
  };

  const _activeStyleVariant = _styleVariantMap[colorStyleButtonSettings];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "",
        "button-4",
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
