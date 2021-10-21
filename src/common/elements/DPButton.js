import React from "react";
import { withStyles } from "@mui/styles";
import { Button } from "@mui/material";

const styles = (theme) => ({});

const DPButton = (props) => {
  const { value, ...otherProps } = props;
  return (
    <Button variant="contained" color="primary" {...otherProps}>
      {value}
    </Button>
  );
};

export default withStyles(styles)(DPButton);
