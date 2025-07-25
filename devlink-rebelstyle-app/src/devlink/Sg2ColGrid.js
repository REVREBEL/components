"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Sg2ColGrid.module.css";

export function Sg2ColGrid({
  as: _Component = _Builtin.Block,
  classNamesClassModifierName1 = "Class Modifier Name",
  slot,
  slot,
  slot,
  classNamesClassLabelName2 = "CLASS NAME",
  classNamesClassLabelName1 = "CLASS NAME",
  classNamesClassLabelName3 = "CLASS NAME",
  classModifierName2 = "Class Modifier Name",
  id1 = "Item-ID",
  classNamesId2,
  itemIDsId3,
  itemIDsId2,
  itemVisibilityItem1Visibility = true,
  itemVisibilityItem2Visibility = true,
  itemVisibilityItem3Visibility = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "grid_2-col")} tag="div">
      <_Builtin.HFlex
        className={_utils.cx(_styles, "sg_class-wrapper", "is-grid")}
        id={_utils.cx(
          _styles,
          "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8e0-6804d8df"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_icon")}
          id={_utils.cx(
            _styles,
            "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8e1-6804d8df"
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_label")}
          id={_utils.cx(
            _styles,
            "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8e2-6804d8df"
          )}
          tag="div"
        >
          {classNamesClassLabelName1}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_label", "bg-bright-grey")}
          id={_utils.cx(
            _styles,
            "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8e4-6804d8df"
          )}
          tag="div"
        >
          {classNamesClassModifierName1}
        </_Builtin.Block>
      </_Builtin.HFlex>
      <_Builtin.Block
        className={_utils.cx(_styles, "sg_item-wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8e6-6804d8df"
        )}
        tag="div"
      >
        <_Builtin.NotSupported _atom="Slot" />
      </_Builtin.Block>
      <_Builtin.HFlex
        className={_utils.cx(_styles, "sg_class-wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8e7-6804d8df"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_icon")}
          id={_utils.cx(
            _styles,
            "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8e8-6804d8df"
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_label")}
          id={_utils.cx(
            _styles,
            "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8e9-6804d8df"
          )}
          tag="div"
        >
          {classNamesClassLabelName2}
        </_Builtin.Block>
      </_Builtin.HFlex>
      <_Builtin.Block
        className={_utils.cx(_styles, "sg_item-wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8eb-6804d8df"
        )}
        tag="div"
      >
        <_Builtin.NotSupported _atom="Slot" />
      </_Builtin.Block>
      <_Builtin.HFlex
        className={_utils.cx(_styles, "sg_class-wrapper", "is-grid")}
        id={_utils.cx(
          _styles,
          "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8ec-6804d8df"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_icon")}
          id={_utils.cx(
            _styles,
            "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8ed-6804d8df"
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_label")}
          id={_utils.cx(
            _styles,
            "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8ee-6804d8df"
          )}
          tag="div"
        >
          {classNamesClassLabelName3}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_label", "bg-bright-grey")}
          id={_utils.cx(
            _styles,
            "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8f0-6804d8df"
          )}
          tag="div"
        >
          {classModifierName2}
        </_Builtin.Block>
      </_Builtin.HFlex>
      <_Builtin.Block
        className={_utils.cx(_styles, "sg_item-wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-_09f3b3fd-20ef-e3b4-46d8-71416804d8f2-6804d8df"
        )}
        tag="div"
      >
        <_Builtin.NotSupported _atom="Slot" />
      </_Builtin.Block>
    </_Component>
  );
}
