"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TextAlignment.module.css";

export function TextAlignment({ as: _Component = _Builtin.Grid }) {
  return (
    <_Component className={_utils.cx(_styles, "sg_list")} tag="div">
      <_Builtin.Grid
        className={_utils.cx(_styles, "sg_item-row")}
        id={_utils.cx(
          _styles,
          "w-node-a316c2e9-4bf5-0829-689b-006344312a77-44312a76"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_text-align-container", "bg_purple")}
          id={_utils.cx(
            _styles,
            "w-node-a316c2e9-4bf5-0829-689b-006344312a78-44312a76"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-align-left")}
            tag="div"
          >
            {"left"}
          </_Builtin.Block>
          <_Builtin.HFlex
            className={_utils.cx(_styles, "sg_class-3")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_icon-3", "is-white-2")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "sg_label-3",
                "bg-bright-white",
                "text-purple-3"
              )}
              tag="div"
            >
              {"text-align_left"}
            </_Builtin.Block>
          </_Builtin.HFlex>
        </_Builtin.Block>
      </_Builtin.Grid>
      <_Builtin.Grid
        className={_utils.cx(_styles, "sg_item-row")}
        id={_utils.cx(
          _styles,
          "w-node-a316c2e9-4bf5-0829-689b-006344312a7f-44312a76"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "sg_text-align-container",
            "bg-green-2"
          )}
          id={_utils.cx(
            _styles,
            "w-node-a316c2e9-4bf5-0829-689b-006344312a80-44312a76"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-align-center")}
            tag="div"
          >
            {"center"}
          </_Builtin.Block>
          <_Builtin.HFlex
            className={_utils.cx(_styles, "sg_class-3")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_icon-3", "is-white-2")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "sg_label-3",
                "bg-bright-white",
                "text-green-3"
              )}
              tag="div"
            >
              {"text-align_center"}
            </_Builtin.Block>
          </_Builtin.HFlex>
        </_Builtin.Block>
      </_Builtin.Grid>
      <_Builtin.Grid
        className={_utils.cx(_styles, "sg_item-row")}
        id={_utils.cx(
          _styles,
          "w-node-a316c2e9-4bf5-0829-689b-006344312a87-44312a76"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "sg_text-align-container",
            "bg_brightblue"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-align-right")}
            tag="div"
          >
            {"right"}
          </_Builtin.Block>
          <_Builtin.HFlex
            className={_utils.cx(_styles, "sg_class-3")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_icon-3", "is-white-2")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "sg_label-3",
                "bg-bright-white",
                "text-bright-blue-3"
              )}
              tag="div"
            >
              {"text-align_right"}
            </_Builtin.Block>
          </_Builtin.HFlex>
        </_Builtin.Block>
      </_Builtin.Grid>
    </_Component>
  );
}
