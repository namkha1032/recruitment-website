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
import cleanStore from '../../utils/cleanStore';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
const Info_view = (props) => {

    const [tab1, setTab1] = useState('1');
    const [tab2, setTab2] = useState('3');
    const handleTab1 = (event, newValue) => {
        setTab1(newValue);
    };
    const handleTab2 = (event, newValue) => {
        setTab2(newValue);
    };
    const navigate = useNavigate();
    
    const detailposition = useSelector(state => state.position);
    const applications = useSelector(state => state.application);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'saga/getApplication' })
        return () => {
            cleanStore(dispatch);
        }
    }, [])

    useEffect(() => {
        dispatch({ type: 'saga/getPosition' })
        return () => {
            dispatch({ type: "positon/setPosition", payload: null })
        }
    }, [])
    const requirements = detailposition ? detailposition[0].requirement : [];
    console.log("require", requirements );
    console.log("father", detailposition);
    console.log("father2", applications);
    let left = 5
    let right = 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }
    const handleEdit = () => {
        navigate('/company/recruitment/:recruitmentid/update');
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
                        <img style={{ width: '100%', height: "100%" }} src={detailposition[0].imageUrl} alt="Tuyển dụng" />
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
                                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                        {`${detailposition[0].startTime}${' - '}${detailposition[0].endTime}`}
                                    </Typography>
                                    {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].startTime}${' - '}${detailposition[0].endTime}`} /> */}
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
                                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                        {detailposition[0].hireMax}
                                    </Typography>
                                    {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].hireMax}`} /> */}
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
                                        {requirements.map((require) => (
                                               
                                            <Chip key={require.skillId} sx={{ margin: "0px 0px 5px 8px" }} value={require.skillName} label={require.skillName} variant='outlined' size='medium' color="warning" />
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
                                <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].languageName}`} />
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
                                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                        {detailposition[0].salary}
                                    </Typography>
                                    {/* <Chip sx={{ padding: "0px", marginLeft: "5px" }} label={`${detailposition[0].salary}`} variant="outlined" color='info' size="medium" /> */}
                                </Grid>
                            </Box>
                        </GigaCardBody>
                    </GigaCard>
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
                                <TabPanel value="1" sx={{ display: "flex", flexDirection: "column", padding: "0px" }}>
                                    <Box>
                                        <View_detail detailposition={detailposition[0]} />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                        <Button sx={{ bgcolor: 'primary.main', color: 'black', border: '2px solid black' }} variant='outlined' onClick={handleEdit}>
                                            <EditIcon></EditIcon> Chỉnh sửa
                                        </Button>
                                    </Box>

                                </TabPanel>
                                <TabPanel value="2">
                                    <List_application applications={applications} />
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

