"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BaseButtonBig.module.css";

export function BaseButtonBig({
  as: _Component = _Builtin.Link,
  colorStyleButtonSettings = "Normal",
  id,
  visibility = true,

  link = {
    href: "#",
  },

  buttonLabel = "[ Big ]",
}) {
  const _styleVariantMap = {
    Normal: "",
    Outline: "w-variant-bd80cf00-417f-11de-9770-26645f0192ef",
    Inverse: "w-variant-bd80cf00-417f-11de-9770-26645f0192f0",
  };

  const _activeStyleVariant = _styleVariantMap[colorStyleButtonSettings];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "",
        "button",
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
