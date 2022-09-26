import React from "react";
import { LoadingButtonProps, LoadingButton } from "@mui/lab";

const Button = (props: LoadingButtonProps) => {
  return <LoadingButton {...props} />;
};

Button.defaultProps = {
  variant: "outlined",
};

export default Button;
