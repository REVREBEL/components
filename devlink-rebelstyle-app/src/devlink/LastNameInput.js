"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LastNameInput.module.css";

export function LastNameInput({
  as: _Component = _Builtin.FormTextInput,
  variant = "Light",
  visibility = true,
  id = "lastName-002",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-b7c2bbd7-3446-75f5-354d-c24f808224eb",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_input", _activeStyleVariant)}
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
