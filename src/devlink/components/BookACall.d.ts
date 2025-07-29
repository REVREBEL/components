import * as React from "react";
import * as Types from "./types";

declare function BookACall(props: {
  as?: React.ElementType;
  buttonLink?: Types.Basic.Link;
  buttonCtaText?: React.ReactNode;
}): React.JSX.Element;
