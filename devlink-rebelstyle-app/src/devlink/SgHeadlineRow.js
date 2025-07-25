"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SgHeadlineRow.module.css";

export function SgHeadlineRow({
  as: _Component = _Builtin.Block,
  id,
  headlineHeaderTag = "h3",
  headline = "Headline",
}) {
  return (
    <_Component className={_utils.cx(_styles, "sg_heading-row")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "sg_headline-container-full")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading_3")}
          tag={headlineHeaderTag}
          id={id}
        >
          {headline}
        </_Builtin.Heading>
        <_Builtin.Paragraph>
          {"‍"}
          <br />
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
