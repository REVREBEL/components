import * as React from "react";
import * as Types from "./types";

declare function GetInTouchMultiColor(props: {
  as?: React.ElementType;
  buttonLink?: Types.Basic.Link;
  buttonId?: Types.Basic.IdTextInput;
  buttonCtaText?: React.ReactNode;
  backgroundColorButtonStyle?: "MultiColor Background" | "Multicolor Outline";
}): React.JSX.Element;
