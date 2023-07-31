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
import View_general from './View_general';
import List_application from './List_application';
import { useDispatch, useSelector } from 'react-redux';
import cleanStore from '../../utils/cleanStore';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useParams } from 'react-router-dom';
const Info_view = (props) => {
    const { recruitmentid } = useParams();
    console.log("number", recruitmentid);
    const [tab1, setTab1] = useState('1');
    const [tab2, setTab2] = useState('3');
    const handleTab1 = (event, newValue) => {
        setTab1(newValue);
    };
    const handleTab2 = (event, newValue) => {
        setTab2(newValue);
    };
    const navigate = useNavigate();

    const language = useSelector(state => state.language);
    const detailposition = useSelector(state => state.position);
    const applications = useSelector(state => state.application);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'saga/getApplication' })
        return () => {
            cleanStore(dispatch);
        }
    }, [])
    const skill = useSelector(state => state.skill);
    console.log("skillinmain", skill); // ['react','c++']
    useEffect(() => {
        dispatch({ type: 'saga/getPosition', payload: recruitmentid })
        return () => {
            dispatch({ type: "positon/setPosition", payload: null })
        }
    }, [])
    // useEffect(() => {
    //     dispatch({ type: 'saga/getPosition' })
    //     return () => {
    //         dispatch({ type: "positon/setPosition", payload: null })
    //     }
    // }, [])
    console.log("mainlanguage", language)
    // const detail = useSelector(state => state.detail)
    // useEffect(() => {
    //     dispatch({ type: 'saga/getDetailPosition', payload: recruitmentid })
    //     return () => {
    //         dispatch({ type: "detail/setDetail", payload: null })
    //     }
    // }, [])
    console.log("number", recruitmentid)
    // console.log("detail", detail);
    // const requires = detail ? detail[recruitmentid].requirement : [];

    // const requirements = detailposition ? detailposition[0].requirement : [];
    // console.log("require", requirements);
    const requires = require('../../data/View_recruitment/requires.json');
    console.log("requires", applications)
    console.log("father", detailposition);

    let left = 5
    let right = 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }
    const handleEdit = () => {
        navigate('/company/recruitment/:recruitmentid/update');
    }
    const department = useSelector(state => state.department);
    const startDate = detailposition ? detailposition.startDate.slice(0, 10) : [];
    const endDate = detailposition ? detailposition.endDate.slice(0, 10) : [];
    console.log("date", startDate);
    console.log("department", department);
    return (
        detailposition && language && skill && department &&
        // detailposition && applications &&
        <>
            <Grid container spacing={2} >
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                        Detail of the position
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>

                    <img style={{ width: '100%', height: "100%" }} src="https://www.pvcfc.com.vn/Data/Sites/1/News/5510/mau-1.jpg" alt="Tuyển dụng" />

                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
                    <GigaCard>
                        <GigaCardHeader color={"black"} headerIcon={<ArticleIcon sx={{ fontSize: "inherit", color: "black" }} />}>
                            Detail information
                        </GigaCardHeader>
                        <GigaCardBody >
                            
                            <View_detail detailposition={detailposition} skill={skill} language={language} />
                            {/* <View_detail detailposition={detailposition[0]}  /> */}
                        </GigaCardBody>
                    </GigaCard>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        {props.tabs == 2 ? (
                            <GigaCard>
                                <GigaCardBody>
                                    <TabContext value={tab1} >
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                                            <TabList onChange={handleTab1} aria-label="lab API tabs example">
                                                <Tab label="General" value="1" />
                                                <Tab label="List of applications" value="2" />

                                            </TabList>

                                        </Box>
                                        
                                            <TabPanel value="1"  sx={{ display: "flex", flexDirection: "flex-start", padding: "0px" }}>
                                                <Box>
                                                    <View_general department={department} detailposition={detailposition} />
                                                    {/* <View_detail detail={detail[recruitmentid]} /> */}
                                                    {/* <View_general detailposition={detailposition[0]} /> */}
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value="2" sx={{ display: "flex", flexDirection: "flex-start", padding: "0px" }}>
                                                <List_application applications={applications} />
                                            </TabPanel>
                                        
                                    </TabContext>
                                </GigaCardBody>
                            </GigaCard>


                        ) : (
                            <GigaCard>
                                <GigaCardBody>
                                    <TabContext value={tab2}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList onChange={handleTab2} aria-label="lab API tabs example">
                                                <Tab label="General" value="3" />

                                            </TabList>
                                        </Box>
                                        <TabPanel value="3" sx={{ display: "flex", flexDirection: "flex-start", padding: "0px" }}>
                                            <View_general department={department} detailposition={detailposition} />
                                            {/* <View_detail detail={detail[recruitmentid]} /> */}
                                            {/* <View_general  detailposition={detailposition[0]} /> */}
                                        </TabPanel>
                                    </TabContext>
                                </GigaCardBody>
                            </GigaCard>

                        )}

                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Info_view

