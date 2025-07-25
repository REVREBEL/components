"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Section003.module.css";

export function Section003({
  as: _Component = _Builtin.Block,
  sectionId = "section-2",
  sectionTopText = (
    <>
      <br />
      {"‍"}
      <br />
      {
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
      }
    </>
  ),
  sectionImage = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687f41030d0c74f5164dca41_9f68358c4316411f9e42e7d3d446d12e_warren-umoh-mzo02pG77Ms-unsplash.jpg",
  sectionAltText = "__wf_reserved_inherit",
  sectionBottomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
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
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--title4",
              "fancy-vertical-section-navigation-with-active-styles--text-regular"
            )}
          >
            {sectionTopText}
          </_Builtin.Paragraph>
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--demo-image"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            src={sectionImage}
          />
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--title4",
              "fancy-vertical-section-navigation-with-active-styles--text-regular"
            )}
          >
            {sectionBottomText}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
