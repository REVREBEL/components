"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WatchClipMedia.module.css";

export function WatchClipMedia({
  as: _Component = _Builtin.Link,

  buttonLink = {
    href: "#",
  },

  buttonId,
  buttonCtaText = "[ Watch Clip ]",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "icon-button", "is-light", "is_xlarge")}
      button={false}
      id={buttonId}
      block="inline"
      options={buttonLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "icon-button-flex")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "button-label-text", "text-rebel")}
          tag="div"
        >
          {buttonCtaText}
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "play-icon", "text-rebel")}
          width="50"
          height="auto"
          loading="lazy"
          alt="play icon"
          src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/6885ade347ec9f1d155c9466_Caret%20Right%20Outline.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
