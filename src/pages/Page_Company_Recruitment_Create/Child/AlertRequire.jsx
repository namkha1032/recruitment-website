import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";

const RequiredAlert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const AlertRequire = (prop) => {
  return (
    <>
    
      <Snackbar
        open={prop.RequireOpen}
        autoHideDuration={3000}
        onClose={prop.handleRequiredClose}
      >
        <RequiredAlert
          onClose={prop.handleRequiredClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          prop.message
        </RequiredAlert>
      </Snackbar>
    </>
  );
};
export default AlertRequire;
