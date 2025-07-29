"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NewsleterSignupBlue.module.css";

export function NewsleterSignupBlue({
  as: _Component = _Builtin.Section,
  newsletterTextFieldVisibility = true,
  successTextBlock = "You're on the list REBEL, standby for our next transmission. Luke Out.",
  textBlockText = "Well this is embarrassing. I've already requested to have R2D2 sent over here immediately. In the meantime, please feel free to send a note directly to hellp@revrebel.io.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "newsletter_section-2")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "newsletter_wrapper-2")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "newsletter_subheadline-2",
            "text-multicolor-h-2"
          )}
          tag="h6"
        >
          {"in-the-know"}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(_styles, "newsletter_headline-2")}
          tag="h2"
        >
          {"Sign up. Be Inspired. "}
          <br />
          {"Generate Revenue."}
        </_Builtin.Heading>
        <_Builtin.FormWrapper
          className={_utils.cx(_styles, "newsletter_form-block-2")}
          id="travel-tends-newsletter-signup"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "newsletter_text-2")}
            tag="div"
          >
            {
              "Discover innovative revenue generation ideas for your property by joining a community of like-minded revenue rebels."
            }
          </_Builtin.Block>
          <_Builtin.FormForm
            className={_utils.cx(
              _styles,
              "travel-trends_newsletter-signup-form-2"
            )}
            name="wf-form-Travel-Trends-Newsletter-Signup"
            data-name="Travel Trends Newsletter Signup"
            method="get"
            id="travel-trends-newsletter-signup"
          >
            {newsletterTextFieldVisibility ? (
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "newsletter_text-field-2")}
                name="name-2"
                maxLength={256}
                data-name="Name 2"
                placeholder="Enter your email"
                disabled={false}
                type="email"
                required={true}
                autoFocus={false}
                id="name-2"
              />
            ) : null}
            <_Builtin.FormButton
              className={_utils.cx(_styles, "button-subscribe")}
              type="submit"
              value="Subscribe"
            />
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage
            className={_utils.cx(_styles, "getintouch_success-message-2")}
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "newsletter_success-message-text-2"
              )}
              tag="div"
            >
              {successTextBlock}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage
            className={_utils.cx(_styles, "newsletter_error-message-2")}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "newsletter_error-message-text-2")}
              tag="div"
            >
              {textBlockText}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
