import { React, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import RecommendIcon from '@mui/icons-material/Recommend';
import LanguageIcon from '@mui/icons-material/Language';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import RadarIcon from '@mui/icons-material/Radar';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ArticleIcon from '@mui/icons-material/Article';
import './Info_view.css'
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader";
import { Chip, Stack } from '@mui/material';
import View_detail from './View_detail';
import List_application from './List_application';
import { useDispatch, useSelector } from 'react-redux';


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
    const detailposition = useSelector(state => state.position);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'saga/getPosition' })
        return () => {
            dispatch({ type: "positon/setPosition", payload: null })
        }
    }, [])
    
    let left = 5
    let right = 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }

    return (
        detailposition &&
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                        Detail of the position
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <GigaCard>
                        <img style={{ width: '100%', height: "100%" }} src="https://www.pvcfc.com.vn/Data/Sites/1/News/5510/mau-1.jpg" alt="Tuyển dụng" />
                    </GigaCard>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
                    <GigaCard>
                        <GigaCardHeader color={"primary.main"} headerIcon={<ArticleIcon sx={{ fontSize: "inherit" }} />}>
                            Detail information
                        </GigaCardHeader>
                        <GigaCardBody >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Box sx={gridSx}>
                                        <RadarIcon />
                                        <Typography variant="h6">
                                            Position
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Typography variant="h6">
                                        :
                                    </Typography>
                                </Grid>
                                <Grid item md={right} sx={gridSx}>
                                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                        {detailposition[0].positionName}
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Box sx={gridSx}>
                                        <HourglassBottomRoundedIcon />
                                        <Typography variant="h6">
                                            Time for applied
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Typography variant="h6">
                                        :
                                    </Typography>
                                </Grid>
                                <Grid item md={right} sx={gridSx}>
                                    <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].startTime}${' - '}${detailposition[0].endTime}`} />
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Box sx={gridSx}>
                                        <ZoomInIcon />
                                        <Typography variant="h6">
                                            Max Hiring
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Typography variant="h6">
                                        :
                                    </Typography>
                                </Grid>
                                <Grid item md={right} sx={gridSx}>
                                    <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].hireMax}`} />
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Box sx={gridSx}>
                                        <RecommendIcon />
                                        <Typography variant="h6">
                                            Requirement
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Typography variant="h6">
                                        :
                                    </Typography>
                                </Grid>
                                <Grid item md={right} sx={gridSx}>
                                    <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                        {requires.map((require) => (

                                            <Chip key={require.id} sx={{ margin: "0px 0px 5px 8px" }} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />

                                        ))}
                                    </Stack>
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Box sx={gridSx}>
                                        <LanguageIcon />
                                        <Typography variant="h6">
                                            Language
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Typography variant="h6">
                                        :
                                    </Typography>
                                </Grid>
                                <Grid item md={right} sx={gridSx}>
                                    <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>
                                        {languages.map((language) => (
                                            <Chip key={language.id} sx={{ margin: "0px 0px 5px 8px" }} value={language.name} label={language.name} variant='outlined' size='medium' color="success" />
                                        ))}
                                    </Stack>
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Box sx={gridSx}>
                                        <CreditScoreIcon />
                                        <Typography variant="h6">
                                            Salary
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                    <Typography variant="h6">
                                        :
                                    </Typography>
                                </Grid>
                                <Grid item md={right} sx={gridSx}>
                                    <Chip sx={{ padding: "0px", marginLeft: "5px" }} label={`${detailposition[0].salary}`} variant="outlined" color='info' size="medium" />
                                </Grid>
                            </Box>
                        </GigaCardBody>
                    </GigaCard>

                    {/* <Box sx={{ width: "100%", height: "100%", borderRadius: "5px", boxShadow: "24", display: "flex", flexDirection: "column" }}>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                            <Typography variant='h6' sx={{ justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }} >
                                <RadarIcon></RadarIcon> Position:
                            </Typography>
                            <Typography variant='h6' sx={{ display: "flex", marginLeft: "10px" }} >
                                {detailposition[0].positionName}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} >
                            <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "5px", flexWrap: "wrap" }}>
                                <Typography variant='h6' sx={{ justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }} >
                                    <HourglassBottomRoundedIcon></HourglassBottomRoundedIcon> Time for applied:
                                </Typography>

                                <Chip variant='outlined' color="info" sx={{ display: "flex", marginLeft: "10px" }} label={`${detailposition[0].startTime}${' - '}${detailposition[0].endTime}`} />

                            </Box>

                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                            <Typography variant='h6' sx={{ justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }} >
                                <ZoomInIcon></ZoomInIcon> Max Hiring:
                            </Typography>
                            <Chip variant='outlined' color="info" sx={{ display: "flex", marginLeft: "10px" }} label={`${detailposition[0].hireMax}`} />
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                            <Typography variant='h6' sx={{ justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }}>
                                <RecommendIcon></RecommendIcon> Requirement:

                            </Typography>
                            <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>
                                {requires.map((require) => (
                                    <Chip key={require.id} sx={{ margin: "0px 0px 5px 15px" }} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                            <Typography variant='h6' sx={{ justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }} >
                                <LanguageIcon></LanguageIcon> Language:
                            </Typography>
                            <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>
                                {languages.map((language) => (
                                    <Chip key={language.id} sx={{ margin: "0px 0px 5px 15px" }} value={language.name} label={language.name} variant='outlined' size='medium' color="success" />
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", marginLeft: "5px" }}>
                            <Typography variant='h6' sx={{ justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }}>
                                <CreditScoreIcon></CreditScoreIcon> Salary:
                                <Chip sx={{ padding: "0px", marginLeft: "5px" }} label={`${detailposition[0].salary}`} variant="outlined" color='info' size="medium" />
                            </Typography>
                        </Grid>
                    </Box> */}
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        {props.tabs == 2 ? (
                            <TabContext value={tab1}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                                    <TabList onChange={handleTab1} aria-label="lab API tabs example">
                                        <Tab label="General" value="1" />
                                        <Tab label="List of applications" value="2" />

                                    </TabList>

                                </Box>
                                <TabPanel value="1" sx={{ display: "flex", flexDirection: "flex-start", padding: "0px" }}>
                                    <View_detail detailposition={detailposition[0]} />
                                </TabPanel>
                                <TabPanel value="2">
                                    <List_application />
                                </TabPanel>

                            </TabContext>
                        ) : (
                            <TabContext value={tab2}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleTab2} aria-label="lab API tabs example">
                                        <Tab label="General" value="3" />

                                    </TabList>
                                </Box>
                                <TabPanel value="3" sx={{ display: "flex", flexDirection: "flex-start", padding: "0px" }}>
                                    <View_detail detailposition={detailposition[0]} />
                                </TabPanel>
                            </TabContext>
                        )}

                    </Box>
                </Grid>
            </Grid>
        </>










    )
}

export default Info_view