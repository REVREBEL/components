"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FancyNav.module.css";

export function FancyNav({
  as: _Component = _Builtin.NavbarWrapper,

  navLink1NavLink1 = {
    href: "#",
  },

  navLink1NavLink1Visibility = true,
  navLink1Id,
  navLink1NavLink1Text = "Hello",
  navLink1NavLink1StyleNumber = "01",
  navLink2NavLink2StyleNumber = "02",
  navLinkBlock3NavLink3StyleNumber = "03",
  navLinkBlock4NavLink4StyleNumber = "04",
  navLinkBlock5NavLink5StyleNumber = "05",
  navLink2NavLink2Text = "Approach",
  navLinkBlock3NavLink3Text = "Work",
  navLinkBlock4NavLink4Text = "Talent",
  navLinkBlock5NavLink5Text = "Tutorial",

  navLink2NavLink2 = {
    href: "#",
  },

  navLink3 = {
    href: "#",
  },

  navLink4 = {
    href: "#",
  },

  navLinkBlock5NavLink5 = {
    href: "#",
  },

  navLinkHomeNavLinkHome = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "fancy-vertical-section-navigation-with-active-styles--navbar"
      )}
      tag="div"
      config={{
        animation: "default",
        collapse: "small",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "fancy-vertical-section-navigation-with-active-styles--navbar-inner"
        )}
        tag="div"
      >
        <_Builtin.NavbarMenu
          className={_utils.cx(
            _styles,
            "fancy-vertical-section-navigation-with-active-styles--navbar-links-wrapper"
          )}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--navbar-link-block",
              "fancy-vertical-section-navigation-with-active-styles--is-logo"
            )}
            options={navLinkHomeNavLinkHome}
          >
            <_Builtin.NotSupported _atom="Animation" />
          </_Builtin.NavbarBrand>
          {navLink1NavLink1Visibility ? (
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-block"
              )}
              button={false}
              id={navLink1Id}
              block="inline"
              options={navLink1NavLink1}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "fancy-vertical-section-navigation-with-active-styles--navbar-link-number"
                )}
                tag="div"
              >
                {navLink1NavLink1StyleNumber}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "fancy-vertical-section-navigation-with-active-styles--navbar-link-text"
                )}
                tag="div"
              >
                {navLink1NavLink1Text}
              </_Builtin.Block>
            </_Builtin.Link>
          ) : null}
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--navbar-link-block",
              "fancy-vertical-section-navigation-with-active-styles--is-2"
            )}
            button={false}
            block="inline"
            options={navLink2NavLink2}
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-number"
              )}
              tag="div"
            >
              {navLink2NavLink2StyleNumber}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-text"
              )}
              tag="div"
            >
              {navLink2NavLink2Text}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--navbar-link-block",
              "fancy-vertical-section-navigation-with-active-styles--is-3"
            )}
            button={false}
            block="inline"
            options={navLink3}
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-number"
              )}
              tag="div"
            >
              {navLinkBlock3NavLink3StyleNumber}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-text"
              )}
              tag="div"
            >
              {navLinkBlock3NavLink3Text}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--navbar-link-block",
              "fancy-vertical-section-navigation-with-active-styles--is-4"
            )}
            button={false}
            block="inline"
            options={navLink4}
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-number"
              )}
              tag="div"
            >
              {navLinkBlock4NavLink4StyleNumber}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-text"
              )}
              tag="div"
            >
              {navLinkBlock4NavLink4Text}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--navbar-link-block",
              "fancy-vertical-section-navigation-with-active-styles--is-5"
            )}
            button={false}
            block="inline"
            options={navLinkBlock5NavLink5}
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-number"
              )}
              tag="div"
            >
              {navLinkBlock5NavLink5StyleNumber}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-text"
              )}
              tag="div"
            >
              {navLinkBlock5NavLink5Text}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--navbar-link-indicator-wrapper"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "fancy-vertical-section-navigation-with-active-styles--navbar-link-indicator-dot"
              )}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(
            _styles,
            "fancy-vertical-section-navigation-with-active-styles--menu-button"
          )}
          tag="div"
        >
          <_Builtin.Icon
            className={_utils.cx(
              _styles,
              "fancy-vertical-section-navigation-with-active-styles--icon"
            )}
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
