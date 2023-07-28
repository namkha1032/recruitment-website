import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

function Error(props) {
  return (
    <Box
      sx={{
        fontSize: 14,
        color: "#cc3300",
      }}
    >
      Error: {props.content}
    </Box>
  );
}

export function errorAlert(content) {
  toast.success(<Error content={content} />, {
    position: toast.POSITION.TOP_CENTER,
    theme: "light",
    autoClose: 2000,
    icon: <WarningAmberRoundedIcon sx={{
      color: "#cc3300",
    }}/>
  });
}
