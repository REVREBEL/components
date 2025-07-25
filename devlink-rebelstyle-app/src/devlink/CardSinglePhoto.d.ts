import * as React from "react";
import * as Types from "./types";

declare function CardSinglePhoto(props: {
  as?: React.ElementType;
  headlineSubHeadlineText?: React.ReactNode;
  headlineHeadlineText?: React.ReactNode;
  headlineHeadlineTag?: Types.Basic.HeadingTag;
  labelText?: React.ReactNode;
  imagesSecondaryImage?: Types.Asset.Image;
  secondaryImageAltText?: Types.Basic.AltText;
  primaryImageVisible?: Types.Visibility.VisibilityConditions;
  imagesPrimaryImageId?: Types.Basic.IdTextInput;
  secondaryImageVisible?: Types.Visibility.VisibilityConditions;
  headlineSecondaryId?: Types.Basic.IdTextInput;
}): React.JSX.Element;
