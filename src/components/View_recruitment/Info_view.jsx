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
            <Typography variant='h3' sx={{ fontWeight: "bold", fontFamily: "Times New Roman", fontStyle: "italic"  }} >
                 Front-end Developer
            </Typography>
            <Grid container spacing={1} sx ={{marginTop: "10px"}}>
                <Grid item xs={12}>
                    <Typography variant='h5' sx={{ fontWeight: "bold", fontFamily: "Times New Roman", fontStyle: "italic"  }}>
                        <DescriptionIcon></DescriptionIcon> Description
                    </Typography>
                    <Box sx={{ p: 2, border: '1px solid grey', textAlign: "justify" , fontFamily: "Times New Roman", fontSize: "16px"}}>
                    ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013.
                    </Box>
                </Grid>

                <div className='line'></div>


                <Grid item xs={8}>
                    <Typography variant='h5' sx={{ fontWeight: "bold", fontFamily: "Times New Roman", fontStyle: "italic"  }}>
                        <RecommendIcon></RecommendIcon> Requirement
                    </Typography>
                    <ul className = "text">
                        {requires.map((require) => (
                            <li key={require.id}>{require.name}</li>
                        ))}
                    </ul>
                </Grid>
                <div className='line'></div>
                <Grid item xs={5}>
                    <Typography variant='h5' sx={{ fontWeight: "bold", fontFamily: "Times New Roman", fontStyle: "italic"  }}>
                        <LanguageIcon></LanguageIcon>Languages
                    </Typography>
                    <ul className = "text">
                        <li>Japanese</li>
                    </ul>
                </Grid>
                <div className='line'></div>
                <Grid item xs={2.5}>
                    <Typography variant='h5' sx={{ fontWeight: "bold", fontFamily: "Times New Roman", fontStyle: "italic"  }}>
                        <CreditScoreIcon></CreditScoreIcon> Salary:
                    </Typography>
                </Grid>
                <Grid item xs={2} >
                    <Typography variant='h5' sx ={{fontFamily: "Times New Roman"}}>
                        1000$
                    </Typography>
                </Grid>
                <Box width="100%" />
                <div className='line'></div>
                <Grid item xs={12}>
                    <Typography variant='h5' sx={{ fontWeight: "bold", fontFamily: "Times New Roman", fontStyle: "italic"  }}>
                        <CreditScoreIcon></CreditScoreIcon> Additional information:
                    </Typography>
                    <ul>
                        <li> <span className="textstyle">Max Hiring: </span> 10</li>
                        <li> <span className="textstyle">Time for applied:</span> 03/06/2023 - 19/08/2023</li>
                    </ul>
                </Grid>
                <Box width="100%" />
                <div className='line'></div>
                <Grid item xs={12}>
                    <Typography variant='h5' sx={{ fontWeight: "bold", fontFamily: "Times New Roman", fontStyle: "italic"  }}>
                        <LocationCityIcon></LocationCityIcon> Department
                    </Typography>
                </Grid>

                <Grid item xs={6} md={3} >
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex",  fontFamily: "Times New Roman" }}>
                        <GroupIcon>  </GroupIcon>
                        <Box>
                            ITROOM
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={6} md ={3} >
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" , fontFamily: "Times New Roman" }}>
                        <PhoneIcon></PhoneIcon>
                        <Box>
                            123456789
                        </Box>
                    </Typography>
                </Grid>
                <Grid item md ={6} ></Grid>
                <Grid item xs={12}>
                    <Typography align='center' variant='subtitle1' sx={{ display: "flex" , fontFamily: "Times New Roman" }}>
                        <RoomIcon>  </RoomIcon>
                            G Floor, F-Town 1 Building, High-tech Park, Tan Phu Ward, District 9, Ho Chi Minh City, Vietnam
                        
                    </Typography>
                </Grid>

                <Grid item xs={6} md ={6}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" , fontFamily: "Times New Roman" }}>
                        <EmailIcon>  </EmailIcon>
                        <Box>
                            ITroomFSOFT@ftp.com
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={6} md ={6}>
                    <Typography align='left' variant='subtitle1' sx={{ display: "flex" , fontFamily: "Times New Roman" }}>
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