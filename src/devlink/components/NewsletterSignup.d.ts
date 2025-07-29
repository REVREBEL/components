import * as React from "react";
import * as Types from "./types";

declare function NewsletterSignup(props: {
  as?: React.ElementType;
  formId?: Types.Basic.IdTextInput;
  newsletterSignupEyebrowText?: React.ReactNode;
  newsletterSignupHeadlineTag?: Types.Basic.HeadingTag;
  newsletterSignupHeadlineText?: React.ReactNode;
  newsletterSignupBodyParagraphText?: React.ReactNode;
  newsletterSignupSubmitButtonCtaText?: Types.Builtin.Text;
  resultMessagingSuccessMessageText?: React.ReactNode;
  resultMessagingErrorMessageText?: React.ReactNode;
  colorStyleChooseAMode?: "Light" | "Dark";
}): React.JSX.Element;
