"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SimpleDatePicker.module.css";

export function SimpleDatePicker({
  as: _Component = _Builtin.Block,
  submitButtonText = "Submit",
  submitButtonLoadingText = "Please wait...",
  selectDateLabelText = "Select Date:",
  emailAddressText = "Email Address:",
  emailAddressId = "emailAddress",
  datePickerVisible = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "form-div", "card-2")} tag="div">
      <_Builtin.FormWrapper
        className={_utils.cx(_styles, "simple-date_form-block")}
      >
        <_Builtin.FormForm
          className={_utils.cx(_styles, "simple-date_form")}
          name="email-form"
          data-name="Email Form"
          method="get"
          id="email-form"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input_field-3")}
            name="name"
            maxLength={256}
            data-name="Name"
            placeholder="email address"
            disabled={false}
            type="email"
            required={false}
            autoFocus={false}
            id={emailAddressId}
          />
          {datePickerVisible ? (
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "input_field-3")}
              name="Date"
              maxLength={256}
              data-name="Date"
              placeholder="select a date"
              disabled={false}
              type="text"
              required={true}
              autoFocus={false}
              id="datepicker"
            />
          ) : null}
          <_Builtin.FormButton
            className={_utils.cx(_styles, "button_submitt")}
            type="submit"
            value={submitButtonText}
            data-wait={submitButtonLoadingText}
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage
          className={_utils.cx(_styles, "success-message")}
        >
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage
          className={_utils.cx(_styles, "error-message")}
        >
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
