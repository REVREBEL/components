import * as React from "react";
import * as Types from "./types";

declare function CardBody(props: {
  as?: React.ElementType;
  variant?: "Headline Only" | "Include Paragraph";
  paragraphText?: React.ReactNode;
  paragraphTextVisible?: Types.Visibility.VisibilityConditions;
  headlineTag?: Types.Basic.HeadingTag;
  headlineText?: React.ReactNode;
  buttonCtaText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  imagePreview?: Types.Asset.Image;
  imagePreviewAltText?: Types.Basic.AltText;
}): React.JSX.Element;
