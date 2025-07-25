"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PageLayoutTemplate.module.css";

export function PageLayoutTemplate({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="main">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "section",
            "margin-top_none",
            "padding-top_none"
          )}
          tag="section"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "page-padding",
              "padding-left_none",
              "padding-top_none",
              "padding-right_none"
            )}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
