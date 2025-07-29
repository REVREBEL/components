"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CardBody.module.css";

export function CardBody({
  as: _Component = _Builtin.Block,
  variant = "Headline Only",
  paragraphText = "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  paragraphTextVisible = true,
  headlineTag = "h6",
  headlineText = "A different heading, so it doesn't look repetitive.",
  buttonCtaText = "Read post",

  buttonLink = {
    href: "#",
  },

  imagePreview = "",
  imagePreviewAltText = "__wf_reserved_inherit",
}) {
  const _styleVariantMap = {
    "Headline Only": "",
    "Include Paragraph": "w-variant-d0f9c776-10d9-d203-69a3-7bb66a800502",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "card_body_small", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "ratio_3x2",
          "margin-bottom_small",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "image",
            "image_cover",
            _activeStyleVariant
          )}
          width="Auto"
          height="Auto"
          loading="lazy"
          src={imagePreview}
        />
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-8", _activeStyleVariant)}
          tag={headlineTag}
        >
          {headlineText}
        </_Builtin.Heading>
        {paragraphTextVisible ? (
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "paragraph", _activeStyleVariant)}
          >
            {paragraphText}
          </_Builtin.Paragraph>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "button-group", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Link button={false} block="inline" options={buttonLink}>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-button",
                "on-accent-primary",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "display_inline-block",
                  _activeStyleVariant
                )}
                tag="div"
              >
                {buttonCtaText}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
