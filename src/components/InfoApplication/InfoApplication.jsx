import { Chip, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
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
import cleanStore from '../../utils/cleanStore'
import View_detail from "../View_recruitment/View_detail";
import GigaCardHeader from "../GigaCardHeader/GigaCardHeader";
import GigaCardBody from "../GigaCardBody/GigaCardBody";
const InfoApplication = ({ applicationid, recruitmentid,page}) => {


  const infoApplication = useSelector((state) => state.infoApplication);
  const skill = useSelector((state) => state.skill);
  const detailposition = useSelector((state) => state.position);
  const candidate = useSelector((state) => state.candidate);



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "saga/getInfoApplication", payload: applicationid });
    dispatch({ type: "saga/getCandidate", payload: 0 });
    dispatch({ type: "saga/getPosition", payload: recruitmentid });
    return () => {
        cleanStore(dispatch);
    };
  }, []);

  const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('sm'));
  let left = 3
  let right = 8
  let gap = 1
  let gridSx = {
      display: "flex", alignItems: "center"
  }


  return (
    infoApplication &&
    detailposition &&
    skill &&
    candidate && (
      <>
      {page === "normal" && <Box
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
          }}
        >
          <Typography variant="h5">Date: {infoApplication.dateTime.slice(0,10)}</Typography>
          <em>{infoApplication.company_Status}</em>
        </Box>} 
        <Grid container spacing={3} marginBottom={3}>
        <Grid item xs={12} md={7}>
            <GigaCard>
            <GigaCardHeader>
             Postion
            </GigaCardHeader>
            <GigaCardBody>
            <View_detail detailposition={detailposition} skill={skill} />
            </GigaCardBody>
            </GigaCard>
            </Grid>
          <Grid item xs={12} md={5}>
            <GigaCard>
              <GigaCardHeader>
                Candidate
              </GigaCardHeader>
               <GigaCardBody>
               <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
                <Grid item xs={2} md={left} sx={{ ...gridSx, alignItems: "flex-start", columnGap: gap, marginLeft: isMd ? 0 : "10px" }}>
                    <Box sx={{...gridSx,alignItems:'flex-start'}}>
                   <Person/> {
                      isMd &&  <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                       Name
                            </Typography> 
                   
                    }
                            
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={9} md={right} sx={gridSx}>
                    <Typography variant="h6" sx={{ marginLeft: "8px",wordBreak:'break-word' }}>
                        {candidate.name}
                    </Typography>
                </Grid>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
                <Grid item xs={2} md={left} sx={{ ...gridSx, alignItems: "flex-start", columnGap: gap, marginLeft: isMd ? 0 : "10px" }}>
                    <Box sx={{...gridSx,alignItems:'flex-start'}}>
                  <Email/>   {
                      isMd &&  <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                     Email
                            </Typography>  
                   
                   
                        
                    }
                            
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={9} md={right} sx={gridSx}>
                    <Typography variant="h6" sx={{ marginLeft: "8px",whiteSpace:'pre',wordBreak:'break-all'}}>
                        {candidate.email.replace(/@/g, '@\n')}
                    </Typography>
                </Grid>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
                <Grid item xs={2} md={left} sx={{ ...gridSx, alignItems: "flex-start", columnGap: gap, marginLeft: isMd ? 0 : "10px" }}>
                    <Box sx={{...gridSx,alignItems:'flex-start'}}>
                   <Phone/> {
                      isMd &&  <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                        Phone
                            </Typography> 
                   
                   
                    }
                            
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={9} md={right} sx={gridSx}>
                    <Typography variant="h6" sx={{ marginLeft: "8px",wordBreak: 'break-word'  }}>
                        {candidate.phone}
                    </Typography>
                </Grid>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
                <Grid item xs={2} md={left} sx={{ ...gridSx, alignItems: "flex-start", columnGap: gap, marginLeft: isMd ? "0" : "10px" }}>
                    <Box sx={{...gridSx,alignItems:'flex-start'}}>
                        <LocationOn/> {
                          isMd &&     
                          <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                              Address
                            </Typography>
                      
                            
                        }
                            
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={9} md={right} sx={gridSx}>
                    <Typography variant="h6" sx={{ marginLeft: "8px",wordBreak: 'break-word'  }}>
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
