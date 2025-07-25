"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Card3Topics.module.css";

export function Card3Topics({
  as: _Component = _Builtin.Block,
  headlineHeadlineText = "Heading",
  headlineHeadlineTag = "h4",
  headlineSubHeadlineText = "Avatar size can be adjusted with combo classes.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card_info")}
      id={_utils.cx(
        _styles,
        "w-node-_81b26347-d5ab-4976-de6e-af23858d2751-858d2751"
      )}
      tag="div"
    >
      <_Builtin.Block
        id={_utils.cx(
          _styles,
          "w-node-_81b26347-d5ab-4976-de6e-af23858d2752-858d2751"
        )}
        tag="div"
      >
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
            className={_utils.cx(
              _styles,
              "sg_table-cell",
              "sg_cell-small",
              "is-shrink"
            )}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
              {"Option"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sg_table-cell", "is-shrink")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_label", "is-text")}
              tag="div"
            >
              {"Preview"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "flex_vertical", "gap-xsmall")}
          id={_utils.cx(
            _styles,
            "w-node-_81b26347-d5ab-4976-de6e-af23858d275e-858d2751"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "sg_table-row")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_table-cell")}
              tag="div"
            >
              <_Builtin.HFlex
                className={_utils.cx(_styles, "sg_class-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_81b26347-d5ab-4976-de6e-af23858d2761-858d2751"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "sg_icon")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_81b26347-d5ab-4976-de6e-af23858d2762-858d2751"
                  )}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "sg_label")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_81b26347-d5ab-4976-de6e-af23858d2763-858d2751"
                  )}
                  tag="div"
                >
                  {"Small Avatar"}
                </_Builtin.Block>
              </_Builtin.HFlex>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_table-cell")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "avatar", "is-small")}
                id={_utils.cx(
                  _styles,
                  "w-node-_81b26347-d5ab-4976-de6e-af23858d2766-858d2751"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image_cover_fix2", "")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://uploads-ssl.webflow.com/663ae41a035a5092ac55e30d/663ae41a035a5092ac55e325_image_placeholder.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sg_table-row")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_table-cell")}
              tag="div"
            >
              <_Builtin.HFlex
                className={_utils.cx(_styles, "sg_class-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_81b26347-d5ab-4976-de6e-af23858d276a-858d2751"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "sg_icon")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_81b26347-d5ab-4976-de6e-af23858d276b-858d2751"
                  )}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "sg_label")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_81b26347-d5ab-4976-de6e-af23858d276c-858d2751"
                  )}
                  tag="div"
                >
                  {"Default Avatar"}
                </_Builtin.Block>
              </_Builtin.HFlex>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_table-cell")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "avatar")}
                id={_utils.cx(
                  _styles,
                  "w-node-_81b26347-d5ab-4976-de6e-af23858d276f-858d2751"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image_cover_fix2", "")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://uploads-ssl.webflow.com/663ae41a035a5092ac55e30d/663ae41a035a5092ac55e325_image_placeholder.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sg_table-row")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_table-cell")}
              tag="div"
            >
              <_Builtin.HFlex
                className={_utils.cx(_styles, "sg_class-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_81b26347-d5ab-4976-de6e-af23858d2773-858d2751"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "sg_icon")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_81b26347-d5ab-4976-de6e-af23858d2774-858d2751"
                  )}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "sg_label")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_81b26347-d5ab-4976-de6e-af23858d2775-858d2751"
                  )}
                  tag="div"
                >
                  {"Small Avatar"}
                </_Builtin.Block>
              </_Builtin.HFlex>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sg_table-cell")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "avatar", "is-large")}
                id={_utils.cx(
                  _styles,
                  "w-node-_81b26347-d5ab-4976-de6e-af23858d2778-858d2751"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image_cover_fix2", "")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://uploads-ssl.webflow.com/663ae41a035a5092ac55e30d/663ae41a035a5092ac55e325_image_placeholder.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
