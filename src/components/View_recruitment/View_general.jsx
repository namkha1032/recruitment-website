import {React, useEffect, useRef} from 'react';
import { Chip, Stack, Grid, Box, Typography, Divider } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import './Info_view.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const View_general = (props) => {
    // console.log("hello" , props.detailposition.description);
    // console.log("hi", props.detailposition.departmentName);
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const requires = require('../../data/View_recruitment/requires.json');
    const languages = require('../../data/View_recruitment/languages.json');
    let gridSx = {
        display: "flex", alignItems: "center"
    }
    const description = props.detailposition ? props.detailposition.description : '';
    const desRef = useRef();
    
    useEffect(() => {
        desRef.current.innerHTML =  description
    }, [description])
    console.log("hello", props.detailposition);
    // console.log("hellode", props.department);
    return (
        // props.detailposition && props.department &&
        // props.detail &&
        props.detailposition && 
        <>
            <Grid container spacing={1} sx={{ marginTop: "0px", display: "flex", flexDirection: "column" }}>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{...gridSx, paddingTop: 1,  paddingBottom:  1 , paddingTop: 2 }}>
                        <DescriptionIcon color="black" />
                        <Typography color="primary" variant='h4' sx={{ fontWeight: "bold", color: "black" }}>
                            Description
                        </Typography>
                    </Box>

                    <Box ref={desRef} sx={{ marginLeft: "15px", textAlign: "justify", fontSize: "16px", paddingTop: 2}}>
                        {/* {props.detailposition.description} */}
                        {/* {props.detail.Description} */}
                        {/* ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013. */}
                    </Box>

                </Grid>

                <Divider sx={{   borderColor: "1px" }} />

                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{...gridSx, paddingBottom:  1, paddingTop: 2 }}>
                        <LocationCityIcon color="black" />
                        <Typography color="primary" variant='h4' sx={{ fontWeight: "bold", color: "black" }}>
                            Department
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={12} sx={{ marginLeft: "15px"}}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" , paddingTop: 2 }}>
                        <GroupIcon>  </GroupIcon>
                        <Box sx ={{marginLeft: "5px"}}>

                            {/* {props.detail.departmentName} */}
                            {props.detailposition.department.departmentName}
                            {/* {props.department[0].departmentName} */}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{ marginLeft: "15px", marginTop: "2px" }} >
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <PhoneIcon></PhoneIcon>
                        <Box sx ={{marginLeft: "5px"}}>
                            {props.detailposition.department.phone}
                            {/* {props.detail.departmentPhone} */}
                            {/* {props.detailposition.departmentPhone} */}
                        </Box>
                    </Typography>
                </Grid>
                {/* <Grid item md={6} ></Grid> */}
                <Grid item xs={12} md={12} sx={{ marginLeft: "15px", paddingTop: "0px", marginTop: "2px" }}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <RoomIcon>  </RoomIcon>
                        <Box sx ={{marginLeft: "5px"}}>
                            {/* {props.department[0].address} */}
                            {/* {props.detail.departmentAddress} */}
                            {props.detailposition.department.address}
                        </Box>

                    </Typography>
                </Grid>

                <Grid item xs={12} md={12} sx={{ marginLeft: "15px", paddingTop: "0px", marginTop: "2px" }}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <EmailIcon>  </EmailIcon>
                        <Box sx ={{marginLeft: "5px"}}>
                            {/* {props.department[0].email} */}
                            {/* {props.detail.departmentEmail} */}
                            {props.detailposition.department.email}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{ marginLeft: "15px", paddingTop: "0px", marginTop: "2px" }}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <WebAssetIcon></WebAssetIcon>
                        <Box sx ={{marginLeft: "5px"}}>
                            {/* <a href={props.department[0].website} > FPT</a> */}
                            {/* <a href={props.detail.departmentWebsite} > FPT</a> */}
                            <a href={props.detailposition.department.website} > FPT</a>
                        </Box>
                    </Typography>
                </Grid>
                {/* <Grid item md={6} ></Grid> */}
            </Grid>
        </>
    );
}

export default View_general
