import React from 'react';
import { Chip, Stack, Grid, Box, Typography, Divider } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import RadarIcon from '@mui/icons-material/Radar';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import RecommendIcon from '@mui/icons-material/Recommend';
import { formatDate } from '../../utils/formatDate';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { convertDate } from "../../utils/convertDate";
import dayjs from 'dayjs';
import './Info_view.css'
const View_detail = (props) => {
    // console.log("hello" , props.detailposition.description);
    // console.log("hi", props.detailposition.departmentName);
    const theme = useTheme()
    // const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const requires = require('../../data/View_recruitment/requires.json');
    // const languages = require('../../data/View_recruitment/languages.json');
    let left = 5
    let right = 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center"
    }
    const startDate = props.detailposition ? dayjs(convertDate(props.detailposition.startDate)).format('DD/MM/YYYY') : [];
    const endDate = props.detailposition ? dayjs(convertDate(props.detailposition.endDate)).format('DD/MM/YYYY') : [];
    console.log("hello", props.detailposition);
    // console.log("hellode", props.department);
    console.log("left", left);
    console.log("skill", props.skill);
    console.log("isSm", isSm);
    return (
        props.detailposition &&
        // props.detail &&
        <>

            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                <Grid item xs={4} md={left} sx={{ ...gridSx, columnGap: gap, marginLeft: isSm ? 0 : "10px" }}>
                    <Box sx={gridSx}>
                        <RadarIcon />
                        {isSm ? (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                                Position
                            </Typography>
                        ) : (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                                Pos
                            </Typography>
                        )}

                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={7} md={right} sx={gridSx}>
                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                        {/* {detailposition[0].positionName} */}
                        {props.detailposition.positionName}
                        {/* {detail[recruitmentid].PositionName} */}
                    </Typography>
                </Grid>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "10px" }}>
                    <Box sx={gridSx}>
                        <HourglassBottomRoundedIcon />
                        {isSm ? (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                                Time for applied
                            </Typography>
                        ) : (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                                Time
                            </Typography>
                        )}
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={7} md={right} sx={gridSx}>
                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                        {/* {`${props.detailposition.startTime}${' - '}${props.detailposition.endTime}`} */}
                        {/* {`${detail[recruitmentid].StartDate}${' - '}${detail[recruitmentid].EndDate}`} */}
                        {/* {`${detailposition.startDate}${' - '}${detailposition.endDate}`} */}
                        {`${startDate}${' - '}${endDate}`}
                    </Typography>
                    {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].startTime}${' - '}${detailposition[0].endTime}`} /> */}
                </Grid>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "10px" }}>
                    <Box sx={gridSx}>
                        <ZoomInIcon />
                        {isSm ? (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }} >
                                Max Hiring
                            </Typography>
                        ) : (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }} >
                                Max
                            </Typography>
                        )}

                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={7} md={right} sx={gridSx}>
                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                        {/* {detailposition[0].hireMax} */}
                        {/* {detail[recruitmentid].MaxHiringQty} */}
                        {props.detailposition.maxHiringQty}
                        {/* {props.detailposition.hireMax} */}
                    </Typography>
                    {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].hireMax}`} /> */}
                </Grid>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "10px" }}>
                    <Box sx={gridSx}>
                        <RecommendIcon />
                        {isSm ? (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                                Requirement
                            </Typography>
                        ) : (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                                Req
                            </Typography>
                        )}

                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={7} md={right} sx={gridSx}>
                    <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "flex-start" }}>
                        {props.skill.map((require) => (

                            <Chip key={require.skillId} sx={{ margin: "0px 0px 5px 8px" }} label={require.skillName} variant='outlined' size='medium' color="warning" />
                        ))}

                        {/* {requires.map((require) => (

                        <Chip key={require.id} sx={{ margin: "0px 0px 5px 8px" }} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />
                    ))} */}

                    </Stack>
                </Grid>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2}}>
                <Grid item xs ={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "10px" }}>
                    <Box sx={gridSx}>
                        <LanguageIcon />
                        {isSm ? (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }} >
                                Language
                            </Typography>
                        ) : (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }} >
                                Lang
                            </Typography>
                        )}

                    </Box>
                </Grid>
                <Grid item xs ={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={7} md={right} sx={gridSx}>
                    <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${props.detailposition.language.languageName}`} />
                    {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detail[recruitmentid].languageName}`} /> */}
                </Grid>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "10px" }}>
                    <Box sx={gridSx}>
                        <MonetizationOnIcon />
                        <Typography variant="h6" sx={{ marginLeft: "5px" }} >
                            Salary
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={7} md={right} sx={gridSx}>
                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                        {`${props.detailposition.salary}${'$'}`}
                        {/* {detail[recruitmentid].salary} */}
                    </Typography>
                    {/* <Chip sx={{ padding: "0px", marginLeft: "5px" }} label={`${detailposition[0].salary}`} variant="outlined" color='info' size="medium" /> */}
                </Grid>
            </Box>

        </>
    );
}

export default View_detail
