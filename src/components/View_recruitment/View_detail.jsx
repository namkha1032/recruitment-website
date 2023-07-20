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
const View_detail = () => {
    const url = "https://fpt.com.vn/en";
    const requires = require('../../data/View_recruitment/requires.json');
    const languages = require('../../data/View_recruitment/languages.json');
    return (
        <Grid container spacing={1} sx={{ marginTop: "10px" }}>
            <Grid item xs={12}>
                <Typography color="primary" variant='h5' sx={{ fontWeight: "bold" }}>
                    <DescriptionIcon></DescriptionIcon> Description
                </Typography>
                <Box sx={{ marginLeft: "15px", textAlign: "justify", fontSize: "16px" }}>
                    ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013.
                </Box>
            </Grid>

            {/* <div className='line'></div>


            <Grid item xs={8} >
                <Typography color="primary" variant='h5' sx={{ fontWeight: "bold", fontStyle: "italic" }}>
                    <RecommendIcon></RecommendIcon> Requirement

                </Typography>
                <Stack direction="row" spacing={1} sx={{ display: "flex", marginLeft: "15px" }}>
                    {requires.map((require) => (
                        <Chip key={require.id} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />
                    ))}
                </Stack>

            </Grid>
            <div className='line'></div>
            <Grid item xs={5}>
                <Typography color="primary" variant='h5' sx={{ fontWeight: "bold", fontStyle: "italic" }}>
                    <LanguageIcon></LanguageIcon>Languages
                </Typography>
                <Stack direction="row" spacing={1} sx={{ display: "flex", marginLeft: "15px" }}>
                    {languages.map((language) => (
                        <Chip key={language.id} value={language.name} label={language.name} variant='outlined' size='medium' color="success" />
                    ))}
                </Stack>
            </Grid>
            <div className='line'></div>
            <Grid item xs={3}>
                <Typography color="primary" variant='h5' sx={{ fontWeight: "bold", fontStyle: "italic" }}>
                    <CreditScoreIcon></CreditScoreIcon> Salary:
                    <Chip sx={{ padding: "0px", marginLeft: "5px" }} label="1000$" variant="outlined" color='info' size="medium" />
                </Typography>

            </Grid> */}

            <div className='line'></div>
            <Grid item xs={12}>
                <Typography color="primary" variant='h5' sx={{ fontWeight: "bold"}}>
                    <LocationCityIcon></LocationCityIcon> Department
                </Typography>
            </Grid>

            <Grid item xs={6} md={3} sx={{ marginLeft: "15px" }}>
                <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                    <GroupIcon>  </GroupIcon>
                    <Box>
                        ITROOM
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={6} md={3} >
                <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                    <PhoneIcon></PhoneIcon>
                    <Box>
                        123456789
                    </Box>
                </Typography>
            </Grid>
            <Grid item md={6} ></Grid>
            <Grid item xs={12} sx={{ marginLeft: "15px" }}>
                <Typography align='center' variant='subtitle1' sx={{ display: "flex" }}>
                    <RoomIcon>  </RoomIcon>
                    G Floor, F-Town 1 Building, High-tech Park, Tan Phu Ward, District 9, Ho Chi Minh City, Vietnam

                </Typography>
            </Grid>

            <Grid item xs={6} md={3} sx={{ marginLeft: "15px" }}>
                <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                    <EmailIcon>  </EmailIcon>
                    <Box>
                        ITroomFSOFT@ftp.com
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
                <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                    <WebAssetIcon></WebAssetIcon>
                    <Box>
                        <a href={url} > FPT</a>
                    </Box>
                </Typography>
            </Grid>
            <Grid item md={6} ></Grid>
        </Grid>
    );
}

export default View_detail