"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BlogcardCmsColor.module.css";

export function BlogcardCmsColor({
  as: _Component = _Builtin.Layout,
  blogcardTextDate = "January 1, 2000",
  blogcardHeading = "Heading",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "blogcard_stack-2",
        "bg-color",
        "text-white-7"
      )}
      id={_utils.cx(
        _styles,
        "w-node-_33b11d68-7301-697d-6fc2-64225f41cfcb-5f41cfcb"
      )}
    >
      <_Builtin.Cell
        className={_utils.cx(_styles, "blogcard_category-label-cell-2")}
        id={_utils.cx(
          _styles,
          "w-node-_33b11d68-7301-697d-6fc2-64225f41cfcc-5f41cfcb"
        )}
      >
        <_Builtin.HFlex
          className={_utils.cx(_styles, "blogcard_flex-block-category-2")}
          tag="div"
        >
          <_Builtin.HFlex
            className={_utils.cx(_styles, "blogcard_flex-block-category-2")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "blogcard_category-label-2",
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
                "blogcard_category-label-2",
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
                className={_utils.cx(_styles, "blogcard_text-emoji-2")}
              >
                {"♥️"}
              </_Builtin.Span>
            </_Builtin.Link>
          </_Builtin.HFlex>
          <_Builtin.HFlex
            className={_utils.cx(_styles, "blogcard_flex-block-category-2")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "blogcard_category-label-2",
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
                "blogcard_category-label-2",
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
                className={_utils.cx(_styles, "blogcard_text-emoji-2")}
              >
                {"♥️"}
              </_Builtin.Span>
            </_Builtin.Link>
          </_Builtin.HFlex>
        </_Builtin.HFlex>
      </_Builtin.Cell>
      <_Builtin.Cell
        className={_utils.cx(_styles, "blogcard_date-cell-2")}
        id={_utils.cx(
          _styles,
          "w-node-_33b11d68-7301-697d-6fc2-64225f41cfdc-5f41cfcb"
        )}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "blogcard_text-date-2")}
          tag="div"
        >
          {blogcardTextDate}
        </_Builtin.Block>
      </_Builtin.Cell>
      <_Builtin.Cell
        className={_utils.cx(_styles, "blogcard_heading-cell-2")}
        id={_utils.cx(
          _styles,
          "w-node-_33b11d68-7301-697d-6fc2-64225f41cfde-5f41cfcb"
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
            className={_utils.cx(_styles, "blogcard_heading-2", "white-offset")}
            tag="h1"
          >
            {"Heading"}
          </_Builtin.Heading>
        </_Builtin.Link>
      </_Builtin.Cell>
      <_Builtin.Cell
        className={_utils.cx(_styles, "blogcard_paragraph-cell-2")}
        id={_utils.cx(
          _styles,
          "w-node-_33b11d68-7301-697d-6fc2-64225f41cfe2-5f41cfcb"
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
              "blogcard_paragraph-2",
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
        className={_utils.cx(_styles, "blogcard_read-more_cell-2")}
        id={_utils.cx(
          _styles,
          "w-node-_33b11d68-7301-697d-6fc2-64225f41cfe6-5f41cfcb"
        )}
      >
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "blogcard_read-more-2",
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
        className={_utils.cx(_styles, "blogcard_more-info-cell-2")}
        id={_utils.cx(
          _styles,
          "w-node-_33b11d68-7301-697d-6fc2-64225f41cfe9-5f41cfcb"
        )}
      >
        <_Builtin.HFlex
          className={_utils.cx(_styles, "blogcard_flex-box-author-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "blogcard_text-author-2")}
            tag="div"
          >
            {"By"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "blogcard_text-author-2")}
            tag="div"
          >
            {"Author Name"}
          </_Builtin.Block>
        </_Builtin.HFlex>
        <_Builtin.HFlex
          className={_utils.cx(_styles, "blogcard_flex-block-read-time-2")}
          tag="div"
        >
          <_Builtin.HFlex
            className={_utils.cx(_styles, "blogcard_flex-block-read-time-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "blogcard_text-emoji-2")}
              tag="div"
            >
              {"🕔"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "blogcard_text-read-time-2")}
              tag="div"
            >
              {"READTIME:"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "blogcard_text-read-time-2")}
              tag="div"
            >
              {"xx"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "blogcard_text-read-time-2")}
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
