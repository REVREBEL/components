import * as React from "react";
import * as Types from "./types";

declare function ColorButton2(props: {
  as?: React.ElementType;
  buttonVisible?: Types.Visibility.VisibilityConditions;
  buttonButtonId?: Types.Basic.IdTextInput;
  buttonButtonText?: React.ReactNode;
  buttonButtonLink?: Types.Basic.Link;
  buttonStyleButtonColor?:
    | "Blue"
    | "Blue Outline"
    | "White"
    | "White Outline"
    | "Purple"
    | "Purple Outline"
    | "Green"
    | "Green Outline"
    | "Yellow"
    | "Yellow Outline";
}): React.JSX.Element;
