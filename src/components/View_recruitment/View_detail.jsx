import React from 'react';
import { Chip, Stack, Grid, Box, Typography, Divider } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import RadarIcon from '@mui/icons-material/Radar';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import RecommendIcon from '@mui/icons-material/Recommend';
import { formatDate } from '../../utils/formatDate';


import './Info_view.css'
const View_detail = (props) => {
    // console.log("hello" , props.detailposition.description);
    // console.log("hi", props.detailposition.departmentName);

    const requires = require('../../data/View_recruitment/requires.json');
    // const languages = require('../../data/View_recruitment/languages.json');
    let left = 5
    let right = 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center"
    }
    const startDate = props.detailposition ? formatDate(props.detailposition.startDate.slice(0, 10)) : [];
    const endDate = props.detailposition ? formatDate(props.detailposition.endDate.slice(0, 10)) : [];
    console.log("hello", props.detailposition);
    // console.log("hellode", props.department);
    return (
        props.detailposition &&  
        // props.detail &&
        <>
            
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
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
                            {/* {detailposition[0].positionName} */}
                            {props.detailposition.positionName}
                            {/* {detail[recruitmentid].PositionName} */}
                        </Typography>
                    </Grid>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
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
                            {/* {`${props.detailposition.startTime}${' - '}${props.detailposition.endTime}`} */}
                            {/* {`${detail[recruitmentid].StartDate}${' - '}${detail[recruitmentid].EndDate}`} */}
                            {/* {`${detailposition.startDate}${' - '}${detailposition.endDate}`} */}
                            {`${startDate}${' - '}${endDate}`}
                        </Typography>
                        {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].startTime}${' - '}${detailposition[0].endTime}`} /> */}
                    </Grid>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
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
                            {/* {detailposition[0].hireMax} */}
                            {/* {detail[recruitmentid].MaxHiringQty} */}
                            {props.detailposition.maxHiringQty}
                            {/* {props.detailposition.hireMax} */}
                        </Typography>
                        {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].hireMax}`} /> */}
                    </Grid>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
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
                            {props.skill.map((require, index) => (

                                <Chip key={index} sx={{ margin: "0px 0px 5px 8px" }} label={require} variant='outlined' size='medium' color="warning" />
                            ))}
                            {/* {requires.map((require) => (
                                               
                                               <Chip key={require.id} sx={{ margin: "0px 0px 5px 8px" }} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />
                                           ))} */}

                        </Stack>
                    </Grid>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
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
                        <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${props.language.languageName}`} />
                        {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detail[recruitmentid].languageName}`} /> */}
                    </Grid>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                        <Box sx={gridSx}>
                            <MonetizationOnIcon />
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
                            {props.detailposition.salary}
                            {/* {detail[recruitmentid].salary} */}
                        </Typography>
                        {/* <Chip sx={{ padding: "0px", marginLeft: "5px" }} label={`${detailposition[0].salary}`} variant="outlined" color='info' size="medium" /> */}
                    </Grid>
                </Box>
            
        </>
    );
}

export default View_detail
