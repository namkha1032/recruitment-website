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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const boxDefault = {
    height: 20,
    padding: 4 ,
    minWidth: 600,
    m: 1,
    display: "flex"
}

let CVlist = [
    {
        id: 1,
        name: "CV1",
    },
    {
        id: 2,
        name: "CV2"
    }
]

const Page_Recruitment_Id = () => {
    const [open, setOpen] = useState(false);
    const [outmodal, setOutmodal] = useState(false);
    const handleOpen = () => setOpen(true);

    const [CV, setCV] = useState('');

    const [helperText, setHelperText] = useState();
    const handleCVChange = (event) => {
        setCV(event.target.value);

    };
    const hanldeOut = () => setOutmodal(true)
    const handleSubmit = (event) => {
        event.preventDefault();
        if (outmodal === true) {
            if (CV === '') {
                setOpen(true)
                setHelperText('Please select your CV');
            }
            else {
                setOpen(false);
                setHelperText('')
                alert('You submitted CV succesfully');
                console.log(CV);
                setCV('');
                setOutmodal(false);
            }
        }
        else {
            setOpen(false);
        }

    };
    return (
        <Grid container spacing={1}>
            <Grid item xs ={3}></Grid>
            {/* <Grid item xs={5}></Grid> */}
            <Grid item xs={6}>
                <Info_view />
                <div className="button_register" >


                    <Grid container spacing={1}>
                        <Box
                            justifyContent="center"
                            alignItems="center"
                            sx={boxDefault}
                        >
                            <Button sx={{ bgcolor: 'secondary.main', color: 'black', border: '2px solid black' }} variant='outlined' onClick={handleOpen}>Đăng ký ứng tuyển</Button>
                            <Modal
                                open={open}
                                onClose={handleSubmit}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Choose your CV
                                    </Typography>
                                    <form onSubmit={handleSubmit}>
                                        <FormControl sx={{ m: 3 }} variant="standard">

                                            <RadioGroup
                                                aria-labelledby="demo-error-radios"
                                                name="choose CV"
                                                value={CV}
                                                onChange={handleCVChange}
                                            >

                                                {CVlist.map((CVs) => (
                                                    <FormControlLabel key={CVs.id} value={CVs.name} control={<Radio />} label={CVs.name} />
                                                ))}

                                                {/* <FormControlLabel value="CV2" control={<Radio />} label="CV2" /> */}
                                            </RadioGroup>

                                            <FormHelperText>{helperText}</FormHelperText>
                                            <Grid item xs={12}>
                                                <Button size="large" sx={{ mt: 1, mr: 0, ml: 10 }} type="submit" variant="outlined" onClick={hanldeOut}>
                                                    Submit your CV
                                                </Button>
                                            </Grid>
                                        </FormControl>
                                    </form>
                                </Box>
                            </Modal>
                        </Box>
                    </Grid>


                </div>
            </Grid>
            <Grid item xs ={3}></Grid>
            {/* <Grid item xs={4} sx={height}>
            <Box sx ={height}>
            


                <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-creative-hand-painted-recruitment-notice-image_167204.jpg" alt="Tuyển dụng" />

            
            </Box> 
            </Grid>                                      */}
        </Grid>
    )
}

export default Page_Recruitment_Id