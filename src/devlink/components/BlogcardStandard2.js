"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { BlogcardCmsStandard } from "./BlogcardCmsStandard";
import { BlogcardCmsColor2 } from "./BlogcardCmsColor2";
import * as _utils from "./utils";
import _styles from "./BlogcardStandard2.module.css";

export function BlogcardStandard2({
  as: _Component = _Builtin.BlockContainer,
  blogcardStackBackgroundColor,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "splide__slide__container-4")}
      grid={{
        type: "container",
      }}
      tag="div"
    >
      <_Builtin.Grid
        className={_utils.cx(_styles, "blogcard_grid-2")}
        tag="div"
      >
        {blogcardStackBackgroundColor ?? (
          <>
            <_Builtin.HFlex
              className={_utils.cx(_styles, "blogcard_flex-block-image-2")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "blogs_card_thumbnail-2")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
              />
            </_Builtin.HFlex>
            <BlogcardCmsStandard />
            <BlogcardCmsColor2 />
          </>
        )}
      </_Builtin.Grid>
    </_Component>
  );
}
