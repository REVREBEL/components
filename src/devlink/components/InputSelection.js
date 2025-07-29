"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InputSelection.module.css";

export function InputSelection({
  as: _Component = _Builtin.FormSelect,
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-2f27eac2-433b-39c3-8dca-cb67eae41e25",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "form_input",
        "is-select",
        _activeStyleVariant
      )}
      name="field-4"
      data-name="Field 4"
      required={false}
      multiple={false}
      id="field-4"
      options={[
        {
          t: "select one",
          v: "",
        },
        {
          t: "first choice",
          v: "First",
        },
        {
          t: "second choice",
          v: "Second",
        },
        {
          t: "third choice",
          v: "Third",
        },
      ]}
    />
  );
}
