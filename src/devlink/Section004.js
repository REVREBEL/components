"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Section004.module.css";

export function Section004({
  as: _Component = _Builtin.Block,
  sectionId = "section-3",
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
            <_Builtin.Strong>
              {"Section 3"}
              <br />
              <br />
              {"‍"}
            </_Builtin.Strong>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
            }
          </_Builtin.Paragraph>
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--demo-image"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687f40fd00ba45645a0f8163_d6dd9644d4bbfc3a6ca2d66c40e6da3e_martin-martz-7it4_acM-0M-unsplash.jpg"
          />
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--title4",
              "fancy-vertical-section-navigation-with-active-styles--text-regular"
            )}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
