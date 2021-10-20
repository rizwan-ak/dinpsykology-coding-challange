import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
  root: {},
});

const VCERNButton = (props) => {
  const { value, ...otherProps } = props;
  return (
    <div>
      <Button variant="contained" color="primary" size="large" {...otherProps}>
        {value}
      </Button>
    </div>
  );
};

export default withStyles(styles)(VCERNButton);
