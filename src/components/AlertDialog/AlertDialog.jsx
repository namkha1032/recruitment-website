import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { Typography, Box } from '@mui/material';
export default function AlertDialog(props) {
    const { openAlert, setOpenAlert, message, handleSubmit } = props

    const handleClickOpen = () => {
        setOpenAlert(true);
    };

    const handleClose = () => {
        setOpenAlert(false);
    };

    return (
        <>
            <div onClick={handleClickOpen}>
                {props.children}
            </div>
            <Dialog
                open={openAlert}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{ backgroundColor: "black", color: "white", display: "flex", alignItems: "center", columnGap: 1 }}>
                    <WarningAmberRoundedIcon sx={{ fontSize: 50 }} />
                    <Typography variant="h4">Warning</Typography>
                </DialogTitle>
                <DialogContent sx={{ marginY: 3, paddingY: 0 }}>
                    <DialogContentText sx={{ fontSize: 20, color: "black" }}>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ columnGap: 4 }}>
                    <Button onClick={handleClose}
                        variant="outlined"
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            borderColor: "black",
                            "&:hover": {
                                borderColor: "black"
                            }
                        }}
                    >NO
                    </Button>
                    <Button variant="contained" onClick={() => {
                        handleClose()
                        handleSubmit()
                    }}
                        sx={{
                            backgroundColor: "black",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "black"
                            }
                        }}
                        autoFocus>
                        YES
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
