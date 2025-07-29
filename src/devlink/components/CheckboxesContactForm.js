"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CheckboxesContactForm.module.css";

export function CheckboxesContactForm({
  as: _Component = _Builtin.FormWrapper,
}) {
  return (
    <_Component>
      <_Builtin.Block
        className={_utils.cx(_styles, "sg_headline-container")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "sg_section-headline-wrappe")}
          tag="h5"
        >
          <_Builtin.Span className={_utils.cx(_styles, "sp-3")} id="hex-colors">
            {"Contact Form"}
          </_Builtin.Span>
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "contact-page-form")}
        name="wf-form-Checkboxes-Contact-Form"
        data-name="Checkboxes Contact Form"
        method="get"
        id="wf-form-Checkboxes-Contact-Form"
      >
        <_Builtin.FormBlockLabel
          className={_utils.cx(_styles, "contact_form-label")}
          htmlFor="name"
        >
          {"OPtiONSDESCRIPtiON"}
        </_Builtin.FormBlockLabel>
        <_Builtin.Block
          className={_utils.cx(_styles, "checkbox_content-grid")}
          tag="div"
        >
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(_styles, "checkbox_container", "text-blue-5")}
          >
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "checkbox_blue")}
              type="checkbox"
              required={false}
              checked={false}
              form={{
                type: "checkbox-input",
                name: "",
              }}
              inputType="custom"
              customClassName="w-checkbox-input--inputType-custom"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox_label")}
            >
              {"Blue Checkbox"}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(
              _styles,
              "checkbox_container",
              "text-purple-7"
            )}
          >
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "checkbox-purple")}
              type="checkbox"
              required={false}
              checked={false}
              form={{
                type: "checkbox-input",
                name: "",
              }}
              inputType="custom"
              customClassName="w-checkbox-input--inputType-custom"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox_label")}
            >
              {"Purple Checkbox"}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(_styles, "checkbox_container", "text-green-7")}
          >
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "checkbox-green-2")}
              type="checkbox"
              required={false}
              checked={false}
              form={{
                type: "checkbox-input",
                name: "",
              }}
              inputType="custom"
              customClassName="w-checkbox-input--inputType-custom"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox_label")}
            >
              {"Dark Orange Checkbox"}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(
              _styles,
              "checkbox_container",
              "text-lightblue-2"
            )}
          >
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "checkbox_lightblue")}
              type="checkbox"
              required={false}
              checked={false}
              form={{
                type: "checkbox-input",
                name: "",
              }}
              inputType="custom"
              customClassName="w-checkbox-input--inputType-custom"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox_label")}
            >
              {"Light Blue Checkbox"}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(
              _styles,
              "checkbox_container",
              "text-darkorange"
            )}
          >
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "checkbox-darkorange")}
              type="checkbox"
              required={false}
              checked={false}
              form={{
                type: "checkbox-input",
                name: "",
              }}
              inputType="custom"
              customClassName="w-checkbox-input--inputType-custom"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox_label")}
            >
              {"Dark Orange Checkbox"}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(_styles, "checkbox_container", "text-red-5")}
          >
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "checkbox-red")}
              type="checkbox"
              required={false}
              checked={false}
              form={{
                type: "checkbox-input",
                name: "",
              }}
              inputType="custom"
              customClassName="w-checkbox-input--inputType-custom"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox_label")}
            >
              {"Red Checkbox"}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(
              _styles,
              "checkbox_container",
              "text-orange-5"
            )}
          >
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "checkbox-orange")}
              type="checkbox"
              required={false}
              checked={false}
              form={{
                type: "checkbox-input",
                name: "",
              }}
              inputType="custom"
              customClassName="w-checkbox-input--inputType-custom"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox_label")}
            >
              {"Orange Checkbox"}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
          <_Builtin.FormCheckboxWrapper
            className={_utils.cx(
              _styles,
              "checkbox_container",
              "text-yellow-5"
            )}
          >
            <_Builtin.FormCheckboxInput
              className={_utils.cx(_styles, "checkbox-yellow")}
              type="checkbox"
              required={false}
              checked={false}
              form={{
                type: "checkbox-input",
                name: "",
              }}
              inputType="custom"
              customClassName="w-checkbox-input--inputType-custom"
            />
            <_Builtin.FormInlineLabel
              className={_utils.cx(_styles, "checkbox_label")}
            >
              {"Yellow Checkbox"}
            </_Builtin.FormInlineLabel>
          </_Builtin.FormCheckboxWrapper>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-green-6")}
            id={_utils.cx(
              _styles,
              "w-node-ae9a7b6d-a06e-29f6-8fb7-6812daed6611-daed65e8"
            )}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "sg_section-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "sg_section_content-container")}
            tag="div"
          >
            <_Builtin.FormBlockLabel
              className={_utils.cx(_styles, "contact_form-label")}
              htmlFor="name"
            >
              {"Details"}
            </_Builtin.FormBlockLabel>
            <_Builtin.Block
              className={_utils.cx(_styles, "contact_form-details")}
              tag="article"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "forms_grid-2col-2")}
                id={_utils.cx(
                  _styles,
                  "w-node-ae9a7b6d-a06e-29f6-8fb7-6812daed6617-daed65e8"
                )}
                tag="div"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "input_firstname-2")}
                  autoFocus={false}
                  maxLength={256}
                  name="firstName"
                  data-name="firstName"
                  placeholder="First Name"
                  type="text"
                  disabled={false}
                  required={true}
                  autoComplete="given-name"
                  wized="input_firstname"
                  id="contact-form-firstname-light-placeholder"
                />
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "input_lastname-2")}
                  autoFocus={false}
                  maxLength={256}
                  name="lastName"
                  data-name="lastName"
                  placeholder="Last Name"
                  type="text"
                  disabled={false}
                  required={true}
                  autoComplete="family-name"
                  wized="input_lastname"
                  id="contact-form-lastname-light-placeholder"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "forms_grid-2col-2")}
                id={_utils.cx(
                  _styles,
                  "w-node-ae9a7b6d-a06e-29f6-8fb7-6812daed661a-daed65e8"
                )}
                tag="div"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "input_email-2")}
                  autoFocus={false}
                  maxLength={256}
                  name="email"
                  data-name="email"
                  placeholder="Email Address"
                  type="email"
                  disabled={false}
                  required={true}
                  autoComplete="email"
                  wized="input_email"
                  id="contact-form-email-light-placeholder"
                />
                <_Builtin.FormTextInput
                  className={_utils.cx(
                    _styles,
                    "input_phone-2",
                    "w-node-ae9a7b6d-a06e-29f6-8fb7-6812daed661c-daed65e8"
                  )}
                  id={_utils.cx(_styles, "contact-form-tel-light-placeholder")}
                  autoFocus={false}
                  maxLength={256}
                  name="tel"
                  data-name="tel"
                  placeholder="Phone Number"
                  type="tel"
                  disabled={false}
                  required={true}
                  autoComplete="tel-area-code"
                  user-input-phone-number="ca,gb,us"
                  wized="input_phone"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "forms_grid-2col-2")}
                tag="div"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "input_hotel-company-2")}
                  autoFocus={true}
                  maxLength={256}
                  name="hotelCompanyName-3"
                  data-name="Hotel Company Name 3"
                  placeholder="Hotel or Company Name"
                  type="text"
                  disabled={false}
                  required={true}
                  autoComplete="organization"
                  wized="input_hotel_company"
                  id="contact-form-hotel-company-name"
                />
                <_Builtin.FormTextInput
                  className={_utils.cx(
                    _styles,
                    "input_website-2",
                    "w-node-ae9a7b6d-a06e-29f6-8fb7-6812daed661f-daed65e8"
                  )}
                  id={_utils.cx(
                    _styles,
                    "contact-form-website-light-placeholder"
                  )}
                  autoFocus={true}
                  maxLength={256}
                  name="Website"
                  data-name="Website"
                  placeholder="Website"
                  type="text"
                  disabled={false}
                  required={true}
                  autoComplete="url"
                  wized="input_website"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "form_field-container",
                  "margin-top-50rem"
                )}
                tag="div"
              >
                <_Builtin.FormTextarea
                  className={_utils.cx(_styles, "input_message-2", "is-text")}
                  name="Message"
                  maxLength={5000}
                  data-name="Message"
                  placeholder="we'll reach out shortly, to help us prepare are there any more details you'd like to share prior?"
                  required={false}
                  autoFocus={false}
                  id="contact-form-message"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "contact_form-button-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-ae9a7b6d-a06e-29f6-8fb7-6812daed6622-daed65e8"
                )}
                tag="div"
              >
                <_Builtin.FormButton
                  className={_utils.cx(
                    _styles,
                    "button-13",
                    "is_xlarge",
                    "is_outline",
                    "text-multicolor-h"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-ae9a7b6d-a06e-29f6-8fb7-6812daed6623-daed65e8"
                  )}
                  type="submit"
                  value="[ Send now ]"
                  data-wait="Please wait..."
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage
        className={_utils.cx(_styles, "newsletter_sucess-message-2")}
      >
        <_Builtin.Block tag="div">
          {"Thank you! Your submission has been received!"}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage
        className={_utils.cx(_styles, "error-message-8", "darker")}
      >
        <_Builtin.Block tag="div">
          {"Oops! Something went wrong while submitting the form."}
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
