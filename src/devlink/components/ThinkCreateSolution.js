"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ThinkCreateSolution.module.css";

export function ThinkCreateSolution({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "think-create-solution")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "tcs-headline-wrapper")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "think-heading-text")}
          tag="h1"
        >
          {"Think."}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(_styles, "create-heading-text")}
          tag="h1"
        >
          {"CREATE."}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(_styles, "solution-heading-text")}
          tag="h1"
        >
          {"SOlution."}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "tcs-headline-wrapper", "gradient")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "think-heading-text-behind",
            "text-multicolor"
          )}
          tag="h1"
        >
          {"Think."}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "create-heading-text-behind",
            "text-multicolor"
          )}
          tag="h1"
        >
          {"CREATE."}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "solution-heading-text-behind",
            "text-multicolor"
          )}
          tag="h1"
        >
          {"SOlution."}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "tcs-text-wrapper")}
        tag="div"
      >
        <_Builtin.Paragraph className={_utils.cx(_styles, "tcs_paragraph")}>
          <_Builtin.Strong
            className={_utils.cx(_styles, "tcs_content_wrapper")}
          >
            {
              "RevRebel is a hospitality-centric agency, focused solely on the art of selling hotel rooms (and the fabulous experiences they offer)."
            }
          </_Builtin.Strong>
        </_Builtin.Paragraph>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-25")}>
          <_Builtin.Strong
            className={_utils.cx(_styles, "tcs_content_wrapper")}
          >
            {
              "We supercharge performance by synchronizing Revenue Management, Distribution, Marketing, Branding, and Social, together as a single brain setting the stage for exceptional strategy so together we can make the extraordinary impact you seek."
            }
            <br />
          </_Builtin.Strong>
          <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
            {"SAYHELLO"}
          </_Builtin.Span>
          <_Builtin.Strong
            className={_utils.cx(_styles, "tcs_content_wrapper")}
          >
            <br />
          </_Builtin.Strong>
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
