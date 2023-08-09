import {
  Chip,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import {
  CreditScore,
  Email,
  HourglassBottom,
  Language,
  LocationOff,
  LocationOn,
  Person,
  Phone,
  Radar,
  Recommend,
  ZoomIn,
} from "@mui/icons-material";
import CV from "../CV/CV";
import GigaCard from "../GigaCard/GigaCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import cleanStore from "../../utils/cleanStore";
import View_detail from "../View_recruitment/View_detail";
import GigaCardHeader from "../GigaCardHeader/GigaCardHeader";
import GigaCardBody from "../GigaCardBody/GigaCardBody";
const InfoApplication = ({ applicationid, recruitmentid }) => {
  const infoApplication = useSelector((state) => state.infoApplication);
  const skill = useSelector((state) => state.skill);
  const detailposition = useSelector((state) => state.position);
  const candidate = useSelector((state) => state.candidate);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: "applicationSaga/getInfoApplication", payload:{applicationid:applicationid,token:user.token} });
    dispatch({ type: "skillSaga/getSkill" });
    dispatch({ type: "positionSaga/getPosition", payload: {recruitmentid:recruitmentid} });
    return () => {
      cleanStore(dispatch);
    };
  }, []);



  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("sm"));
  let left = 4;
  let right = 8;
  let gap = 1;
  let gridSx = {
    display: "flex",
    alignItems: "center",
  };
  
  return (
    infoApplication &&
    detailposition &&
    skill &&
    candidate && (
      <>
        
        <Grid container spacing={3} marginBottom={3}>
          <Grid item xs={12} md={6}>
            <GigaCard>
              <GigaCardHeader>Postion</GigaCardHeader>
              <GigaCardBody>
                <View_detail detailposition={detailposition} skill={skill} />
              </GigaCardBody>
            </GigaCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <GigaCard>
              <GigaCardHeader>Candidate</GigaCardHeader>
              <GigaCardBody>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <Grid
                    item
                    xs={3}
                    md={left}
                    sx={{
                      ...gridSx,
                      alignItems: "flex-start",
                      columnGap: gap,
                      marginLeft: isMd ? 0 : "10px",
                    }}
                  >
                    <Box sx={{ ...gridSx, alignItems: "flex-start" }}>
                      <Box mt="3px"><Person/></Box>
                      {isMd && (
                        <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                          Name
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      columnGap: gap,
                    }}
                  >
                    <Typography variant="h6">:</Typography>
                  </Grid>
                  <Grid item xs={8} md={right} sx={gridSx}>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: "8px", wordBreak: "break-word" }}
                    >
                      {candidate.name}
                    </Typography>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <Grid
                    item
                    xs={3}
                    md={left}
                    sx={{
                      ...gridSx,
                      alignItems: "flex-start",
                      columnGap: gap,
                      marginLeft: isMd ? 0 : "10px",
                    }}
                  >
                    <Box sx={{ ...gridSx, alignItems: "flex-start" }}>
                     <Box mt="3px"><Email /></Box>
                      {isMd && (
                        <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                          Email
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      columnGap: gap,
                    }}
                  >
                    <Typography variant="h6">:</Typography>
                  </Grid>
                  <Grid item xs={8} md={right} sx={gridSx}>
                    <Typography
                      variant="h6"
                      sx={{
                        marginLeft: "8px",
                        wordBreak:'break-all'
                      }}
                    >
                      {candidate.email}
                    </Typography>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <Grid
                    item
                    xs={3}
                    md={left}
                    sx={{
                      ...gridSx,
                      alignItems: "flex-start",
                      columnGap: gap,
                      marginLeft: isMd ? 0 : "10px",
                    }}
                  >
                    <Box sx={{ ...gridSx, alignItems: "flex-start" }}>
                   <Box mt="1px"> <Phone /></Box>
                      {isMd && (
                        <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                          Phone
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      columnGap: gap,
                    }}
                  >
                    <Typography variant="h6">:</Typography>
                  </Grid>
                  <Grid item xs={8} md={right} sx={gridSx}>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: "8px", wordBreak: "break-word" }}
                    >
                      {candidate.phone}
                    </Typography>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5px",
                  }}
                >
                  <Grid
                    item
                    xs={3}
                    md={left}
                    sx={{
                      ...gridSx,
                      alignItems: "flex-start",
                      columnGap: gap,
                      marginLeft: isMd ? "0" : "10px",
                    }}
                  >
                    <Box sx={{ ...gridSx, alignItems: "flex-start" }}>
                    <Box mt="1px"> <LocationOn /></Box>

                      {isMd && (
                        <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                          Address
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    md={1}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      columnGap: gap,
                    }}
                  >
                    <Typography variant="h6">:</Typography>
                  </Grid>
                  <Grid item xs={8} md={right} sx={gridSx}>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: "8px", wordBreak: "break-word" }}
                    >
                      {candidate.address}
                    </Typography>
                  </Grid>
                </Box>
              </GigaCardBody>
            </GigaCard>
          </Grid>
        </Grid>
      </>
    )
  );
};

export default InfoApplication;
