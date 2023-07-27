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

const Application = ({ cvid, user }) => {
  const requires = require("../../data/View_recruitment/requires.json");
  const languages = require("../../data/View_recruitment/languages.json");
  const detailposition = useSelector((state) => state.position);
  const {recruitmentid, applicationid} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "saga/getPosition", payload: recruitmentid });
    return () => {
      dispatch({ type: "position/setPosition", payload: null });
    };
  }, []);
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
  return (
    detailposition && language && skill && <>
      <Typography variant="h3" align="center">
        Detail of the Application
      </Typography>

      <Grid container sx={{ marginTop: "50px" }} spacing={3}>
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
                    {/* <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            display: "flex",
                          }}
                        >
                          <Radar />
                          Position:
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ display: "flex", marginLeft: "10px" }}
                        >
                          {detailposition[0].positionName}
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: "5px",
                            flexWrap: "wrap",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                              display: "flex",
                            }}
                          >
                            <HourglassBottom /> Time for applied:
                          </Typography>

                          <Chip
                            variant="outlined"
                            color="info"
                            sx={{ display: "flex", marginLeft: "10px" }}
                            label={`${detailposition[0].startTime}${" - "}${
                              detailposition[0].endTime
                            }`}
                          />
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            display: "flex",
                          }}
                        >
                          <ZoomIn /> Max Hiring:
                        </Typography>
                        <Chip
                          variant="outlined"
                          color="info"
                          sx={{ display: "flex", marginLeft: "10px" }}
                          label={`${detailposition[0].hireMax}`}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            display: "flex",
                          }}
                        >
                          <Recommend /> Requirement:
                        </Typography>
                        <Stack
                          direction="row"
                          sx={{ display: "flex", flexWrap: "wrap" }}
                        >
                          {requires.map((require) => (
                            <Chip
                              key={require.id}
                              sx={{ margin: "0px 0px 5px 15px" }}
                              value={require.name}
                              label={require.name}
                              variant="outlined"
                              size="medium"
                              color="warning"
                            />
                          ))}
                        </Stack>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            display: "flex",
                          }}
                        >
                          <Language /> Language:
                        </Typography>
                        <Stack
                          direction="row"
                          sx={{ display: "flex", flexWrap: "wrap" }}
                        >
                          {languages.map((language) => (
                            <Chip
                              key={language.id}
                              sx={{ margin: "0px 0px 5px 15px" }}
                              value={language.name}
                              label={language.name}
                              variant="outlined"
                              size="medium"
                              color="success"
                            />
                          ))}
                        </Stack>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            display: "flex",
                          }}
                        >
                          <CreditScore /> Salary:
                          <Chip
                            sx={{ padding: "0px", marginLeft: "5px" }}
                            label={`${detailposition[0].salary}`}
                            variant="outlined"
                            color="info"
                            size="medium"
                          />
                        </Typography>
                      </Grid> */}
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
                    {user.name}
                  </Box>
                </Box>
                <Box sx={{ m: 0, display: "flex" }}>
                  Email:
                  <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                    {user.email}
                  </Box>
                </Box>
                <Box sx={{ m: 0, display: "flex" }}>
                  Phone:{" "}
                  <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                    {user.phone}
                  </Box>
                </Box>
                <Box sx={{ m: 0, display: "flex" }}>
                  Address:{" "}
                  <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                    {user.address}
                  </Box>
                </Box>
              </Box>
            </Box>
          </GigaCard>
        </Grid>
        <Grid item xs={12}>
          <GigaCard>
            <Box sx={{ p: "24px" }}>
              <CV cvid={cvid} />
            </Box>
          </GigaCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Application;
