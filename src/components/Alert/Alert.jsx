import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoneIcon from '@mui/icons-material/Done';
import Stack from '@mui/material/Stack';

export default function SuccessAlert(props) {
  return (
      <Alert
        iconMapping={{
          success: <DoneIcon fontSize="inherit" />,
        }}
        sx={{
            position: "fixed",
            top: 88,
            left: "50%",
            transform: "translate(-50%, 0)",
            width: 400,
            zIndex: 1000
        }}
        onClose={props.handleCloseSuccessAlert}
      >
        {props.content} thành công!
      </Alert>
  );
}