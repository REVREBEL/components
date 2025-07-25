import * as React from "react";
import * as Types from "./types";

declare function EmailAddressInput(props: {
  as?: React.ElementType;
  variant?: "Light" | "Dark";
  id?: Types.Basic.IdTextInput;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
