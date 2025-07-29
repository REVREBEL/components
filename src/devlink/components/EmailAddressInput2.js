"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EmailAddressInput2.module.css";

export function EmailAddressInput2({
  as: _Component = _Builtin.FormTextInput,
  id = "email-002",
  visibility = true,
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-16e49fc9-71e0-95bf-26b6-25479ced9a3f",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_input-6", _activeStyleVariant)}
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
