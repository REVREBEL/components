import * as React from "react";

declare function Card(props: {
  as?: React.ElementType;
  variant?:
    | "Light"
    | "Light Inverse"
    | "Dark"
    | "Dark Inverse"
    | "Grey"
    | "Grey Inverse";
}): React.JSX.Element;
