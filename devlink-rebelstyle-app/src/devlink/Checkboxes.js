"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Checkboxes.module.css";

export function Checkboxes({
  as: _Component = _Builtin.Block,
  checkboxStyleCheckboxStyle = "Light",
  checkboxIDsIdCheckboxLabel1,
  checkboxIDsIdCheckboxLabel4,
  checkboxLabelsCheckbox1Label = "Choice 1",
  checkboxIDsIdCheckboxLabel2,
  checkboxIDsIdCheckboxLabel3,
  checkboxLabelsCheckbox2Label = "Choice 2",
  checkboxesVisibleCheckbox1Visible = true,
  checkboxesVisibleCheckbox2Visible = true,
  checkboxesVisibleCheckbox3Visible = true,
  checkboxesVisibleCheckbox4Visible = true,
  checkboxLabelsCheckbox3Label = "Choice 3",
  checkboxLabelVisibleCheckbox1LabelVisible = true,
  checkboxLabelVisibleCheckbox2LabelVisible = true,
  checkboxLabelVisibleCheckbox3LabelVisible = true,
  checkboxLabelVisibleCheckbox4LabelVisible = true,
  checkboxLabelsCheckbox4Label = "Choice 4",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-abde65a5-827b-2954-bfe9-bebdfbfec6a3",
  };

  const _activeStyleVariant = _styleVariantMap[checkboxStyleCheckboxStyle];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "forms_checkbox-flex-wrapper",
        _activeStyleVariant
      )}
      tag="div"
    >
      <_Builtin.FormCheckboxWrapper
        className={_utils.cx(
          _styles,
          "form_checkbox-wrapper",
          _activeStyleVariant
        )}
        id={_utils.cx(
          _styles,
          "w-node-_0d55cd71-cadc-6e6b-e192-afe4ba4ac4c2-ba4ac4c1"
        )}
      >
        {checkboxesVisibleCheckbox1Visible ? (
          <_Builtin.FormCheckboxInput
            className={_utils.cx(_styles, "form_checkbox", _activeStyleVariant)}
            type="checkbox"
            name="Checkbox-1"
            data-name="Checkbox 1"
            required={false}
            checked={false}
            id="Checkbox-1"
            form={{
              type: "checkbox-input",
              name: "Checkbox 1",
            }}
            inputType="custom"
            customClassName="w-checkbox-input--inputType-custom"
          />
        ) : null}
        {checkboxLabelVisibleCheckbox1LabelVisible ? (
          <_Builtin.FormInlineLabel
            className={_utils.cx(_styles, "form_label", _activeStyleVariant)}
            htmlFor="checkbox-6"
            id={checkboxIDsIdCheckboxLabel1}
          >
            {checkboxLabelsCheckbox1Label}
          </_Builtin.FormInlineLabel>
        ) : null}
      </_Builtin.FormCheckboxWrapper>
      <_Builtin.FormCheckboxWrapper
        className={_utils.cx(
          _styles,
          "form_checkbox-wrapper",
          _activeStyleVariant
        )}
        id={_utils.cx(
          _styles,
          "w-node-_0d55cd71-cadc-6e6b-e192-afe4ba4ac4c6-ba4ac4c1"
        )}
      >
        {checkboxesVisibleCheckbox3Visible ? (
          <_Builtin.FormCheckboxInput
            className={_utils.cx(_styles, "form_checkbox", _activeStyleVariant)}
            type="checkbox"
            name="Checkbox-3"
            data-name="Checkbox 3"
            required={false}
            checked={false}
            id="Checkbox-3"
            form={{
              type: "checkbox-input",
              name: "Checkbox 3",
            }}
            inputType="custom"
            customClassName="w-checkbox-input--inputType-custom"
          />
        ) : null}
        {checkboxLabelVisibleCheckbox3LabelVisible ? (
          <_Builtin.FormInlineLabel
            className={_utils.cx(_styles, "form_label", _activeStyleVariant)}
            htmlFor="checkbox-6"
            id={checkboxIDsIdCheckboxLabel3}
          >
            {checkboxLabelsCheckbox3Label}
          </_Builtin.FormInlineLabel>
        ) : null}
      </_Builtin.FormCheckboxWrapper>
      <_Builtin.FormCheckboxWrapper
        className={_utils.cx(
          _styles,
          "form_checkbox-wrapper",
          _activeStyleVariant
        )}
        id={_utils.cx(
          _styles,
          "w-node-_0d55cd71-cadc-6e6b-e192-afe4ba4ac4ca-ba4ac4c1"
        )}
      >
        {checkboxesVisibleCheckbox2Visible ? (
          <_Builtin.FormCheckboxInput
            className={_utils.cx(_styles, "form_checkbox", _activeStyleVariant)}
            type="checkbox"
            name="Checkbox-2"
            data-name="Checkbox 2"
            required={false}
            checked={false}
            id="Checkbox-2"
            form={{
              type: "checkbox-input",
              name: "Checkbox 2",
            }}
            inputType="custom"
            customClassName="w-checkbox-input--inputType-custom"
          />
        ) : null}
        {checkboxLabelVisibleCheckbox2LabelVisible ? (
          <_Builtin.FormInlineLabel
            className={_utils.cx(_styles, "form_label", _activeStyleVariant)}
            htmlFor="checkbox-6"
            id={checkboxIDsIdCheckboxLabel2}
          >
            {checkboxLabelsCheckbox2Label}
          </_Builtin.FormInlineLabel>
        ) : null}
      </_Builtin.FormCheckboxWrapper>
      <_Builtin.FormCheckboxWrapper
        className={_utils.cx(
          _styles,
          "form_checkbox-wrapper",
          _activeStyleVariant
        )}
        id={_utils.cx(
          _styles,
          "w-node-_0d55cd71-cadc-6e6b-e192-afe4ba4ac4ce-ba4ac4c1"
        )}
      >
        {checkboxesVisibleCheckbox4Visible ? (
          <_Builtin.FormCheckboxInput
            className={_utils.cx(_styles, "form_checkbox", _activeStyleVariant)}
            type="checkbox"
            name="Checkbox-4"
            data-name="Checkbox 4"
            required={false}
            checked={false}
            id="Checkbox-4"
            form={{
              type: "checkbox-input",
              name: "Checkbox 4",
            }}
            inputType="custom"
            customClassName="w-checkbox-input--inputType-custom"
          />
        ) : null}
        {checkboxLabelVisibleCheckbox4LabelVisible ? (
          <_Builtin.FormInlineLabel
            className={_utils.cx(_styles, "form_label", _activeStyleVariant)}
            htmlFor="checkbox-6"
            id={checkboxIDsIdCheckboxLabel4}
          >
            {checkboxLabelsCheckbox4Label}
          </_Builtin.FormInlineLabel>
        ) : null}
      </_Builtin.FormCheckboxWrapper>
    </_Component>
  );
}
