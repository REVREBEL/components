import * as React from "react";
import * as Types from "./types";

declare function IconButton(props: {
  as?: React.ElementType;
  buttonLink?: Types.Basic.Link;
  buttonId?: Types.Basic.IdTextInput;
  buttonCtaText?: React.ReactNode;
  variant?: "Blue" | "Blue Outline" | "Red" | "Red Outline";
}): React.JSX.Element;
