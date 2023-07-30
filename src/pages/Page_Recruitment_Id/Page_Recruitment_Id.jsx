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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    // height: "60%",
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
    const [CV, setCV] = useState('');
    const handleClose = () => setOpen(false);
    const [helperText, setHelperText] = useState('');
    const handleCVChange = (event) => {
        setCV(event.target.value);
        setHelperText('');
    };
    const handleCloseCV = () => setShowCV(true);
    const list_CV_draft = useSelector(state => state.cvlist);
    const list_CV = list_CV_draft ? list_CV_draft : []
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'saga/getCvList' })
        return () => {
            dispatch({ type: 'cv/setCvList', payload: null })
        }

    }, [])
    const { recruitmentid } = useParams();
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
            if (CV === '') {
                setOpen(true)
                setHelperText('Please select your CV');
                setSubmit(false);
            }
            else {
                dispatch({
                    type: 'saga/submitCv',
                    payload: {
                        cvId: CV,
                        positionId: recruitmentid
                    }
                })

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
    const tabs = 1
    return (

        <Grid container spacing={2} >
            <Grid item xs={12}>
                {/* tabs={tabs} */}
                <Info_view tabs={tabs} />
            </Grid>
            {role == "candidate" ? (
                <>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                        <Button sx={{
                            color: "black",
                            border: "1px solid black",
                            textTransform: "none",

                            ":hover": {
                                backgroundColor: "black",
                                color: "white"
                            }
                        }} variant='outlined' onClick={handleOpen}>
                            <InsertDriveFileIcon></InsertDriveFileIcon>  Apply
                        </Button>
                    </Grid>
                    <Modal
                        open={open}
                        onClose={handleSubmit}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            {/* <Typography id="modal-modal-title" variant="h6" component="h2" sx ={{marginBottom: "10px"}} >
                                Choose your CV
                            </Typography> */}
                            <Box sx={{ display: "flex", flexDirection: "flex-start", p: 4, paddingBottom: 0 }}>
                                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
                                    Choose your CV
                                </Typography>
                            </Box>
                            <div className='line'></div>
                            {list_CV.length > 0 ? (
                                <Box sx={{ overflowY: "auto", paddingLeft: 4, paddingBottom: 4, paddingTop: 0 }}>
                                    <form onSubmit={handleSubmit}>
                                        <FormControl sx={{ display: "flex", flexDirection: "column", width: "100%" }} variant="standard">
                                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                <Grid item xs={9}>
                                                    <Box >
                                                        <RadioGroup
                                                            aria-labelledby="demo-error-radios"
                                                            name="choose CV"
                                                            value={CV}
                                                            onChange={handleCVChange}
                                                        >
                                                            {list_CV.map((CV) => (
                                                                <FormControlLabel key={CV.cvId} value={CV.cvId} control={<Radio />} label={CV.cvName} />
                                                            ))}
                                                        </RadioGroup>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                        {list_CV.map((CV) => (
                                                            <Button key={CV.cvId} sx={{
                                                                color: "white",
                                                                border: "1px solid black",
                                                                textTransform: "none",
                                                                backgroundColor: "black",
                                                                // top right bottom left
                                                                margin: "0px 0px 4px 8px"

                                                            }} variant="contained" onClick={() => handleTextClick(CV.CVid)}>
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
                                            <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
                                                <Button sx={{
                                                    color: "black",
                                                    border: "1px solid black",
                                                    textTransform: "none",

                                                    ":hover": {
                                                        backgroundColor: "black",
                                                        color: "white"
                                                    }
                                                }} size="large" type="submit" variant="outlined" onClick={handleClose}   >
                                                    <CloseIcon></CloseIcon> Close
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end", marginRight: 2 }}>
                                                <Button sx={{
                                                    color: "black",
                                                    border: "1px solid black",
                                                    textTransform: "none",
                                                    ":hover": {
                                                        backgroundColor: "black",
                                                        color: "white"
                                                    }
                                                }} size="large" type="submit" variant="outlined" onClick={hanldebutton}   >
                                                    <AssignmentTurnedInIcon></AssignmentTurnedInIcon> Submit your CV
                                                </Button>

                                            </Grid>
                                        </Box>
                                    </form>
                                </Box>
                            ) : (
                                <Box sx={{ display: "flex", flexDirection: 'column', p: 4 }}>
                                    <Box>
                                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                            You haven't had any CV yet. Do you want to create it?
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
                                        <Button sx={{
                                            color: "black",
                                            border: "1px solid black",
                                            textTransform: "none",
                                            ":hover": {
                                                backgroundColor: "black",
                                                color: "white"
                                            }
                                        }} size="large" variant="outlined" onClick={handlecreate}   >
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
            ) : null
            }

        </Grid >
    )
}

export default Page_Recruitment_Id