"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Card.module.css";

export function Card({ as: _Component = _Builtin.Block, variant = "Light" }) {
  const _styleVariantMap = {
    Light: "",
    "Light Inverse": "w-variant-adeb031f-e5f4-e586-b598-c7fc9003870e",
    Dark: "w-variant-97f77e2f-cbc7-3ea9-7bb3-3593f68d1ec7",
    "Dark Inverse": "w-variant-1fe718d8-dcea-6edb-6691-13a5d205d4d3",
    Grey: "w-variant-48975357-b92a-55f4-3e3e-3afc692db6ec",
    "Grey Inverse": "w-variant-34f62f68-b9e5-31cc-cf1c-be737ea5fd1f",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "card", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "card-body_small", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "card_body_small",
            "grey-inverse-2",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "card_body_small",
                _activeStyleVariant
              )}
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
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687f9793e98b1302a18658ae_pexels-startup-stock-photos-212286.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "headline_6",
                    _activeStyleVariant
                  )}
                  tag="h6"
                >
                  {"A different heading, so it doesn't look repetitive."}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "paragraph-5",
                    _activeStyleVariant
                  )}
                >
                  {
                    "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "button-group",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  <_Builtin.Link
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-button-2",
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
                        {"Read post"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
