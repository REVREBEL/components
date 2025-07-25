"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Section001.module.css";

export function Section001({
  as: _Component = _Builtin.Block,
  sectionId,
  headlineTag = "h1",
  headline = "One Pager Vertical Section Navigation",
  bodyText = (
    <>
      {
        "In this Webflow tutorial, I'll show you how to create a dynamic vertical sidebar navigation, similar to the one on the "
      }
      {". Perfect for One-Pagers & longer websites. "}
      <br />
      <br />
      {
        "We'll use the native Standard Webflow navigation component and customize the design of the navigation point based on the active section. Plus, we'll integrate an appealing indicator to show users their current location. "
      }
      <br />
      <br />
      {"Let me know your thoughts, and don't forget to subscribe to "}
      {" for more Webflow tips and tricks!"}
    </>
  ),
  button1Text = "Cloneable",

  button1Link = {
    href: "https://webflow.grsm.io/section-navigation-style",
    target: "_blank",
  },

  button2Text = "Watch Tutorial",

  button2Link = {
    href: "#",
  },

  moreInformationLinkText = "More tutorials at: ",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "fancy-vertical-section-navigation-with-active-styles--section--example"
      )}
      tag="div"
      id={sectionId}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "fancy-vertical-section-navigation-with-active-styles--padding-global"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "fancy-vertical-section-navigation-with-active-styles--container-w3"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--text-center"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--title1"
              )}
              tag={headlineTag}
            >
              {headline}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--intro-description"
              )}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "fancy-vertical-section-navigation-with-active-styles--copy-medium"
                )}
              >
                {bodyText}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--button-wrapper"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "fancy-vertical-section-navigation-with-active-styles--tutorial-link"
                )}
                button={false}
                block=""
                options={button1Link}
              >
                {button1Text}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "fancy-vertical-section-navigation-with-active-styles--tutorial-link",
                  "fancy-vertical-section-navigation-with-active-styles--is-secondary"
                )}
                button={false}
                block=""
                options={button2Link}
              >
                {button2Text}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--p-xs-start"
              )}
              tag="div"
            >
              <_Builtin.Block tag="div">
                {moreInformationLinkText}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
