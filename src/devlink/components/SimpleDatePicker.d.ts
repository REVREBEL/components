import * as React from "react";
import * as Types from "./types";

declare function SimpleDatePicker(props: {
  as?: React.ElementType;
  submitButtonText?: Types.Builtin.Text;
  submitButtonLoadingText?: Types.Builtin.Text;
  selectDateLabelText?: React.ReactNode;
  emailAddressText?: React.ReactNode;
  emailAddressId?: Types.Basic.IdTextInput;
  datePickerVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
