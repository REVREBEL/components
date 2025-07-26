"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SgSectionHeadline.module.css";

export function SgSectionHeadline({
  as: _Component = _Builtin.Block,
  id,
  sectionHeadlineHeaderTag = "h2",
  sectionHeadline = "Section Headline",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sg_headline-container", "sg_sticky")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "sg_section_headline-right")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "sg_section-headline")}
          tag={sectionHeadlineHeaderTag}
          id={id}
        >
          {sectionHeadline}
        </_Builtin.Heading>
      </_Builtin.Block>
    </_Component>
  );
}
