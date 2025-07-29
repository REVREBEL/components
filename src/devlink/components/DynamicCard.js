"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DynamicCard.module.css";

export function DynamicCard({
  as: _Component = _Builtin.Block,
  cardstyle = "dark",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card")}
      tag="div"
      data-cardStyle={cardstyle}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "card_body_small")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "ratio_3x2", "margin-bottom_small")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image", "image_cover")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://uploads-ssl.webflow.com/663ae41a035a5092ac55e30d/663ae41a035a5092ac55e325_image_placeholder.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "headline_h6")}
            tag="h6"
          >
            {"A different heading, so it doesn't look repetitive."}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "button-group")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-button", "on-inverse")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "display_inline-block")}
                tag="div"
              >
                {"Read post"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
