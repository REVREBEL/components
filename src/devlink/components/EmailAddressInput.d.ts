import * as React from "react";
import * as Types from "./types";

declare function EmailAddressInput(props: {
  as?: React.ElementType;
  id?: Types.Basic.IdTextInput;
  visibility?: Types.Visibility.VisibilityConditions;
  variant?: "Light" | "Dark";
}): React.JSX.Element;
