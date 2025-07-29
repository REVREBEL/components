"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LastNameInput.module.css";

export function LastNameInput({
  as: _Component = _Builtin.FormTextInput,
  visibility = true,
  id = "lastName-002",
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-73688e7e-a89b-588e-34aa-f646d4ff1f83",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "form_input",
        "is-half-size",
        _activeStyleVariant
      )}
      name="lastName"
      maxLength={256}
      data-name="lastName"
      placeholder="Last Name"
      disabled={false}
      type="text"
      required={true}
      autoFocus={false}
      autoComplete="family-name"
      wized="input_lastname"
      id={id}
    />
  ) : null;
}
