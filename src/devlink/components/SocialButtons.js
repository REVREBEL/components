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
    "Google Light": "w-variant-015d1546-5854-057d-cded-611eb4b3846c",
    "Linkedin Dark": "w-variant-015d1546-5854-057d-cded-611eb4b3846d",
    "Linked Light": "w-variant-015d1546-5854-057d-cded-611eb4b3846e",
    "Github Dark": "w-variant-015d1546-5854-057d-cded-611eb4b3846f",
    "Github Light": "w-variant-015d1546-5854-057d-cded-611eb4b38470",
    "Microsoft Dark": "w-variant-015d1546-5854-057d-cded-611eb4b38471",
    "Microsoft Light": "w-variant-015d1546-5854-057d-cded-611eb4b38472",
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
          "w-node-_553ca35c-f93a-61db-f52f-2688db730672-db730671"
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
            "w-node-_553ca35c-f93a-61db-f52f-2688db730673-db730671"
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
              "w-node-_553ca35c-f93a-61db-f52f-2688db730674-db730671"
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
              "is-blue-2",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-_553ca35c-f93a-61db-f52f-2688db730675-db730671"
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
              "w-node-_553ca35c-f93a-61db-f52f-2688db730676-db730671",
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
              "w-node-_553ca35c-f93a-61db-f52f-2688db730677-db730671",
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
              "w-node-_553ca35c-f93a-61db-f52f-2688db730678-db730671",
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
              "w-node-_553ca35c-f93a-61db-f52f-2688db730679-db730671",
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
            "w-node-_553ca35c-f93a-61db-f52f-2688db73067a-db730671"
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
            "w-node-_553ca35c-f93a-61db-f52f-2688db73067b-db730671"
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
