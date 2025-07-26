import * as React from "react";
import * as Types from "./types";

declare function FormsMessageInput(props: {
  as?: React.ElementType;
  variant?: "Base" | "Dark";
  id?: Types.Basic.IdTextInput;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
