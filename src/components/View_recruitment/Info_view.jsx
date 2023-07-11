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

let requires = [
    {
        id: 0,
        name: 'Thành thạo về HTML, CSS, Javascript',
    },
    {
        id: 1,
        name: 'Đã có những dự án liên quan đến ReactJS',
    },
    {
        id: 2,
        name: 'Có khả năng giao tiếp, hoạt động nhóm tốt',
    },
    {
        id: 3,
        name: 'Thái độ làm việc chăm chỉ, có trách nhiệm'
    }

];
const Info_view = () => {
    const url = "https://fpt.com.vn/en";
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
                        {requires.map((require, index) => (
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
                <Grid item xs={5}>
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

                <Grid item xs={2.5}>
                    <Typography align='center' variant='subtitle1'>
                        <GroupIcon>  </GroupIcon> ITROOM
                    </Typography>
                </Grid>
                <Grid item xs={2.5}>
                    <Typography align='center' variant='subtitle1'>
                        <PhoneIcon></PhoneIcon>  123456789
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography align='center' variant='subtitle1'>
                        <RoomIcon>  </RoomIcon> G Floor, F-Town 1 Building, High-tech Park, Tan Phu Ward, District 9, Ho Chi Minh City, Vietnam
                    </Typography>
                </Grid>

                <Grid item xs={5}>
                    <Typography align='center' variant='subtitle1'>
                        <EmailIcon>  </EmailIcon>  ITroomFSOFT@ftp.com
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography align='center' variant='subtitle1'>
                        <WebAssetIcon></WebAssetIcon> <a href={url} > FPT</a>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Info_view