import * as React from "react";
import * as Types from "./types";

declare function BaseButtonBig2(props: {
  as?: React.ElementType;
  id?: Types.Basic.IdTextInput;
  visibility?: Types.Visibility.VisibilityConditions;
  link?: Types.Basic.Link;
  buttonLabel?: React.ReactNode;
  colorStyleButtonSettings?: "Normal" | "Outline" | "Inverse";
}): React.JSX.Element;
