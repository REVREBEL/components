"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormsMessageInput.module.css";

export function FormsMessageInput({
  as: _Component = _Builtin.FormTextarea,
  variant = "Base",
  id = "field-5",
  visibility = true,
}) {
  const _styleVariantMap = {
    Base: "",
    Dark: "w-variant-20439127-d4a4-fe00-fc38-3098e54bd863",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "form_input",
        "is-text-area",
        _activeStyleVariant
      )}
      required={false}
      autoFocus={false}
      placeholder="Anything else to add?"
      maxLength={5000}
      name="field-5"
      data-name="Field 5"
      id={id}
    />
  ) : null;
}
