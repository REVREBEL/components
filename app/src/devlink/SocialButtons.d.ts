import * as React from "react";
import * as Types from "./types";

declare function SocialButtons(props: {
  as?: React.ElementType;
  runtimeProps?: Types.Devlink.RuntimeProps;
  socialLoginSocialIconVisible?: Types.Visibility.VisibilityConditions;
  socialLoginSocialIconId?: Types.Basic.IdTextInput;
  socialAttributeAttributeDisconnectValue?: Types.Builtin.Text;
  socialAttributeAttributeSocialNameValue?: Types.Builtin.Text;
  buttonButtonId?: Types.Basic.IdTextInput;
  buttonButtonText?: React.ReactNode;
  buttonButtonLink?: Types.Basic.Link;
  iconsSocialIconImage?: Types.Asset.Image;
  iconsSocialIconAltText?: Types.Basic.AltText;
  buttonStyleButton?:
    | "Google Dark"
    | "Google Light"
    | "Linkedin Dark"
    | "Linked Light"
    | "Github Dark"
    | "Github Light"
    | "Microsoft Dark"
    | "Microsoft Light";
}): React.JSX.Element;
