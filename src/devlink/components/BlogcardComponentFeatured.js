"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BlogcardComponentFeatured.module.css";

export function BlogcardComponentFeatured({
  as: _Component = _Builtin.BlockContainer,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "splide__slide__container-2")}
      grid={{
        type: "container",
      }}
      tag="div"
    >
      <_Builtin.Grid
        className={_utils.cx(_styles, "blogcard_featured_grid")}
        tag="div"
      >
        <_Builtin.HFlex
          className={_utils.cx(_styles, "blogcard_featured_flex-block")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "blogcard_featured_thumbnail-image")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          />
        </_Builtin.HFlex>
        <_Builtin.Layout
          className={_utils.cx(_styles, "blogcard_stack")}
          id={_utils.cx(
            _styles,
            "w-node-_86f1ffeb-3f33-079d-5e18-a8053c8a66ea-3c8a66e5"
          )}
        >
          <_Builtin.Cell
            className={_utils.cx(_styles, "blogcard_category-label-cell")}
            id={_utils.cx(
              _styles,
              "w-node-_86f1ffeb-3f33-079d-5e18-a8053c8a66eb-3c8a66e5"
            )}
          >
            <_Builtin.HFlex
              className={_utils.cx(_styles, "blogcard_flex-block-category")}
              tag="div"
            >
              <_Builtin.HFlex
                className={_utils.cx(_styles, "blogcard_flex-block-category")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "blogcard_category-label")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Text Link"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "blogcard_category-label",
                    "emoji"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Text Link "}
                  <_Builtin.Span
                    className={_utils.cx(_styles, "blogcard_text-emoji")}
                  >
                    {"♥️"}
                  </_Builtin.Span>
                </_Builtin.Link>
              </_Builtin.HFlex>
              <_Builtin.HFlex
                className={_utils.cx(_styles, "blogcard_flex-block-category")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "blogcard_category-label")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Text Link"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "blogcard_category-label",
                    "emoji"
                  )}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Text Link "}
                  <_Builtin.Span
                    className={_utils.cx(_styles, "blogcard_text-emoji")}
                  >
                    {"♥️"}
                  </_Builtin.Span>
                </_Builtin.Link>
              </_Builtin.HFlex>
            </_Builtin.HFlex>
          </_Builtin.Cell>
          <_Builtin.Cell
            className={_utils.cx(_styles, "blogcard_date-cell")}
            id={_utils.cx(
              _styles,
              "w-node-_86f1ffeb-3f33-079d-5e18-a8053c8a66fb-3c8a66e5"
            )}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "blogcard_text-date")}
              tag="div"
            >
              {"January 1, 2000"}
            </_Builtin.Block>
          </_Builtin.Cell>
          <_Builtin.Cell
            className={_utils.cx(_styles, "blogcard_heading-cell")}
            id={_utils.cx(
              _styles,
              "w-node-_86f1ffeb-3f33-079d-5e18-a8053c8a66fe-3c8a66e5"
            )}
          >
            <_Builtin.Link
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "blogcard_heading")}
                tag="h1"
              >
                {"Heading"}
              </_Builtin.Heading>
            </_Builtin.Link>
          </_Builtin.Cell>
          <_Builtin.Cell
            className={_utils.cx(_styles, "blogcard_paragraph-cell")}
            id={_utils.cx(
              _styles,
              "w-node-_86f1ffeb-3f33-079d-5e18-a8053c8a6702-3c8a66e5"
            )}
          >
            <_Builtin.Link
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "blogcard_paragraph")}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Link>
          </_Builtin.Cell>
          <_Builtin.Cell
            className={_utils.cx(_styles, "blogcard_read-more_cell")}
            id={_utils.cx(
              _styles,
              "w-node-_86f1ffeb-3f33-079d-5e18-a8053c8a6706-3c8a66e5"
            )}
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "blogcard_read-more")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"[ READMORE ]"}
            </_Builtin.Link>
          </_Builtin.Cell>
          <_Builtin.Cell
            className={_utils.cx(_styles, "blogcard_more-info-cell")}
            id={_utils.cx(
              _styles,
              "w-node-_86f1ffeb-3f33-079d-5e18-a8053c8a6709-3c8a66e5"
            )}
          >
            <_Builtin.HFlex
              className={_utils.cx(_styles, "blogcard_flex-box-author")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "blogcard_text-author")}
                tag="div"
              >
                {"By"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "blogcard_text-author")}
                tag="div"
              >
                {"Author Name"}
              </_Builtin.Block>
            </_Builtin.HFlex>
            <_Builtin.HFlex
              className={_utils.cx(_styles, "blogcard_flex-block-read-time")}
              tag="div"
            >
              <_Builtin.HFlex
                className={_utils.cx(_styles, "blogcard_flex-block-read-time")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "blogcard_text-emoji")}
                  tag="div"
                >
                  {"🕔"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "blogcard_text-read-time")}
                  tag="div"
                >
                  {"READTIME:"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "blogcard_text-read-time")}
                  tag="div"
                >
                  {"xx"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "blogcard_text-read-time")}
                  tag="div"
                >
                  {"Minutes"}
                </_Builtin.Block>
              </_Builtin.HFlex>
            </_Builtin.HFlex>
          </_Builtin.Cell>
        </_Builtin.Layout>
      </_Builtin.Grid>
    </_Component>
  );
}
