"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BlogcardCmsColor2.module.css";

export function BlogcardCmsColor2({
  as: _Component = _Builtin.Layout,
  blogcardTextDate = "January 1, 2000",
  blogcardHeading = "Heading",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "blogcard_stack-3",
        "bg-color",
        "text-white-10"
      )}
      id={_utils.cx(
        _styles,
        "w-node-c73ef55f-04ae-fadb-430f-fb24db1d03fe-db1d03fe"
      )}
    >
      <_Builtin.Cell
        className={_utils.cx(_styles, "blogcard_category-label-cell-3")}
        id={_utils.cx(
          _styles,
          "w-node-c73ef55f-04ae-fadb-430f-fb24db1d03ff-db1d03fe"
        )}
      >
        <_Builtin.HFlex
          className={_utils.cx(_styles, "blogcard_flex-block-category-3")}
          tag="div"
        >
          <_Builtin.HFlex
            className={_utils.cx(_styles, "blogcard_flex-block-category-3")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "blogcard_category-label-3",
                "white-offset"
              )}
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
                "blogcard_category-label-3",
                "emoji",
                "white-offset"
              )}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Text Link "}
              <_Builtin.Span
                className={_utils.cx(_styles, "blogcard_text-emoji-3")}
              >
                {"♥️"}
              </_Builtin.Span>
            </_Builtin.Link>
          </_Builtin.HFlex>
          <_Builtin.HFlex
            className={_utils.cx(_styles, "blogcard_flex-block-category-3")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "blogcard_category-label-3",
                "white-offset"
              )}
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
                "blogcard_category-label-3",
                "emoji",
                "white-offset"
              )}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Text Link "}
              <_Builtin.Span
                className={_utils.cx(_styles, "blogcard_text-emoji-3")}
              >
                {"♥️"}
              </_Builtin.Span>
            </_Builtin.Link>
          </_Builtin.HFlex>
        </_Builtin.HFlex>
      </_Builtin.Cell>
      <_Builtin.Cell
        className={_utils.cx(_styles, "blogcard_date-cell-3")}
        id={_utils.cx(
          _styles,
          "w-node-c73ef55f-04ae-fadb-430f-fb24db1d040f-db1d03fe"
        )}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "blogcard_text-date-3")}
          tag="div"
        >
          {blogcardTextDate}
        </_Builtin.Block>
      </_Builtin.Cell>
      <_Builtin.Cell
        className={_utils.cx(_styles, "blogcard_heading-cell-3")}
        id={_utils.cx(
          _styles,
          "w-node-c73ef55f-04ae-fadb-430f-fb24db1d0411-db1d03fe"
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
            className={_utils.cx(_styles, "blogcard_heading-3", "white-offset")}
            tag="h1"
          >
            {"Heading"}
          </_Builtin.Heading>
        </_Builtin.Link>
      </_Builtin.Cell>
      <_Builtin.Cell
        className={_utils.cx(_styles, "blogcard_paragraph-cell-3")}
        id={_utils.cx(
          _styles,
          "w-node-c73ef55f-04ae-fadb-430f-fb24db1d0415-db1d03fe"
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
            className={_utils.cx(
              _styles,
              "blogcard_paragraph-3",
              "white-offset"
            )}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
            }
          </_Builtin.Paragraph>
        </_Builtin.Link>
      </_Builtin.Cell>
      <_Builtin.Cell
        className={_utils.cx(_styles, "blogcard_read-more_cell-3")}
        id={_utils.cx(
          _styles,
          "w-node-c73ef55f-04ae-fadb-430f-fb24db1d0419-db1d03fe"
        )}
      >
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "blogcard_read-more-3",
            "lightblue-offset"
          )}
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
        className={_utils.cx(_styles, "blogcard_more-info-cell-3")}
        id={_utils.cx(
          _styles,
          "w-node-c73ef55f-04ae-fadb-430f-fb24db1d041c-db1d03fe"
        )}
      >
        <_Builtin.HFlex
          className={_utils.cx(_styles, "blogcard_flex-box-author-3")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "blogcard_text-author-3")}
            tag="div"
          >
            {"By"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "blogcard_text-author-3")}
            tag="div"
          >
            {"Author Name"}
          </_Builtin.Block>
        </_Builtin.HFlex>
        <_Builtin.HFlex
          className={_utils.cx(_styles, "blogcard_flex-block-read-time-3")}
          tag="div"
        >
          <_Builtin.HFlex
            className={_utils.cx(_styles, "blogcard_flex-block-read-time-3")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "blogcard_text-emoji-3")}
              tag="div"
            >
              {"🕔"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "blogcard_text-read-time-3")}
              tag="div"
            >
              {"READTIME:"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "blogcard_text-read-time-3")}
              tag="div"
            >
              {"xx"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "blogcard_text-read-time-3")}
              tag="div"
            >
              {"Minutes"}
            </_Builtin.Block>
          </_Builtin.HFlex>
        </_Builtin.HFlex>
      </_Builtin.Cell>
    </_Component>
  );
}
