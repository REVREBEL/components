"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LastNameInput2.module.css";

export function LastNameInput2({
  as: _Component = _Builtin.FormTextInput,
  visibility = true,
  id = "lastName-002",
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-67db0e05-3c5f-c9a3-9bae-b4d0d40a007e",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_input-8", _activeStyleVariant)}
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
