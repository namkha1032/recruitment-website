import { React, useState } from 'react';
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
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import RadarIcon from '@mui/icons-material/Radar';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import PendingIcon from '@mui/icons-material/Pending';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import GradingIcon from '@mui/icons-material/Grading';
import './Info_view.css'
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';

import { Chip, Stack } from '@mui/material';
import View_detail from './View_detail';
import List_application from './List_application';


const Info_view = (props) => {
    const requires = require('../../data/View_recruitment/requires.json');
    const languages = require('../../data/View_recruitment/languages.json');
    const [tab1, setTab1] = useState('1');
    const [tab2, setTab2] = useState('3');
    const handleTab1 = (event, newValue) => {
        setTab1(newValue);
    };
    const handleTab2 = (event, newValue) => {
        setTab2(newValue);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <img className='picturesize' src="https://www.pvcfc.com.vn/Data/Sites/1/News/5510/mau-1.jpg" alt="Tuyển dụng" />
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ width: "500px", height: "250px", margin: "auto", border: "1px solid black", borderRadius: "5px", boxShadow: "24", display: "flex", flexDirection: "column" }}>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                        <Typography variant='h5' sx={{ justifyContent: "flex-start", alignItems: "flex-start" , fontWeight: "bold", fontStyle: "italic" }} >
                            <RadarIcon></RadarIcon> Position:
                        </Typography>
                        <Typography variant='h5' sx={{ display: "flex", marginLeft: "10px" }} >
                            Front-end Developer
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                        <Typography variant='h5' sx={{ justifyContent: "flex-start", alignItems: "flex-start" , fontWeight: "bold", fontStyle: "italic" }} >
                            <HourglassBottomRoundedIcon></HourglassBottomRoundedIcon> Time for applied:
                        </Typography>
                        <Chip variant='outlined' color="info" sx={{ display: "flex", marginLeft: "10px" }} label="19/07/2023 - 29/07/2023" />


                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                        <Typography variant='h5' sx={{ justifyContent: "flex-start", alignItems: "flex-start", fontWeight: "bold", fontStyle: "italic" }} >
                            <ZoomInIcon></ZoomInIcon> Max Hiring:
                        </Typography>
                        <Chip variant='outlined' color="info" sx={{ display: "flex", marginLeft: "10px" }} label="10" />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                        <Typography  variant='h5' sx={{justifyContent: "flex-start", alignItems: "flex-start", fontWeight: "bold", fontStyle: "italic" }}>
                            <RecommendIcon></RecommendIcon> Requirement

                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ display: "flex", marginLeft: "15px" }}>
                            {requires.map((require) => (
                                <Chip key={require.id} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                        <Typography  variant='h5' sx={{ justifyContent: "flex-start", alignItems: "flex-start", fontWeight: "bold", fontStyle: "italic" }} >
                            <LanguageIcon></LanguageIcon> Language:
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ display: "flex", marginLeft: "15px" }}>
                            {languages.map((language) => (
                                <Chip key={language.id} value={language.name} label={language.name} variant='outlined' size='medium' color="success" />
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                        <Typography  variant='h5' sx={{ fontWeight: "bold", fontStyle: "italic" }}>
                            <CreditScoreIcon></CreditScoreIcon> Salary:
                            <Chip sx={{ padding: "0px", marginLeft: "5px" }} label="1000$" variant="outlined" color='info' size="medium" />
                        </Typography>
                    </Grid>



                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    {props.tabs == 2 ? (
                        <TabContext value={tab1}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                                <TabList onChange={handleTab1} aria-label="lab API tabs example">
                                    <Tab label="Detail" value="1" />
                                    <Tab label="List of applications" value="2" />

                                </TabList>

                            </Box>
                            <TabPanel value="1" sx={{ display: "flex", flexDirection: "flex-start", padding: "0px" }}>
                                <View_detail />
                            </TabPanel>
                            <TabPanel value="2">
                                <List_application />
                            </TabPanel>

                        </TabContext>
                    ) : (
                        <TabContext value={tab2}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleTab2} aria-label="lab API tabs example">
                                    <Tab label="Detail" value="3" />

                                </TabList>
                            </Box>
                            <TabPanel value="3" sx={{ display: "flex", flexDirection: "flex-start", padding: "0px" }}>
                                <View_detail />
                            </TabPanel>
                        </TabContext>
                    )}

                </Box>
            </Grid>
        </Grid>

    )
}

export default Info_view