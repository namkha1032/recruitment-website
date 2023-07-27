import React from 'react';
import { Chip, Stack, Grid, Box, Typography, Divider } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import RecommendIcon from '@mui/icons-material/Recommend';
import LanguageIcon from '@mui/icons-material/Language';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import './Info_view.css'
const View_detail = (props) => {
    // console.log("hello" , props.detailposition.description);
    // console.log("hi", props.detailposition.departmentName);

    const requires = require('../../data/View_recruitment/requires.json');
    const languages = require('../../data/View_recruitment/languages.json');
    let gridSx = {
        display: "flex", alignItems: "center"
    }
    console.log("hello", props.detailposition);
    console.log("hellode", props.department);
    return (
        props.detailposition && props.department &&
        // props.detail &&
        <>
            <Grid container spacing={1} sx={{ marginTop: "0px" }}>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={gridSx}>
                        <DescriptionIcon color="primary" />
                        <Typography color="primary" variant='h5' sx={{ fontWeight: "bold" }}>
                            Description
                        </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "15px", textAlign: "justify", fontSize: "16px" , marginTop: "5px"}}>
                        {props.detailposition.description}
                        {/* {props.detail.Description} */}
                    </Box>
                </Grid>

                <Divider sx={{ marginTop: "2px", borderColor: "1px" }} />

                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={gridSx}>
                        <LocationCityIcon color="primary" />
                        <Typography color="primary" variant='h5' sx={{ fontWeight: "bold" }}>
                            Department
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6} md={3} sx={{ marginLeft: "15px", marginTop: "2px" }}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <GroupIcon>  </GroupIcon>
                        <Box sx ={{marginLeft: "2px"}}>
                            
                            {/* {props.detail.departmentName} */}
                            {/* {props.detailposition.departmentName} */}
                            {props.department[0].departmentName}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} sx ={{marginTop: "2px"}} >
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <PhoneIcon></PhoneIcon>
                        <Box sx ={{marginLeft: "2px"}}>
                            {props.department[0].phone}
                            {/* {props.detail.departmentPhone} */}
                            {/* {props.detailposition.departmentPhone} */}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item md={6} ></Grid>
                <Grid item xs={12} md ={12} sx={{ marginLeft: "15px",  paddingTop: "0px", marginTop: "2px"}}>
                    <Typography align='center' variant='subtitle1' sx={{ display: "flex" }}>
                        <RoomIcon>  </RoomIcon>
                        <Box sx ={{marginLeft: "2px"}}>
                        {props.department[0].address}
                        {/* {props.detail.departmentAddress} */}
                        {/* {props.detailposition.departmentAddress} */}
                        </Box>

                    </Typography>
                </Grid>

                <Grid item xs={12} md={3} sx={{ marginLeft: "15px", paddingTop: "0px", marginTop: "2px" }}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <EmailIcon>  </EmailIcon>
                        <Box sx ={{marginLeft: "2px"}}>
                            {props.department[0].email}
                            {/* {props.detail.departmentEmail} */}
                            {/* {props.detailposition.departmentEmail} */}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} sx ={{paddingTop: "0px", marginTop: "2px"}}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <WebAssetIcon></WebAssetIcon>
                        <Box sx ={{marginLeft: "2px"}}>
                            <a href={props.department[0].website} > FPT</a>
                            {/* <a href={props.detail.departmentWebsite} > FPT</a> */}
                            {/* <a href={props.detailposition.departmentWebsite} > FPT</a> */}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item md={6} ></Grid>
            </Grid>
        </>
    );
}

export default View_detail
