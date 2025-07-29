"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IconButton.module.css";

export function IconButton({
  as: _Component = _Builtin.Link,

  buttonLink = {
    href: "#",
  },

  buttonId,
  buttonCtaText = "[ Icon Button ] ",
  variant = "Blue",
}) {
  const _styleVariantMap = {
    Blue: "",
    "Blue Outline": "w-variant-4c9082a8-806d-65d4-9a56-e55c59ecfa49",
    Red: "w-variant-26eed880-7b77-6f53-46d4-8abd4c6e4e46",
    "Red Outline": "w-variant-6ed8b11f-15ef-8ca4-58b0-963d29b1f918",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "icon-button", _activeStyleVariant)}
      button={false}
      id={buttonId}
      block="inline"
      options={buttonLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "icon-button-flex", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "button-label-text",
            _activeStyleVariant
          )}
          tag="div"
        >
          {buttonCtaText}
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icon-button_svg", _activeStyleVariant)}
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224px%22%20viewbox%3D%220%200%2024%2024%22%20width%3D%2224px%22%20fill%3D%22currentColor%22%3E%3Cg%3E%3Cpath%20d%3D%22M0%200h24v24H0V0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M0%200h24v24H0V0z%22%20fill%3D%22none%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D%22m12%2017.27%204.15%202.51c.76.46%201.69-.22%201.49-1.08l-1.1-4.72%203.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84%200L9.19%208.63l-4.83.41c-.88.07-1.24%201.17-.57%201.75l3.67%203.18-1.1%204.72c-.2.86.73%201.54%201.49%201.08l4.15-2.5z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
