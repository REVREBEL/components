"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BaseButtonBig2.module.css";

export function BaseButtonBig2({
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
    Outline: "w-variant-6efe114a-37dd-5471-b8cb-5dabbe562f29",
    Inverse: "w-variant-6efe114a-37dd-5471-b8cb-5dabbe562f2a",
  };

  const _activeStyleVariant = _styleVariantMap[colorStyleButtonSettings];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "",
        "button-10",
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
