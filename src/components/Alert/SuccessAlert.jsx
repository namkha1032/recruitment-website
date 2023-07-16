import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoneIcon from "@mui/icons-material/Done";
import Stack from "@mui/material/Stack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/system";

// export function SuccessAlert(props) {
//   return (
//       <Alert
//         iconMapping={{
//           success: <DoneIcon fontSize="inherit" />,
//         }}
//         sx={{
//             position: "fixed",
//             top: 88,
//             left: "50%",
//             transform: "translate(-50%, 0)",
//             width: 400,
//             zIndex: 1000
//         }}
//         onClose={props.handleCloseSuccessAlert}
//       >
//         {props.content} thành công!
//       </Alert>
//   );
// }

function Success(props) {
  return (
    <Box
      sx={{
        fontSize: 14,
      }}
    >
      {props.content} thành công!
    </Box>
  );
}

export function successAlert(content) {
  toast.success(<Success content={content} />, {
    position: toast.POSITION.TOP_CENTER,
    theme: "light",
    autoClose: 2000,
  });
}
