"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Barcode.module.css";

export function Barcode({ as: _Component = _Builtin.Grid }) {
  return (
    <_Component className={_utils.cx(_styles, "barcode-grid")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "barcode")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image-82")}
          loading="lazy"
          width="auto"
          height="auto"
          alt="Image of a barcode"
          src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/6885e1978c36de15c25e8621_df840e935b66e06f7b9029480d12b24d_645e2dc73a1bfedf0560cd18_about-sticker.webp"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "barcode-headline")}
        id={_utils.cx(
          _styles,
          "w-node-_803f513c-4a5a-3633-dbd2-50acf2d398bb-f2d398b8"
        )}
        tag="div"
      >
        {"LOSANGELES., CALIFORNIA"}
        <br />
        {"SANDIEGO,CALIFORNIA"}
        <br />
        {"BASED"}
        <br />
        {"WORKINGWORLDWIDE"}
      </_Builtin.Block>
      <_Builtin.Image
        id={_utils.cx(
          _styles,
          "w-node-_803f513c-4a5a-3633-dbd2-50acf2d398c3-f2d398b8"
        )}
        loading="lazy"
        width="auto"
        height="auto"
        alt="REVREBEL Logo"
        src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/6885e1978c36de15c25e861a_5f184edd87f526f909fa3ea7b6358638_revrebel-logo-white-stacked.webp"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "barcode-textblock")}
        tag="div"
      >
        {"revenue strategy"}
        <br />
        {"performance marketing"}
        <br />
        {"optimized distribution"}
        <br />
        {"tie in branding +partnerships"}
        <br />
        {"curated tech"}
      </_Builtin.Block>
    </_Component>
  );
}
