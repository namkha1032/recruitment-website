import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CertButton = (prop) => {
  
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Button
          variant="contained"
          className="AddButton"
          sx={{
            margin: "auto",
          }}
          onClick={() => {
            if (prop.error === true) {
              prop.handleSetOpen();
            } else {
              prop.onPress();
              prop.setValue(null);
              prop.setStart(null);
              prop.setEnd(null);
              prop.setOrganize("");
              prop.setDetail("");
              prop.setError(true);
            }
          }}
        >
          Add
        </Button>
        <Snackbar open={prop.open} autoHideDuration={3000} onClose={prop.handleClose}>
          <Alert onClose={prop.handleClose} severity="error" sx={{ width: "100%" }}>
            Enter Start day
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};
export default CertButton;
