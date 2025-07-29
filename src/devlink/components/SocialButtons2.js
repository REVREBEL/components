"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SocialButtons2.module.css";

export function SocialButtons2({
  as: _Component = _Builtin.Link,
  runtimeProps = {},
  socialLoginSocialIconVisible = false,
  socialLoginSocialIconId = "Google",
  socialAttributeAttributeDisconnectValue,
  socialAttributeAttributeSocialNameValue,
  buttonButtonId,
  buttonButtonText = "[ Continue with {{SOCIALSITE}} ]",

  buttonButtonLink = {
    href: "#",
  },

  iconsSocialIconImage = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/68859430af72390465a85ec2_189765acf69f7a16c92d2457196d2303_google-filled.svg",
  iconsSocialIconAltText,
  buttonStyleButton = "Google Dark",
}) {
  const _styleVariantMap = {
    "Google Dark": "",
    "Google Light": "w-variant-976d0d21-7469-df1e-f29b-3dcfef8d3728",
    "Linkedin Dark": "w-variant-976d0d21-7469-df1e-f29b-3dcfef8d3729",
    "Linked Light": "w-variant-976d0d21-7469-df1e-f29b-3dcfef8d372a",
    "Github Dark": "w-variant-976d0d21-7469-df1e-f29b-3dcfef8d372b",
    "Github Light": "w-variant-976d0d21-7469-df1e-f29b-3dcfef8d372c",
    "Microsoft Dark": "w-variant-976d0d21-7469-df1e-f29b-3dcfef8d372d",
    "Microsoft Light": "w-variant-976d0d21-7469-df1e-f29b-3dcfef8d372e",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButton];

  return (
    <_Component
      className={_utils.cx(_styles, "social-button-2", _activeStyleVariant)}
      button={false}
      wized={socialAttributeAttributeSocialNameValue}
      id={buttonButtonId}
      block="inline"
      options={buttonButtonLink}
      {...runtimeProps}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "social-inner-2", _activeStyleVariant)}
        id={_utils.cx(
          _styles,
          "w-node-_497327fb-883e-d359-0949-b54f450b1589-450b1588"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "social-icons-wrapper-2",
            _activeStyleVariant
          )}
          id={_utils.cx(
            _styles,
            "w-node-_497327fb-883e-d359-0949-b54f450b158a-450b1588"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon-6",
              "icon_google",
              "is-white-6",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_497327fb-883e-d359-0949-b54f450b158b-450b1588"
            )}
            width="auto"
            height="10"
            loading="lazy"
            src={iconsSocialIconImage}
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon-6",
              "icon_google",
              "is-blue-3",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_497327fb-883e-d359-0949-b54f450b158c-450b1588"
            )}
            width="auto"
            height="10"
            loading="lazy"
            src={iconsSocialIconImage}
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon-6",
              "icon-github",
              "is-white-6",
              "w-node-_497327fb-883e-d359-0949-b54f450b158d-450b1588",
              _activeStyleVariant
            )}
            id={_utils.cx(_styles, "LinkedIn")}
            width="30"
            height="30"
            loading="lazy"
            alt="Github Icon"
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/68859430af72390465a85ec1_5b8013d571b350b266084f578991c7b3_github-filled.svg"
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon-6",
              "icon-github",
              "is-dark-grey",
              "w-node-_497327fb-883e-d359-0949-b54f450b158e-450b1588",
              _activeStyleVariant
            )}
            id={_utils.cx(_styles, "Github")}
            width="20"
            height="20"
            loading="lazy"
            alt="Google Icon"
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/68859430af72390465a85ec1_5b8013d571b350b266084f578991c7b3_github-filled.svg"
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon-6",
              "icon-linkedin",
              "is-white-6",
              "w-node-_497327fb-883e-d359-0949-b54f450b158f-450b1588",
              _activeStyleVariant
            )}
            id={_utils.cx(_styles, "LinkedIn")}
            width="30"
            height="30"
            loading="lazy"
            alt="Github Icon"
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/68859430af72390465a85ec0_aabc0e9b48eea20b81d51dafd7aec2da_linkedin-filled.svg"
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon-6",
              "icon-google",
              "is-green",
              "w-node-_497327fb-883e-d359-0949-b54f450b1590-450b1588",
              _activeStyleVariant
            )}
            id={_utils.cx(_styles, "Github")}
            width="20"
            height="20"
            loading="lazy"
            alt="Google Icon"
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/68859430af72390465a85ec0_aabc0e9b48eea20b81d51dafd7aec2da_linkedin-filled.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "social-label-text-2",
            _activeStyleVariant
          )}
          id={_utils.cx(
            _styles,
            "w-node-_497327fb-883e-d359-0949-b54f450b1591-450b1588"
          )}
          tag="div"
          data-ms-auth-connected-text="Disconnect Google"
        >
          {buttonButtonText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "ms-disconnect-link-2",
            _activeStyleVariant
          )}
          id={_utils.cx(
            _styles,
            "w-node-_497327fb-883e-d359-0949-b54f450b1592-450b1588"
          )}
          tag="div"
          data-ms-auth-disconnect="true"
        >
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon-6",
              "icon-close",
              _activeStyleVariant
            )}
            width="auto"
            height="auto"
            loading="lazy"
            data-ms-auth-connected-text={
              socialAttributeAttributeDisconnectValue
            }
            alt=""
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/68859430af72390465a85ebf_c68a1dfa80662c3064e12f294a7a2c05_close-x.svg"
            {...runtimeProps}
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
