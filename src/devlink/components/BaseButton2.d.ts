import * as React from "react";
import * as Types from "./types";

declare function BaseButton2(props: {
  as?: React.ElementType;
  buttonVisible?: Types.Visibility.VisibilityConditions;
  buttonButtonId?: Types.Basic.IdTextInput;
  buttonButtonLink?: Types.Basic.Link;
  buttonButtonText?: React.ReactNode;
  buttonStyleButtonColor?:
    | "Normal"
    | "Outline"
    | "Inverse"
    | "Disabled"
    | "Disabled Outline"
    | "Alert"
    | "Alert Outline";
}): React.JSX.Element;
