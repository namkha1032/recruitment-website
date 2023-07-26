import React from 'react';
import { Chip, Stack, Grid, Box, Typography } from '@mui/material';
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
    // console.log("hello", props.detailposition);
    return (
        props.detailposition &&
        // props.detail &&
        <>
            <Grid container spacing={1} sx={{ marginTop: "10px" }}>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={gridSx}>
                        <DescriptionIcon color="primary"/>
                        <Typography  color="primary" variant='h5' sx={{ fontWeight: "bold" }}>
                        Description
                        </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "15px", textAlign: "justify", fontSize: "16px" }}>
                        {props.detailposition.description}
                        {/* {props.detail.Description} */}
                    </Box>
                </Grid>

                <div className='line'></div>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={gridSx}>
                        <LocationCityIcon color="primary"/>
                        <Typography  color="primary" variant='h5' sx={{ fontWeight: "bold" }}>
                        Department
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6} md={3} sx={{ marginLeft: "15px" }}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <GroupIcon>  </GroupIcon>
                        <Box>
                            {props.detailposition.departmentName}
                            {/* {props.detail.departmentName} */}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} >
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <PhoneIcon></PhoneIcon>
                        <Box>
                            {props.detailposition.departmentPhone}
                            {/* {props.detail.departmentPhone} */}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item md={6} ></Grid>
                <Grid item xs={12} sx={{ marginLeft: "15px" }}>
                    <Typography align='center' variant='subtitle1' sx={{ display: "flex" }}>
                        <RoomIcon>  </RoomIcon>
                        {props.detailposition.departmentAddress}
                        {/* {props.detail.departmentAddress} */}

                    </Typography>
                </Grid>

                <Grid item xs={12} md={3} sx={{ marginLeft: "15px" }}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <EmailIcon>  </EmailIcon>
                        <Box>
                            {props.detailposition.departmentEmail}
                            {/* {props.detail.departmentEmail} */}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <WebAssetIcon></WebAssetIcon>
                        <Box>
                            <a href={props.detailposition.departmentWebsite} > FPT</a>
                            {/* <a href={props.detail.departmentWebsite} > FPT</a> */}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item md={6} ></Grid>
            </Grid>
        </>
    );
}

export default View_detail