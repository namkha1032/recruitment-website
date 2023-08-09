import { React, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
import { Button } from '@mui/material';
import './Info_view.css'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader";
import View_detail from './View_detail';
import View_general from './View_general';
import List_application from './List_application';
import { useDispatch, useSelector } from 'react-redux';
import cleanStore from '../../utils/cleanStore';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useParams } from 'react-router-dom';
import TableViewIcon from "@mui/icons-material/TableView";
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import ButtonApply from './ButtonApply/ButtonApply';
import 'react-toastify/dist/ReactToastify.css';
import useGetRole from '../../hooks/useGetRole';
import StatusPostion from './StatusPosittion/StatusPosition';
import MissingPage from '../MissingPage/MissingPage';
import Info_viewSkeleton from './TestSkeleton/Info_viewSkeleton';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Info_view = (props) => {
    const { recruitmentid } = useParams();
    console.log("number", recruitmentid);
    const [tab1, setTab1] = useState('1');
    const [tab2, setTab2] = useState('3');
    const [page, setPage] = useState(true);
    const handleTab1 = (event, newValue) => {
        setTab1(newValue);
    };
    const handleTab2 = (event, newValue) => {
        setTab2(newValue);
    };
    const user = useSelector(state => state.user);
    const userid = user ? user.userid : '';
    const detailposition = useSelector(state => state.position);
    const applications = useSelector(state => state.application);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch({
            type: 'applicationSaga/getApplication', payload: {
                recruitmentid: recruitmentid,
                token: "haha",
            }
        })
        dispatch({
            type: 'cvSaga/getCvList', payload: {
                userid: userid,
                token: "haha"
            }
        })
        dispatch({
            type: 'positionSaga/getPosition', payload: {
                recruitmentid: recruitmentid,
                token: "haha"
            }
        })

        return () => {
            cleanStore(dispatch);
        }
    }, [])
    const error = useSelector(state => state.positionError);
    const cvListError = useSelector( state => state.cvListError);
    const applicationError = useSelector(state => state.applicationError);
    console.log('.....', error);
    useEffect(() => {
        if (error.status === 'error') {
            if (error.message === 400 || error.message === 404 || error.message === 'error' ) {
                setPage(false);
                dispatch({ type: 'positionError/onReset' })
            }
        }
    }, [error])
    

    const skill = useSelector(state => state.skill);

    let left = 5
    let right = 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }
    // BUTTON APPLY
    const list_CV_draft = useSelector(state => state.cvlist);
    const list_CV = list_CV_draft ? list_CV_draft : [];
    // BUTTON EDIT
    const navigate = useNavigate();
    const handleEdit = () => {
        cleanStore(dispatch)
        navigate(`/company/recruitment/${recruitmentid}/update`);
    }
    let role = useGetRole();
    return (
        page === true ?
            <>
                {detailposition && skill ?
                    (
                        <>
                            <Grid container spacing={2} >
                                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                                        Detail of the position
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6} sm={12}>
                                    <GigaCard>
                                        <GigaCardBody>
                                            <img style={{ width: '100%', height: "100%" }} src="https://www.pngkit.com/png/detail/117-1177668_job-search-remotive-home-find-a-job-cartoon.png" alt="Tuyển dụng" />
                                        </GigaCardBody>
                                    </GigaCard>


                                </Grid>
                                <Grid item xs={12} md={6} sm={12} sx={{ display: "flex", flexDirection: "column" }}>
                                    <GigaCard>
                                        <GigaCardHeader color={"black"} headerIcon={<ArticleIcon sx={{ fontSize: "inherit", color: "black" }} />}>
                                            Detail information
                                        </GigaCardHeader>
                                        <GigaCardBody >

                                            <View_detail detailposition={detailposition} skill={skill} />
                                            <StatusPostion detailposition={detailposition} />
                                        </GigaCardBody>
                                    </GigaCard>
                                </Grid>
                                <Grid item xs={12} md={12} sm={12}>
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        {props.tabs == 2 ? (
                                            <>
                                                <GigaCard>
                                                    <GigaCardBody>

                                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                                                            <Tabs sx={{
                                                                "& .MuiTabs-indicator": {
                                                                    backgroundColor: "black",
                                                                },
                                                            }}
                                                                value={tab1} onChange={handleTab1} aria-label="lab API tabs example"
                                                            >
                                                                <Tab
                                                                    icon={<ViewTimelineIcon />}
                                                                    label="General"
                                                                    value="1"
                                                                    sx={{
                                                                        textTransform: "none",
                                                                        fontWeight: 500,
                                                                        color: "rgba(0, 0, 0, 0.85)",
                                                                        "&.hover": {
                                                                            color: "rgba(190, 190, 190, 0.85)",
                                                                        },
                                                                        "&.Mui-selected": {
                                                                            color: "black",
                                                                        },
                                                                    }}
                                                                />
                                                                <Tab
                                                                    icon={<TableViewIcon />}
                                                                    label="Application List"
                                                                    value="2"
                                                                    sx={{
                                                                        textTransform: "none",
                                                                        fontWeight: 500,
                                                                        color: "rgba(0, 0, 0, 0.85)",
                                                                        "&.hover": {
                                                                            color: "rgba(190, 190, 190, 0.85)",
                                                                        },
                                                                        "&.Mui-selected": {
                                                                            color: "black",
                                                                        },
                                                                    }}
                                                                />

                                                            </Tabs>
                                                        </Box>
                                                        {tab1 === "1" && (
                                                            <Box>
                                                                <View_general detailposition={detailposition} />
                                                            </Box>
                                                        )}

                                                        {tab1 === "2" && (
                                                            <List_application applications={applications} />

                                                        )}
                                                    </GigaCardBody>
                                                </GigaCard>
                                                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", marginTop: 2 }}>
                                                    {role == "admin" ? (
                                                        null
                                                    ) : (
                                                        <Button sx={{
                                                            backgroundColor: "black",
                                                            ":hover": {
                                                                backgroundColor: "grey",
                                                            }
                                                        }} variant='contained' onClick={handleEdit}>
                                                            <EditIcon></EditIcon> EDIT
                                                        </Button>
                                                    )}
                                                </Grid>
                                            </>
                                        ) : (
                                            <>
                                                <GigaCard>
                                                    <GigaCardBody>

                                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                            <Tabs
                                                                sx={{
                                                                    "& .MuiTabs-indicator": {
                                                                        backgroundColor: "black",
                                                                    },
                                                                }}
                                                                value={tab2}
                                                                onChange={handleTab2} aria-label="lab API tabs example">
                                                                <Tab
                                                                    icon={<ViewTimelineIcon />}
                                                                    label="General"
                                                                    value="3"
                                                                    sx={{
                                                                        textTransform: "none",
                                                                        fontWeight: 500,
                                                                        color: "rgba(0, 0, 0, 0.85)",
                                                                        "&.hover": {
                                                                            color: "rgba(190, 190, 190, 0.85)",
                                                                        },
                                                                        "&.Mui-selected": {
                                                                            color: "black",
                                                                        },
                                                                    }}
                                                                />

                                                            </Tabs>
                                                        </Box>
                                                        {tab2 === "3" && (
                                                            <View_general detailposition={detailposition} />
                                                        )}
                                                    </GigaCardBody>
                                                </GigaCard>
                                                <Box sx={{ marginTop: 2 }}>
                                                    <ButtonApply position={detailposition} list_CV={list_CV} />
                                                </Box>
                                            </>
                                        )}

                                    </Box>
                                </Grid>
                            </Grid>
                            <ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover={false}
                                    theme="colored"
                                />
                        </>
                    )
                    :
                    (
                        <>
                            <Info_viewSkeleton tabs={props.tabs} />
                        </>
                    )}
            </>
            :
            <MissingPage />
    );
}

export default Info_view

