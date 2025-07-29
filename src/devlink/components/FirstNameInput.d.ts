import * as React from "react";
import * as Types from "./types";

declare function FirstNameInput(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  id?: Types.Basic.IdTextInput;
  variant?: "Light" | "Dark";
}): React.JSX.Element;
