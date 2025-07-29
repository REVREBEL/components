"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InputSelection2.module.css";

export function InputSelection2({
  as: _Component = _Builtin.FormSelect,
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-89890273-67c9-372d-4190-20a2f4a5bb03",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "form_input-7",
        "is-select-4",
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
