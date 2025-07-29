"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FirstNameInput.module.css";

export function FirstNameInput({
  as: _Component = _Builtin.FormTextInput,
  visibility = true,
  id = "firstName-002",
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-b139205e-b31c-fcaf-bda4-db512d4915d9",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "form_input",
        "is-half-size",
        "is-address",
        _activeStyleVariant
      )}
      name="firstName"
      maxLength={256}
      data-name="firstName"
      placeholder="First name"
      disabled={false}
      type="text"
      required={true}
      autoFocus={false}
      autoComplete="address-line1"
      wized="input_street_address"
      id={id}
    />
  ) : null;
}
