"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewsletterSignup.module.css";

export function NewsletterSignup({
  as: _Component = _Builtin.Section,
  formId = "travel-tends-newsletter-signup",
  newsletterSignupEyebrowText = "in-the-know",
  newsletterSignupHeadlineTag = "h4",
  newsletterSignupHeadlineText = (
    <>
      {"Sign up. Be Inspired. "}
      <br />
      {"Generate Revenue."}
    </>
  ),
  newsletterSignupBodyParagraphText = "Discover innovative revenue generation ideas for your property by joining a community of like-minded revenue rebels.",
  newsletterSignupSubmitButtonCtaText = "[ Subscribe ] ",
  resultMessagingSuccessMessageText = "You're on the list REBEL, standby for our next transmission. Luke Out.",
  resultMessagingErrorMessageText = (
    <>
      {
        "Well, this is embarrassing. We've sent our droid, R2D2, to take a look. "
      }
      <br />
      {"In the meantime, send a note directly to "}
      {" we're here to help."}
    </>
  ),
  colorStyleChooseAMode = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-1fd7159b-087e-3714-d70d-8344c785e934",
  };

  const _activeStyleVariant = _styleVariantMap[colorStyleChooseAMode];

  return (
    <_Component
      className={_utils.cx(_styles, "newsletter_section", _activeStyleVariant)}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "newsletter_wrapper",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "newsletter_subheadline",
            "is-rebel",
            _activeStyleVariant
          )}
          tag="div"
        >
          {newsletterSignupEyebrowText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "newsletter_subheadline",
            "is-rebel",
            "text-orange-yellow",
            _activeStyleVariant
          )}
          tag="div"
        >
          {newsletterSignupEyebrowText}
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "newsletter_headline",
            _activeStyleVariant
          )}
          tag={newsletterSignupHeadlineTag}
        >
          {newsletterSignupHeadlineText}
        </_Builtin.Heading>
        <_Builtin.FormWrapper
          className={_utils.cx(
            _styles,
            "newsletter_form-block",
            _activeStyleVariant
          )}
          autoComplete="email"
          id={formId}
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "newsletter_text",
              _activeStyleVariant
            )}
            tag="div"
          >
            {newsletterSignupBodyParagraphText}
          </_Builtin.Block>
          <_Builtin.FormForm
            className={_utils.cx(
              _styles,
              "travel-trends_newsletter-signup-form",
              _activeStyleVariant
            )}
            name="wf-form-Travel-Trends-Newsletter-Signup"
            data-name="Travel Trends Newsletter Signup"
            method="get"
            id="travel-trends-newsletter-signup"
          >
            <_Builtin.FormTextInput
              className={_utils.cx(
                _styles,
                "newsletter_text-field",
                _activeStyleVariant
              )}
              name="Email-Address"
              maxLength={256}
              data-name="Email Address"
              placeholder="Enter your email"
              disabled={false}
              type="email"
              required={true}
              autoFocus={false}
              id="email-address"
            />
            <_Builtin.FormButton
              className={_utils.cx(
                _styles,
                "button",
                "is-outline",
                "is-small",
                "margin-bottom_small",
                _activeStyleVariant
              )}
              id={_utils.cx(
                _styles,
                "w-node-_0cde8cca-b1a7-e3cd-dc89-92e7a0b6609d-a0b66090"
              )}
              type="submit"
              data-wait="Beaming Data... Standby"
              value={newsletterSignupSubmitButtonCtaText}
            />
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage
            className={_utils.cx(
              _styles,
              "getintouch_success-message",
              _activeStyleVariant
            )}
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "newsletter_success-message-text",
                _activeStyleVariant
              )}
              tag="div"
            >
              {resultMessagingSuccessMessageText}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage
            className={_utils.cx(
              _styles,
              "newsletter_error-message",
              _activeStyleVariant
            )}
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "newsletter_error-message-text",
                _activeStyleVariant
              )}
              tag="div"
            >
              {resultMessagingErrorMessageText}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
