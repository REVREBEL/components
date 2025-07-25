"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FirstNameInput.module.css";

export function FirstNameInput({
  as: _Component = _Builtin.FormTextInput,
  variant = "Light",
  visibility = true,
  id = "firstName-002",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-7004af7f-fa73-7b60-65ce-524a31f52812",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "form_input", _activeStyleVariant)}
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
