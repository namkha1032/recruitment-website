import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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


const Info_view = () => {
    const url = "https://fpt.com.vn/en";
    const requires = require('../../data/View_recruitment/requires.json');

    return (
        <div className="Info_view">
            <Typography variant='h4' >
                <p class="thick"> Position name</p>
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        <DescriptionIcon></DescriptionIcon> DESCRIPTION
                    </Typography>
                    <Box sx={{ p: 2, border: '1px solid grey' }}>
                        Frontend-Developer là một ngành đang rất được nhiều nười theo đuổi hiện nay.
                    </Box>
                </Grid>

                <div className='line'></div>


                <Grid item xs={8}>
                    <Typography variant='h5'>
                        <RecommendIcon></RecommendIcon> REQUIREMENT
                    </Typography>
                    <ul>
                        {requires.map((require) => (
                            <li key={require.id}>{require.name}</li>
                        ))}
                    </ul>
                </Grid>
                <div className='line'></div>
                <Grid item xs={5}>
                    <Typography variant='h5'>
                        <LanguageIcon></LanguageIcon>LANGUAGES
                    </Typography>
                    <ul>
                        <li>Japanese</li>
                    </ul>
                </Grid>
                <div className='line'></div>
                <Grid item xs={4}>
                    <Typography variant='h5'>
                        <CreditScoreIcon></CreditScoreIcon> SALARY:
                    </Typography>
                </Grid>
                <Grid item xs={2} >
                    <Typography variant='h5'>
                        1000$
                    </Typography>
                </Grid>
                <Box width="100%" />
                <div className='line'></div>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        <CreditScoreIcon></CreditScoreIcon> ADDITIONAL INFORMATION:
                    </Typography>
                    <ul>
                        <li> <span className="textstyle">Max Hiring: </span> 10</li>
                        <li><span className="textstyle">Time for applied:</span> 03/06/2023 - 19/08/2023</li>
                    </ul>
                </Grid>
                <Box width="100%" />
                <div className='line'></div>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        <LocationCityIcon></LocationCityIcon> DEPARTMENT
                    </Typography>
                </Grid>

                <Grid item xs={6} md={3} >
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <GroupIcon>  </GroupIcon>
                        <Box>
                            ITROOM
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={6} md ={3} >
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <PhoneIcon></PhoneIcon>
                        <Box>
                            123456789
                        </Box>
                    </Typography>
                </Grid>
                <Grid item md ={6} ></Grid>
                <Grid item xs={12}>
                    <Typography align='center' variant='subtitle1'>
                        <RoomIcon>  </RoomIcon>
                            G Floor, F-Town 1 Building, High-tech Park, Tan Phu Ward, District 9, Ho Chi Minh City, Vietnam
                        
                    </Typography>
                </Grid>

                <Grid item xs={6} md ={6}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <EmailIcon>  </EmailIcon>
                        <Box>
                            ITroomFSOFT@ftp.com
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={6} md ={6}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" }}>
                        <WebAssetIcon></WebAssetIcon>
                        <Box>
                            <a href={url} > FPT</a>
                        </Box>
                    </Typography>
                </Grid>
                <Grid item md ={6} ></Grid>
            </Grid>
        </div >
    )
}

export default Info_view