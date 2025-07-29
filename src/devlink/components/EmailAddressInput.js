"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EmailAddressInput.module.css";

export function EmailAddressInput({
  as: _Component = _Builtin.FormTextInput,
  id = "email-002",
  visibility = true,
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-445d7a8a-d93a-6a23-1b39-59eb9d969a2c",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "form_input",
        "is-half-size",
        "is-email",
        _activeStyleVariant
      )}
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
