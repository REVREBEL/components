"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardSinglePhoto.module.css";

export function CardSinglePhoto({
  as: _Component = _Builtin.Block,
  headlineSubHeadlineText = "By default image tag and image class have radius applied. ",
  headlineHeadlineText = "Heading",
  headlineHeadlineTag = "h4",
  labelText = "Preview",
  imagesSecondaryImage = "",
  secondaryImageAltText = "__wf_reserved_inherit",
  primaryImageVisible = true,
  imagesPrimaryImageId,
  secondaryImageVisible = true,
  headlineSecondaryId,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card_info")}
      id={_utils.cx(
        _styles,
        "w-node-e7ba887a-9ae7-8795-3355-43068997c9de-8997c9de"
      )}
      tag="div"
    >
      <_Builtin.Block tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "headline_h4")}
          tag={headlineHeadlineTag}
        >
          {headlineHeadlineText}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "text-color_secondary")}
        >
          {headlineSubHeadlineText}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_table-row", "sg_table-head")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "sg_table-cell", "is-shrink")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_label", "is-text")}
              tag="div"
            >
              {labelText}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        {primaryImageVisible ? (
          <_Builtin.Image
            className={_utils.cx(_styles, "image", "margin-bottom_small")}
            id={_utils.cx(
              _styles,
              "w-node-e7ba887a-9ae7-8795-3355-43068997c9e8-8997c9de"
            )}
            width="auto"
            height="auto"
            loading="lazy"
            src={imagesSecondaryImage}
          />
        ) : null}
        {secondaryImageVisible ? (
          <_Builtin.Image
            className={_utils.cx(_styles, "image")}
            id={_utils.cx(
              _styles,
              "w-node-_8883f425-43fe-8d0a-d9c3-258d367eb184-8997c9de"
            )}
            width="auto"
            height="auto"
            loading="lazy"
            src={imagesSecondaryImage}
          />
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
