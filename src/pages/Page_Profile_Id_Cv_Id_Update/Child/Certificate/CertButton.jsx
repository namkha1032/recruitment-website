import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AddIcon from '@mui/icons-material/Add';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CertButton = (prop) => {
  return (
    <>
      <Button
        color="primary"
        size="medium"
        variant="outlined"
        startIcon={<AddIcon/>}
        className="AddCompButton"
        sx={{
          margin: "auto",
        }}
        onClick={() => {
          prop.onPress();
        }}
      >
        Add
      </Button>
      <Snackbar
        open={prop.open}
        autoHideDuration={3000}
        onClose={prop.handleClose}
      >
        <Alert
          onClose={prop.handleClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Lack of certificate's information
        </Alert>
      </Snackbar>
    </>
  );
};
export default CertButton;
