"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SocialButtons.module.css";

export function SocialButtons({
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

  iconsSocialIconImage = "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687e1baab1b86782dbb00f88_google-filled.svg",
  iconsSocialIconAltText,
  buttonStyleButton = "Google Dark",
}) {
  const _styleVariantMap = {
    "Google Dark": "",
    "Google Light": "w-variant-3c854d0c-3210-d854-01a1-9cc78ef653c0",
    "Linkedin Dark": "w-variant-6a776a31-897e-5dae-a849-180fa6ef1ade",
    "Linked Light": "w-variant-d0cb04af-6949-e747-5987-78458ef1efd5",
    "Github Dark": "w-variant-98a30634-7d44-fc8d-7855-62fdb02728b0",
    "Github Light": "w-variant-3aee630c-582b-80ec-d28b-5aadde2edbab",
    "Microsoft Dark": "w-variant-807142ed-4912-d752-4605-180c98d11462",
    "Microsoft Light": "w-variant-f1125e2a-2ccb-8b50-56c8-0a534ba4e081",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButton];

  return (
    <_Component
      className={_utils.cx(_styles, "social-button", _activeStyleVariant)}
      button={false}
      wized={socialAttributeAttributeSocialNameValue}
      id={buttonButtonId}
      block="inline"
      options={buttonButtonLink}
      {...runtimeProps}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "social-inner", _activeStyleVariant)}
        id={_utils.cx(
          _styles,
          "w-node-_8b01ff82-f62e-d105-8d97-c56f274bc974-274bc973"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "social-icons-wrapper",
            _activeStyleVariant
          )}
          id={_utils.cx(
            _styles,
            "w-node-_8b01ff82-f62e-d105-8d97-c56f274bc975-274bc973"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon",
              "icon_google",
              "is-white",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_8b01ff82-f62e-d105-8d97-c56f274bc976-274bc973"
            )}
            width="auto"
            height="10"
            loading="lazy"
            src={iconsSocialIconImage}
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon",
              "icon_google",
              "is-blue",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_64aa2754-9bf7-46f3-b439-941a34cfce31-274bc973"
            )}
            width="auto"
            height="10"
            loading="lazy"
            src={iconsSocialIconImage}
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon",
              "icon-github",
              "is-white",
              "w-node-d858d2f5-7f7d-0ffa-0078-a347c27cd60a-274bc973",
              _activeStyleVariant
            )}
            id={_utils.cx(_styles, "LinkedIn")}
            width="30"
            height="30"
            loading="lazy"
            alt="Github Icon"
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687e1baac9595cff3b3ad2d1_github-filled.svg"
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon",
              "icon-github",
              "is-dark-grey",
              "w-node-_8b01ff82-f62e-d105-8d97-c56f274bc977-274bc973",
              _activeStyleVariant
            )}
            id={_utils.cx(_styles, "Github")}
            width="20"
            height="20"
            loading="lazy"
            alt="Google Icon"
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687e1baac9595cff3b3ad2d1_github-filled.svg"
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon",
              "icon-linkedin",
              "is-white",
              "w-node-_8b01ff82-f62e-d105-8d97-c56f274bc978-274bc973",
              _activeStyleVariant
            )}
            id={_utils.cx(_styles, "LinkedIn")}
            width="30"
            height="30"
            loading="lazy"
            alt="Github Icon"
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687e1baaaf010d5396993155_linkedin-filled.svg"
          />
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon",
              "icon-google",
              "is-green",
              "w-node-_58131263-b8b4-6bda-a60e-d6fe04b0649f-274bc973",
              _activeStyleVariant
            )}
            id={_utils.cx(_styles, "Github")}
            width="20"
            height="20"
            loading="lazy"
            alt="Google Icon"
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687e1baaaf010d5396993155_linkedin-filled.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "social-label-text",
            _activeStyleVariant
          )}
          id={_utils.cx(
            _styles,
            "w-node-_8b01ff82-f62e-d105-8d97-c56f274bc979-274bc973"
          )}
          tag="div"
          data-ms-auth-connected-text="Disconnect Google"
        >
          {buttonButtonText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "ms-disconnect-link",
            _activeStyleVariant
          )}
          id={_utils.cx(
            _styles,
            "w-node-_8b01ff82-f62e-d105-8d97-c56f274bc97b-274bc973"
          )}
          tag="div"
          data-ms-auth-disconnect="true"
        >
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "icon",
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
            src="https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d/687e1cf89f5201e48c5104d4_close-x.svg"
            {...runtimeProps}
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
