"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ColorButton.module.css";

export function ColorButton({
  as: _Component = _Builtin.Link,
  buttonVisible = true,
  buttonButtonId,
  buttonButtonText = "[ Button ]",

  buttonButtonLink = {
    href: "#",
  },

  buttonStyleButtonColor = "Blue",
}) {
  const _styleVariantMap = {
    Blue: "",
    "Blue Outline": "w-variant-9f44208c-7570-fd7f-ab8a-12aa1587af9b",
    White: "w-variant-45311939-ddbb-cb9e-62eb-620f26e4e2e8",
    "White Outline": "w-variant-dd184745-a6e1-bb77-e5d7-898cec00c8e1",
    Purple: "w-variant-47d3d27e-d614-2aa1-fd05-e569ea0c2154",
    "Purple Outline": "w-variant-943b5b38-6359-2326-449c-2adbfa81a392",
    Green: "w-variant-6bb44129-bda0-8e03-1ce4-56e9cfbd06a6",
    "Green Outline": "w-variant-6322a7d1-307e-9596-2506-5859adbcb64e",
    Yellow: "w-variant-bf977b0c-6b8a-823d-bf29-3bdeb54534cd",
    "Yellow Outline": "w-variant-808f227b-de48-84c6-a37b-eab113ec72af",
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
