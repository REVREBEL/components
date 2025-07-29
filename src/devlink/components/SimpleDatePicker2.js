"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SimpleDatePicker2.module.css";

export function SimpleDatePicker2({
  as: _Component = _Builtin.Block,
  submitButtonText = "Submit",
  submitButtonLoadingText = "Please wait...",
  selectDateLabelText = "Select Date:",
  emailAddressText = "Email Address:",
}) {
  return (
    <_Component className={_utils.cx(_styles, "form-div-2")} tag="div">
      <_Builtin.FormWrapper
        className={_utils.cx(_styles, "simple-date_form-block-2")}
      >
        <_Builtin.FormForm
          className={_utils.cx(_styles, "simple-date_form-2")}
          name="email-form"
          data-name="Email Form"
          method="get"
          id="email-form"
        >
          <_Builtin.FormBlockLabel
            className={_utils.cx(_styles, "simple-date_field-label-2")}
            htmlFor="name"
          >
            {emailAddressText}
          </_Builtin.FormBlockLabel>
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input_field-4")}
            name="name"
            maxLength={256}
            data-name="Name"
            disabled={false}
            type="email"
            required={false}
            autoFocus={false}
            id="name"
          />
          <_Builtin.FormBlockLabel
            className={_utils.cx(_styles, "simple-date_field-label-2")}
            htmlFor="datepicker"
          >
            {selectDateLabelText}
          </_Builtin.FormBlockLabel>
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input_field-4")}
            name="Date"
            maxLength={256}
            data-name="Date"
            disabled={false}
            type="text"
            required={true}
            autoFocus={false}
            id="datepicker"
          />
          <_Builtin.FormButton
            className={_utils.cx(_styles, "submit-button")}
            type="submit"
            value={submitButtonText}
            data-wait={submitButtonLoadingText}
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage
          className={_utils.cx(_styles, "success-message-3")}
        >
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage
          className={_utils.cx(_styles, "error-message-2")}
        >
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
