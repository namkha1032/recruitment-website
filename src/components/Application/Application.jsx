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
import InfoApplication from '../InfoApplication/InfoApplication'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Application = ({ cvid,page}) => {
  const {recruitmentid,applicationid} = useParams();
  console.log(recruitmentid)
  return (
  <>
      <Typography variant="h3" align="center" m={3}>
        Detail of the Application
      </Typography>
      <InfoApplication applicationid={applicationid} recruitmentid={recruitmentid} page={page}/>
      <Grid container  spacing={3}>
      
          
        <Grid item xs={12}>
        
            
              <CV cvid={cvid} />

       
        </Grid>
      </Grid>
     
    </>
  );
};

export default Application;
