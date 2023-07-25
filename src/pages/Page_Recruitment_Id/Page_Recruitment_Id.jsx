import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Button, Modal, Box} from '@mui/material';
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
import { ToastContainer,  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: "60%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    overflow: "auto"
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

    const handleTextClick = () => {
        window.open(`/profile/:profileid/cv/:cvid`);
    };


    const hanldebutton = () => {
        setSubmit(true);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (submit === true) {
            if (CV === '') {
                setOpen(true)
                setHelperText('Please select your CV');
                setSubmit(false);
            }
            else {
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
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                <Button sx={{ bgcolor: 'primary.main', color: 'black' }} variant='outlined' onClick={handleOpen}>
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
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        Choose your CV
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ margin: "auto", display: "flex", flexDirection: "row" }} variant="standard">
                            <Grid item xs={4}>
                                <Box>
                                    <RadioGroup
                                        aria-labelledby="demo-error-radios"
                                        name="choose CV"
                                        value={CV}
                                        onChange={handleCVChange}
                                    >
                                        {list_CV.map((CV) => (
                                            <FormControlLabel key={CV.CVid} value={CV.CVname} control={<Radio />} label={CV.CVname} />
                                        ))}
                                    </RadioGroup>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    {list_CV.map((CV) => (
                                        <Button key={CV.CVid} sx={{ marginBottom: "5.5px" }} variant="contained" onClick={handleTextClick}>
                                            Hello
                                        </Button>
                                    ))}
                                </Box>
                            </Grid>
                            <FormHelperText sx={{ fontSize: "20px", color: "red", fontWeight: "bold" }}>{helperText}</FormHelperText>
                        </FormControl>
                        <Box sx={{ display: "flex" }}>
                            <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
                                <Button size="large" type="submit" variant="contained" onClick={handleClose}   >
                                    <CloseIcon></CloseIcon> Close
                                </Button>
                            </Grid>
                            <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button size="large" type="submit" variant="contained" onClick={hanldebutton}   >
                                    <AssignmentTurnedInIcon></AssignmentTurnedInIcon> Submit your CV
                                </Button>

                            </Grid>
                        </Box>
                    </form>
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
        </Grid>
    )
}

export default Page_Recruitment_Id