"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FirstNameInput2.module.css";

export function FirstNameInput2({
  as: _Component = _Builtin.FormTextInput,
  visibility = true,
  id = "firstName-002",
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-7b6d122f-4df5-7ec0-ff10-c9d64357fef3",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_input-9", _activeStyleVariant)}
      name="firstName"
      maxLength={256}
      data-name="firstName"
      placeholder="First Name"
      disabled={false}
      type="text"
      required={true}
      autoFocus={false}
      autoComplete="given-name"
      wized="input_firstname"
      id={id}
    />
  ) : null;
}
