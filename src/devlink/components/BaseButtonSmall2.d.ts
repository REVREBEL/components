import * as React from "react";
import * as Types from "./types";

declare function BaseButtonSmall2(props: {
  as?: React.ElementType;
  buttonLabel?: React.ReactNode;
  link?: Types.Basic.Link;
  visibility?: Types.Visibility.VisibilityConditions;
  id?: Types.Basic.IdTextInput;
  colorStyleButtonSettings?: "Normal" | "Outline" | "Inverse";
}): React.JSX.Element;
