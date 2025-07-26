"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SgSubHeadlineRow.module.css";

export function SgSubHeadlineRow({
  as: _Component = _Builtin.Block,
  subheadline = "Subheadline",
  id,
  subheadlineHeaderTag = "h4",
}) {
  return (
    <_Component className={_utils.cx(_styles, "sg_heading-row")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "sg_headline-container")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "headline_h5", "text-color-green")}
          tag={subheadlineHeaderTag}
          id={id}
        >
          {subheadline}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "sg_divider-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_divider-half", "color-green")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
