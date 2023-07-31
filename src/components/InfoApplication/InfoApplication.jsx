import { Chip, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import {
  CreditScore,
  HourglassBottom,
  Language,
  Radar,
  Recommend,
  ZoomIn,
} from "@mui/icons-material";
import CV from "../CV/CV";
import GigaCard from "../GigaCard/GigaCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const  InfoApplication = ({applicationid,recruitment}) => {
    const detailposition = useSelector((state) => state.position);
    const candidate = useSelector((state) => state.candidate);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch({ type: "saga/getApplication", payload: applicationid });
      return () => {
        dispatch({ type: "application/setApplication", payload: null });
      };
    }, []);
    useEffect(() => {
        dispatch({ type: "saga/getCandidate", payload: 0 });
        return () => {
          dispatch({ type: "candidate/setCandidate", payload: null });
        };
      }, []);
      useEffect(() => {
        dispatch({ type: 'saga/getPosition', payload: recruitment })
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
    const skill = useSelector(state => state.skill);
    const language = useSelector(state => state.language);
    const startDate = detailposition ? detailposition.startDate.slice(0, 10) : [];
    const endDate = detailposition ? detailposition.endDate.slice(0, 10) : [];
    console.log(detailposition !== null ,language !== null,skill !== null,candidate !== null)
    return (
    detailposition && language && skill && candidate && <Grid container spacing={3} marginBottom={3}>
        <Grid item xs={12} md={8}>
          <GigaCard>
            <Box p="24px">
              <Typography variant="h5" align="center">
                Information Of Position
              </Typography>

              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px",
                      boxShadow: "24",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                        <Box sx={gridSx}>
                          <Radar />
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
                          {detailposition.positionName}
                          {/* {detail[recruitmentid].PositionName} */}
                        </Typography>
                      </Grid>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                        <Box sx={gridSx}>
                          <HourglassBottom />
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
                          {/* {`${detailposition[0].startTime}${' - '}${detailposition[0].endTime}`} */}
                          {/* {`${detail[recruitmentid].StartDate}${' - '}${detail[recruitmentid].EndDate}`} */}
                          {/* {`${detailposition.startDate}${' - '}${detailposition.endDate}`} */}
                          {`${startDate}${' - '}${endDate}`}
                        </Typography>
                        {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].startTime}${' - '}${detailposition[0].endTime}`} /> */}
                      </Grid>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                        <Box sx={gridSx}>
                          <ZoomIn />
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
                          {detailposition.maxHiringQty}
                        </Typography>
                        {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detailposition[0].hireMax}`} /> */}
                      </Grid>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                        <Box sx={gridSx}>
                          <Recommend />
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
                          {skill.map((require, index) => (

                            <Chip key={index} sx={{ margin: "0px 0px 5px 8px" }} label={require} variant='outlined' size='medium' color="warning" />
                          ))}
                          {/* {requires.map((require) => (
                                               
                                               <Chip key={require.skillId} sx={{ margin: "0px 0px 5px 8px" }} value={require.skillName} label={require.skillName} variant='outlined' size='medium' color="warning" />
                                           ))} */}

                        </Stack>
                      </Grid>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                        <Box sx={gridSx}>
                          <Language />
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
                        <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${language.languageName}`} />
                        {/* <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label={`${detail[recruitmentid].languageName}`} /> */}
                      </Grid>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                        <Box sx={gridSx}>
                          <CreditScore />
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
                          {detailposition.salary}
                          {/* {detail[recruitmentid].salary} */}
                        </Typography>
                        {/* <Chip sx={{ padding: "0px", marginLeft: "5px" }} label={`${detailposition[0].salary}`} variant="outlined" color='info' size="medium" /> */}
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

            </Box>
          </GigaCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <GigaCard>
            <Box p="24px">
              <Typography variant="h5" align="center">
                Information Of Candidate
              </Typography>
              <Box sx={{ marginTop: "16px" }}>
                <Box sx={{ m: 0, display: "flex" }}>
                  Name:{" "}
                  <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                    {candidate.name}
                  </Box>
                </Box>
                <Box sx={{ m: 0, display: "flex" }}>
                  Email:
                  <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                    {candidate.email}
                  </Box>
                </Box>
                <Box sx={{ m: 0, display: "flex" }}>
                  Phone:{" "}
                  <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                    {candidate.phone}
                  </Box>
                </Box>
                <Box sx={{ m: 0, display: "flex" }}>
                  Address:{" "}
                  <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                    {candidate.address}
                  </Box>
                </Box>
              </Box>
            </Box>
          </GigaCard>
        </Grid>
    </Grid>
  )
}

export default InfoApplication