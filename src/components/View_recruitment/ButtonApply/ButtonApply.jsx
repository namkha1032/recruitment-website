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

// import useGetRole from '../../hooks/useGetRole';
import useGetRole from '../../../hooks/useGetRole';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getPositionStatus } from '../../../utils/getPositionStatus';
import cleanStore from '../../../utils/cleanStore';
import CircularProgress from '@mui/material/CircularProgress';
import SwitchCameraIcon from '@mui/icons-material/SwitchCamera';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 600,
    width: "50%",
    maxHeight: "60%",
    bgcolor: 'background.paper',
    // // border: '2px solid #000',
    // // borderRadius: 5,
    boxShadow: 10,
    borderRadius: 3,
    // p: 4,
    display: "flex",
    flexDirection: "column",
    // overflowY: "auto"
};


const ButtonApply = (props) => {

    const navigate = useNavigate();
    const [showCV, setShowCV] = useState(false);
    const [open, setOpen] = useState(false);
    const [submit, setSubmit] = useState(false);
    const handleOpen = () => setOpen(true);
    const [notice, setNotice] = useState(false);
    const [CV, setCV] = useState(null);
    const handleClose = () => setOpen(false);
    const [helperText, setHelperText] = useState('');
    // const [applied, setApplied] = useState(null);
    const [submitstatus, setSubmitstatus] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const handleCVChange = (event) => {
        setCV(event.target.value);
        setHelperText('');
    };
    const handleCloseCV = () => setShowCV(true);
    // const list_CV_draft = useSelector(state => state.cvlist);
    // const position = useSelector(state => state.position)
    // const list_CV = list_CV_draft ? list_CV_draft : []
    const user = useSelector(state => state.user);
    const userid = user ? user.userid : '';
    console.log('idinsaga', userid);
    const dispatch = useDispatch();
    const { recruitmentid } = useParams();
    const appstatus = useSelector(state => state.applicationStatus);
    const submitNotify = useSelector(state => state.submitNotify);
    // const statusmain = appstatus ? appstatus : [];
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
    }, [submitstatus])
    useEffect(() => {
        if (appstatus !== null) {
            if (appstatus.length > 0) {
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
    // const countsubmit = useSelector(state => state.countSubmit);
    // const submitstatus = countsubmit ? countsubmit : '';

    // console.log('appstatus', statusmain);
    let enddate = props.position ? props.position.endDate : '';

    console.log('status', getPositionStatus(enddate));
    let status = getPositionStatus(enddate);
    let role = useGetRole();
    console.log("hi", role);
    console.log("Cvlist", props.list_CV);


    const handleTextClick = (id) => {
        window.open(`/profile/:profileid/cv/${id}`);
    };


    const hanldebutton = () => {
        setSubmit(true);
    }
    const handlecreate = () => {
        navigate('/profile/cv-create');
    }
    const submitcv = useSelector(state => state.submitcv);
    // const error = useSelector(state => state.error);

    // console.log("submit", submitcv);
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
                    console.log('hielse');
                    console.log('appwithoutapplication', appstatus);
                    console.log('app', appstatus[0]);
                    // console.log('testappid', appstatus[0].applicationId);
                    // console.log('testcanid', appstatus[0].cv.candidateId);
                    // console.log('testposid', appstatus[0].position.positionId);
                    // console.log('dateTime', appstatus[0].dateTime );
                    // console.log('comstatus',  appstatus[0].company_Status);
                    // console.log('priority', appstatus[0].candidate_Status);
                    console.log('testcvid', CV);
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
                }
                setSubmitstatus(true)
                // setApply(true);
                setNotice(true);
                // setCV('')
                console.log(CV);
                setSubmit(false);
                // setTimeout(() => {
                //     setOpen(false);
                //     setNotice(false);
                // }, 3000)
            }
        }
        else {
            setOpen(false);
            setHelperText('');
        }
    };
    console.log('hiappstatus', appstatus);
    console.log("statussubmitbutton", submitstatus)
    const tabs = 1
    console.log('appwithoutapplication', appstatus);
    
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        appstatus &&
        <>

            <Grid container spacing={2} >
                {(role == "candidate" && status != true) ? (
                    <>
                        {(appstatus.length > 0 && (appstatus[0].company_Status == "Pending" || appstatus[0].company_Status == "Rejected")) || (appstatus.length == 0) ? (
                            <>
                                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    {submitstatus === false ? (
                                        <Button sx={{
                                            backgroundColor: "black",
                                            ":hover": {
                                                backgroundColor: "grey",
                                            }
                                        }} size="medium" variant='contained' onClick={handleOpen}>
                                            <InsertDriveFileIcon></InsertDriveFileIcon>  Apply
                                        </Button>
                                    ) : (
                                        <>

                                            <Button sx={{
                                                backgroundColor: "black",
                                                ":hover": {
                                                    backgroundColor: "grey",
                                                }
                                            }} size="medium" variant='contained' onClick={handleOpen}>
                                                <SwitchCameraIcon sx={{ marginRight: 1 }}></SwitchCameraIcon>  Switch CV
                                            </Button>

                                        </>
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
                                                                            // top right bottom left
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
                                                                {isMd ? (
                                                                    <>
                                                                        <AssignmentTurnedInIcon></AssignmentTurnedInIcon> Submit your CV
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <AssignmentTurnedInIcon></AssignmentTurnedInIcon> Submit
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