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
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getPositionStatus } from '../../utils/getPositionStatus';
import CircularProgress from '@mui/material/CircularProgress';
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
    const tabs = 1
    return (
       
            <>

                <Grid container spacing={2} >
                    <Grid item xs={12} md={12} sm={12}>
                        {/* tabs={tabs} */}
                        <Info_view tabs={tabs} />
                    </Grid>
                    {/* {role == "candidate" && status != true ? (
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
                                <Box sx={{ ...style, width: isMd ? "50%" : "90%" }}>  */}
                                    {/* <Typography id="modal-modal-title" variant="h6" component="h2" sx ={{marginBottom: "10px"}} >
                                Choose your CV
                            </Typography> */}
                                    {/* <Box sx={{ display: "flex", flexDirection: "flex-start", p: 4, paddingBottom: 0, backgroundColor: "black" }}>
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

                                                                        backgroundColor: "black", */}
                                                                        
                                                                        {/* margin: "0px 0px 6px 8px",
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



                    ) : null
                    } */}

                </Grid >
            </>
           
    )
}

export default Page_Recruitment_Id