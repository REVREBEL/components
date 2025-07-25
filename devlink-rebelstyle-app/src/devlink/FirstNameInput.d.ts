import * as React from "react";
import * as Types from "./types";

declare function FirstNameInput(props: {
  as?: React.ElementType;
  variant?: "Light" | "Dark";
  visibility?: Types.Visibility.VisibilityConditions;
  id?: Types.Basic.IdTextInput;
}): React.JSX.Element;
