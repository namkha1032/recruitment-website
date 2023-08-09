import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Button, Modal, Box, Divider } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText, { formHelperTextClasses } from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import useGetRole from '../../../hooks/useGetRole';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getPositionStatus } from '../../../utils/getPositionStatus';
import SwitchCameraIcon from '@mui/icons-material/SwitchCamera';
import { convertDate } from '../../../utils/convertDate';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    maxHeight: "60%",
    bgcolor: 'background.paper',
    boxShadow: 10,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",

};


const ButtonApply = (props) => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [submit, setSubmit] = useState(false);
    const handleOpen = () => setOpen(true);
    const [notice, setNotice] = useState(false);
    const [CV, setCV] = useState(null);
    const handleClose = () => setOpen(false);
    const [helperText, setHelperText] = useState('');
    const [submitstatus, setSubmitstatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitclick, setSubmitclick] = useState(false);
    const handleCVChange = (event) => {
        setCV(event.target.value);
        setHelperText('');
    };
    const user = useSelector(state => state.user);
    const userid = user ? user.userid : '';
    const dispatch = useDispatch();
    const { recruitmentid } = useParams();
    const appstatus = useSelector(state => state.applicationStatus);
    const submitNotify = useSelector(state => state.submitNotify);
    const applicationStatusError = useSelector(state => state.applicationStatusError);
    useEffect(() => {
        if (user !== null) {
            dispatch({
                type: 'applicationSaga/getApplicationStatus', payload: {
                    userid: userid,
                    positionId: recruitmentid,
                    token: "haha"
                },
            })
        }
    }, [submitclick])
    useEffect(() => {
        return () => {
            dispatch({ type: "applicationStatus/setApplicationStatus", payload: null })
        }
    }, [])
    useEffect(() => {
        if (appstatus !== null) {
            if (appstatus.length > 0) {
                console.log('updateappstatus')
                setSubmitstatus(true);
                setCV(appstatus[0].cv.cvid);
            }
        }
    }, [appstatus])
    useEffect(() => {
        if (submitNotify === "loading") {
            setLoading(true);
            setOpen(true);
        }
        else {

            if (submitNotify === "success") {
                toast.success('You submited successfully.', {
                    position:    "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (submitNotify === "updatesuccess") {
                toast.success('You switched successfully.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (submitNotify === "errorsubmit"){
                toast.error('You submitted failed.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

            }
            else if (submitNotify === "errorupdate"){
                toast.error('You updated failed.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

            }
            setLoading(false);
            setOpen(false);
            dispatch({ type: 'submitNotify/setSubmitNotify', payload: "no" })
        }
    }, [submitNotify])
    
    let enddate = props.position ? convertDate(props.position.endDate) : '';
    let status_enddate = getPositionStatus(enddate);
    let startdate = props.position ? convertDate(props.position.startDate) : '';
    let status_startdate = getPositionStatus(startdate);
    let role = useGetRole();
    const handleTextClick = (id) => {
        window.open(`/profile/${userid}/cv/${id}`);
    };
    const hanldebutton = () => {
        setSubmit(true);
    }
    const handlecreate = () => {
        navigate('/profile/cv-create');
    }
    console.log("mainid", recruitmentid);
    const handleSubmit = (event) => {
        event.preventDefault();

        if (submit === true) {
            if (CV === null) {
                setOpen(true)
                setHelperText('Please select your CV');
                setSubmit(false);
            }
            else {
                console.log("hello")
                if (submitstatus === false) {
                  
                    setSubmitclick(!submitclick)
                    setSubmitstatus(true)
                    dispatch({
                        type: 'applicationSaga/submitCv',
                        payload: {
                            cvId: CV,
                            positionId: recruitmentid,
                            userId: userid,
                            token: "haha"
                        }
                    })
                    
                }
                else {
                    
                    setSubmitstatus(true)
                    dispatch({
                        type: 'applicationSaga/updatesubmitCv',
                        payload: {
                            applicationId: appstatus[0].applicationId,
                            candidateId: appstatus[0].cv.candidateId,
                            cvid: CV,
                            positionId: appstatus[0].position.positionId,
                            dateTime: appstatus[0].dateTime,
                            company_Status: appstatus[0].company_Status,
                            priority: appstatus[0].candidate_Status,
                            isDeleted: false,
                            token: "haha"
                        }
                    })
                    setSubmitclick(!submitclick)
                    
                }
                setNotice(true);           
                setSubmit(false);
            }
        }
        else {
            setOpen(false);
            setHelperText('');
        }
    };
    
    const tabs = 1
    
    //

    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    console.log('enddate', status_enddate);
    console.log('startdate', status_startdate);
    return (
        // appstatus && submitstatus != null &&
        appstatus &&
        <>

            <Grid container spacing={2} >
                {(role == "candidate" && status_enddate != true && status_startdate != false) ? (
                    <>
                        {(appstatus.length > 0 && (appstatus[0].company_Status == "Pending" || appstatus[0].company_Status == "Rejected")) || (appstatus.length == 0) ? (
                            <>
                                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    {submitstatus === false && (
                                        <Button sx={{
                                            backgroundColor: "black",
                                            ":hover": {
                                                backgroundColor: "grey",
                                            }
                                        }} size="medium" variant='contained' onClick={handleOpen}>
                                            <InsertDriveFileIcon></InsertDriveFileIcon>  Apply
                                        </Button>
                                    )}

                                    {(submitstatus === true) && (loading === false) && (
                                        <Button sx={{
                                            backgroundColor: "black",
                                            ":hover": {
                                                backgroundColor: "grey",
                                            }
                                        }} size="medium" variant='contained' onClick={handleOpen}>
                                            <SwitchCameraIcon sx={{ marginRight: 1 }}></SwitchCameraIcon>  Switch CV
                                        </Button>
                                    )}

                                </Grid>
                                <Modal
                                    open={open}
                                    onClose={handleSubmit}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={{ ...style, width: isMd ? "50%" : "90%" }}>
                                        <Box sx={{ display: "flex", flexDirection: "flex-start", p: 4, paddingBottom: 0, backgroundColor: "black" }}>
                                            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ marginBottom: "10px", fontWeight: "bold", color: "white" }}>
                                                Choose your CV
                                            </Typography>
                                        </Box>
                                        <Divider sx={{ marginY: 0 }} />
                                        {props.list_CV.length > 0 ? (
                                            <Box sx={{ overflowY: "auto", paddingLeft: 4, paddingBottom: 4, paddingTop: 0 }}>
                                                <form onSubmit={handleSubmit}>
                                                    <FormControl sx={{ display: "flex", flexDirection: "column", width: "100%" }} variant="standard">
                                                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                            <Grid item xs={9} md={9} sm={6}>
                                                                <Box >
                                                                    <RadioGroup
                                                                        aria-labelledby="demo-error-radios"
                                                                        name="choose CV"
                                                                        value={CV}
                                                                        onChange={handleCVChange}
                                                                    >
                                                                        {props.list_CV.map((CV) => (
                                                                            <FormControlLabel key={CV.cvid} value={CV.cvid} control={<Radio />} label={CV.cvName} />
                                                                        ))}
                                                                    </RadioGroup>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={2} md={2} sm={2}>
                                                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                                    {props.list_CV.map((CV) => (
                                                                        <Button key={CV.cvid} sx={{
                                                                            backgroundColor: "black",             
                                                                            margin: "0px 0px 6px 8px",
                                                                            ":hover": {
                                                                                backgroundColor: "grey",
                                                                            }

                                                                        }} variant="contained" onClick={() => handleTextClick(CV.cvid)}>
                                                                            Detail
                                                                        </Button>
                                                                    ))}
                                                                </Box>
                                                            </Grid>
                                                        </Box>
                                                        <Box>
                                                            <Grid item xs={12}>
                                                                <FormHelperText sx={{ fontSize: "20px", color: "red", fontWeight: "bold" }}>{helperText}</FormHelperText>
                                                            </Grid>
                                                        </Box>
                                                    </FormControl>
                                                    <Box sx={{ display: "flex" }}>
                                                        <Grid item xs={6} md={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
                                                            <Button sx={{

                                                                backgroundColor: "black",
                                                                ":hover": {
                                                                    backgroundColor: "grey",
                                                                }
                                                            }} size="medium" type="submit" variant="contained" onClick={handleClose}   >

                                                                <CloseIcon></CloseIcon> Close
                                                            </Button>
                                                        </Grid>
                                                        <Grid item xs={6} md={6} sx={{ display: "flex", justifyContent: "flex-end", marginRight: isMd ? 2 : 0 }}>
                                                            <LoadingButton
                                                                loading={loading}
                                                                sx={{
                                                                    backgroundColor: "black",
                                                                    ":hover": {
                                                                        backgroundColor: "grey",
                                                                    }
                                                                }} size="medium" type="submit" variant="contained" onClick={hanldebutton}   >
                                                                {submitstatus === false ? (
                                                                    <>
                                                                        {isMd ? (
                                                                            <>
                                                                                <AssignmentTurnedInIcon></AssignmentTurnedInIcon> Submit your CV
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <AssignmentTurnedInIcon></AssignmentTurnedInIcon> Submit
                                                                            </>
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        {isMd ? (
                                                                            <>
                                                                                <SwitchCameraIcon></SwitchCameraIcon> Switch your CV
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <SwitchCameraIcon></SwitchCameraIcon> Switch
                                                                            </>
                                                                        )}
                                                                    </>

                                                                )}


                                                            </LoadingButton>

                                                        </Grid>
                                                    </Box>
                                                </form>
                                            </Box>
                                        ) : (
                                            <Box sx={{ display: "flex", flexDirection: 'column', p: 4 }}>
                                                <Box>
                                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                        You haven't had any CV yet. Do you want to create it?
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                                                    <Button sx={{
                                                        backgroundColor: "black",
                                                        ":hover": {
                                                            backgroundColor: "grey",
                                                        }
                                                    }} size="medium" variant="contained" onClick={handlecreate}   >
                                                        CREATE CV
                                                    </Button>
                                                </Box>
                                            </Box>
                                        )}

                                    </Box>
                                </Modal>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover={false}
                                    theme="colored"
                                />
                            </>
                        ) : (
                            null
                        )}
                    </>
                ) :
                    null
                }

            </Grid >
        </>


    )
}

export default ButtonApply