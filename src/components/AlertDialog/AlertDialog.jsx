import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import {  Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from 'react-redux';
import check from "../../assets/img/check.gif"
import BlackContainedButton from '../BlackContainedButton/BlackContainedButton';
import BlackOutlinedButton from '../BlackOutlinedButton/BlackOutlinedButton';
export default function AlertDialog(props) {
    const { openAlert, setOpenAlert, alertMessage, successfulMessage, handleSubmit } = props
    const [loading, setLoading] = useState(false)
    const error = useSelector(state => state.error)
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const handleClickOpen = () => {
        setOpenAlert(true);
    };

    const handleClose = () => {
        setOpenAlert(false);
    };
    useEffect(() => {
        if (error.status == "yes") {
            setOpenAlert(false)
            setLoading(false)
        }
        if (error.status == "no") {
            setTimeout(() => {
                setOpenAlert(false)
                setLoading(false)
            }, 2000)
        }
    }, [error])
    return (
        <>
            <div onClick={handleClickOpen}>
                {props.children}
            </div>
            <Dialog
                open={openAlert}
                onClose={loading ? null : handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {error.status == "no"
                    ? null
                    : <DialogTitle sx={{ backgroundColor: "black", fontSize: isSm ? 40 : 30, color: "white", display: "flex", alignItems: "center", columnGap: 1 }}>
                        <WarningAmberRoundedIcon sx={{ fontSize: isSm ? 60 : 50 }} />
                        Warning
                    </DialogTitle>
                }
                <DialogContent sx={{ marginY: 3, paddingY: 0 }}>
                    {error.status == "no"
                        ?
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <img src={check} style={{ height: "100px" }} />
                            <DialogContentText sx={{ fontSize: 20, color: "black" }}>
                                {successfulMessage}
                            </DialogContentText>
                        </Box>
                        :
                        <DialogContentText sx={{ fontSize: 20, color: "black" }}>
                            {alertMessage}
                        </DialogContentText>
                    }
                </DialogContent >
                {error.status == "no" ?
                    null
                    :
                    <DialogActions sx={{ columnGap: 4 }}>
                        {loading
                            ?
                            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                <CircularProgress sx={{ color: "black" }} />
                            </Box>
                            :
                            <Box sx={{ display: "flex", justifyContent: "flex-end", columnGap: 2 }}>

                                <BlackOutlinedButton handleClick={handleClose}>
                                    No
                                </BlackOutlinedButton>
                                <BlackContainedButton handleClick={() => {
                                    setLoading(true)
                                    // handleClose()
                                    handleSubmit()
                                }}>
                                    Yes
                                </BlackContainedButton>

                            </Box>
                        }
                    </DialogActions>}
            </Dialog>
        </>
    );
}
