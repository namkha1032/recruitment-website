import React from 'react';
import { useState } from 'react';
import { Grid, Button, Modal, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import './Page_Recruitment_Id.css';
import Info_view from '../../components/View_recruitment/Info_view';
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DoneAllIcon from '@mui/icons-material/DoneAll';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column"

};
const success_notice = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}
const boxDefault = {
    height: 20,
    padding: 4,
    minWidth: 600,
    m: 1,
    display: "flex"
}
const styleofbox = {
    borderRadius: "8px",
    border: "1px solid black",
    marginTop: "10px",
    backgroundColor: "#6cbcc4"
}

let CVlist = [
    {
        id: 1,
        name: "CV1",
    },
    {
        id: 2,
        name: "CV2"
    },
    {
        id: 3,
        name: "CV3"
    }
]
const Page_Recruitment_Id = () => {

    const [open, setOpen] = useState(false);
    const [submit, setSubmit] = useState(false);
    const handleOpen = () => setOpen(true);
    const [notice, setNotice] = useState(false);
    const [CV, setCV] = useState('');
    const handleClose = () => setOpen(false);
    const [helperText, setHelperText] = useState();
    const handleCVChange = (event) => {
        setCV(event.target.value);
        setHelperText('');
    };


    const handleclose_notice_modal = () => {
        setOpen(false);
        setNotice(false);
    }
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
            }
        }
        else {
            setOpen(false);
            setHelperText('');
        }

    };
    return (
        <Grid container spacing={1} sx ={{display:"flex", flexDirection: "row"}}>
            <Grid item xs={6} sm ={6} md ={6}>
                <img className='picturesize' src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-creative-hand-painted-recruitment-notice-image_167204.jpg" alt="Tuyển dụng" />
            </Grid>
            <Grid item xs={6} sm ={6} md ={6}>
                <Box sx={styleofbox}>
                    <Info_view />
                </Box>
                <div className="button_register" >


                    <Grid container spacing={1}>
                        <Box
                            justifyContent="center"
                            alignItems="center"
                            sx={boxDefault}
                        >
                            <Button sx={{ bgcolor: 'secondary.main', color: 'black', border: '2px solid black' }} variant='outlined' onClick={handleOpen}>
                                Register
                            </Button>
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
                                        <FormControl sx={{ margin: "auto" }} variant="standard">

                                            <RadioGroup
                                                aria-labelledby="demo-error-radios"
                                                name="choose CV"
                                                value={CV}
                                                onChange={handleCVChange}
                                            >

                                                {CVlist.map((CVs) => (
                                                    <FormControlLabel  key={CVs.id} value={CVs.name} control={<Radio />} label={CVs.name} />
                                                ))}

                                                {/* <FormControlLabel value="CV2" control={<Radio />} label="CV2" /> */}
                                            </RadioGroup>

                                            <FormHelperText sx={{ fontSize: "20px", color: "red",  fontWeight: "bold" }}>{helperText}</FormHelperText>
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
                                            <Modal
                                                open={notice}
                                                onClose={handleclose_notice_modal}
                                                aria-labelledby="child-modal-title"
                                                aria-describedby="child-modal-description"
                                            >
                                                <Box sx={{ ...success_notice, width: 300, height: 200, display: "flex", flexDirection: "column" }}>
                                                    <Grid item xs={12}>
                                                        <Typography color='success' variant='subtitle1' sx={{  display: "flex" }}>
                                                            <DoneOutlineTwoToneIcon color='success'></DoneOutlineTwoToneIcon>
                                                            You submited successfully. Please wait for further information.
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                                            <Button variant='contained' color="success" onClick={handleclose_notice_modal}>
                                                                <DoneAllIcon></DoneAllIcon> OK
                                                            </Button>

                                                        </Box>
                                                    </Grid>
                                                </Box>
                                            </Modal>

                                        </Box>




                                    </form>
                                </Box>
                            </Modal>
                        </Box>
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default Page_Recruitment_Id