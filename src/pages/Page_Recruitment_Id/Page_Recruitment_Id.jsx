import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Button, Modal, Box, Divider } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import './Page_Recruitment_Id.css';
import Info_view from '../../components/View_recruitment/Info_view';
import CloseIcon from '@mui/icons-material/Close';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from "react-toastify";
import useGetRole from '../../hooks/useGetRole';
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader";
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getPositionStatus } from '../../utils/getPositionStatus';
import cleanStore from '../../utils/cleanStore';
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


const Page_Recruitment_Id = () => {

    const navigate = useNavigate();
    const [showCV, setShowCV] = useState(false);
    const [open, setOpen] = useState(false);
    const [submit, setSubmit] = useState(false);
    const handleOpen = () => setOpen(true);
    const [notice, setNotice] = useState(false);
    const [CV, setCV] = useState(null);
    const handleClose = () => setOpen(false);
    const [helperText, setHelperText] = useState('');
    const [apply, setApply] = useState(false);
    const handleCVChange = (event) => {
        setCV(event.target.value);
        setHelperText('');
    };
    const handleCloseCV = () => setShowCV(true);
    const list_CV_draft = useSelector(state => state.cvlist);
    const position = useSelector(state => state.position)
    const list_CV = list_CV_draft ? list_CV_draft : []
    const user = useSelector(state => state.user);
    console.log("user", user);
    const userid = user ? user.userid : '';
    console.log('idinsaga', userid);
    const dispatch = useDispatch();
    const { recruitmentid } = useParams();
    useEffect(() => {
        dispatch({ type: 'saga/getCvList', payload: userid })
        return () => {
            dispatch({ type: 'cv/setCvList', payload: null })
        }
    }, [])
    let enddate = position ? position.endDate : '';

    console.log('status', getPositionStatus(enddate));
    let status = getPositionStatus(enddate);
    let role = useGetRole();
    console.log("hi", role);
    console.log("Cvlist", list_CV);


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

    console.log("submit", submitcv);
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
                dispatch({
                    type: 'saga/submitCv',
                    payload: {
                        cvId: CV,
                        positionId: recruitmentid,
                        userId: userid
                    }
                })
                setApply(true);
                setNotice(true);
                setCV('')
                console.log(CV);
                setSubmit(false);
                // setTimeout(() => {
                //     setOpen(false);
                //     setNotice(false);
                // }, 3000)
                setOpen(false);

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
        }
        else {
            setOpen(false);
            setHelperText('');
        }
    };
    console.log("apply", apply)
    const tabs = 1
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (

        <Grid container spacing={2} >
            <Grid item xs={12} md={12} sm={12}>
                {/* tabs={tabs} */}
                <Info_view tabs={tabs} />
            </Grid>
            {role == "candidate" && status != true ? (
                <>
                    {submitcv === false ? (
                        <>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                <Button sx={{
                                    backgroundColor: "black",
                                    ":hover": {
                                        backgroundColor: "grey",
                                    }
                                }} variant='contained' onClick={handleOpen}>
                                    <InsertDriveFileIcon></InsertDriveFileIcon>  Apply
                                </Button>
                            </Grid>
                            <Modal
                                open={open}
                                onClose={handleSubmit}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{ ...style, width: isMd ? "50%" : "90%" }}>
                                    {/* <Typography id="modal-modal-title" variant="h6" component="h2" sx ={{marginBottom: "10px"}} >
                                Choose your CV
                            </Typography> */}
                                    <Box sx={{ display: "flex", flexDirection: "flex-start", p: 4, paddingBottom: 0, backgroundColor: "black" }}>
                                        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ marginBottom: "10px", fontWeight: "bold", color: "white" }}>
                                            Choose your CV
                                        </Typography>
                                    </Box>
                                    <Divider sx={{ marginY: 0 }} />
                                    {list_CV.length > 0 ? (
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
                                                                    {list_CV.map((CV) => (
                                                                        <FormControlLabel key={CV.cvid} value={CV.cvid} control={<Radio />} label={CV.cvName} />
                                                                    ))}
                                                                </RadioGroup>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={2} md={2} sm={2}>
                                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                                {list_CV.map((CV) => (
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
                                                        <Button sx={{

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

                                                        </Button>

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
                                                }} size="large" variant="contained" onClick={handlecreate}   >
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
                        <>
                            <Box sx={{ borderColor:"1px solid black" ,display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    APPLIED
                            </Box>
                        </>
                    )}

                </>
            ) : null
            }

        </Grid >
    )
}

export default Page_Recruitment_Id