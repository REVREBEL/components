"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EmailAddressInput.module.css";

export function EmailAddressInput({
  as: _Component = _Builtin.FormTextInput,
  variant = "Light",
  id = "email-002",
  visibility = true,
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-4f88d91f-893f-bbae-04e6-912148268bfc",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_input", _activeStyleVariant)}
      name="email"
      maxLength={256}
      data-name="email"
      placeholder="Email Address"
      disabled={false}
      type="email"
      required={true}
      autoFocus={false}
      autoComplete="email"
      wized="input_email"
      id={id}
    />
  ) : null;
}
