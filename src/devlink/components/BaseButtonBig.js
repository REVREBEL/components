"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BaseButtonBig.module.css";

export function BaseButtonBig({
  as: _Component = _Builtin.Link,
  id,
  visibility = true,

  link = {
    href: "#",
  },

  buttonLabel = "[ Big ]",
  colorStyleButtonSettings = "Normal",
}) {
  const _styleVariantMap = {
    Normal: "",
    Outline: "w-variant-340422ef-294a-fa5e-e218-78ff4f52b964",
    Inverse: "w-variant-340422ef-294a-fa5e-e218-78ff4f52b965",
  };

  const _activeStyleVariant = _styleVariantMap[colorStyleButtonSettings];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "",
        "button-5",
        "is-big",
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
