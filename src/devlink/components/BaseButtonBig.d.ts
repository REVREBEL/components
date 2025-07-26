import * as React from "react";
import * as Types from "./types";

declare function BaseButtonBig(props: {
  as?: React.ElementType;
  colorStyleButtonSettings?: "Normal" | "Outline" | "Inverse";
  id?: Types.Basic.IdTextInput;
  visibility?: Types.Visibility.VisibilityConditions;
  link?: Types.Basic.Link;
  buttonLabel?: React.ReactNode;
}): React.JSX.Element;
