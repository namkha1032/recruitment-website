import {
  AssignmentTurnedIn,
  Email,
  EmojiEvents,
  IntegrationInstructions,
  Language,
  LocationOn,
  Person,
  Phone,
  Public,
  School,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  Grid,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCertificates from "./ModalCertificates";

const CV = ({ cvid }) => {
  const dispatch = useDispatch();
  const cv = useSelector((state) => state.cv);
  const candidate = useSelector((state) => state.candidate);

  useEffect(() => {
    dispatch({ type: "saga/getCv", payload: cvid });
    return () => {
      dispatch({ type: "cv/setCv", payload: null });
    };
  }, []);
  let style = "1px solid black";
  return (
    cv &&
    candidate && (
      <Box sx={{ border: "1px solid black", p: "16px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={3} sm={3}
            sx={{
              display: "flex",
              alignItems: "center",
              bottom: "25px",
            }}
          >
            <Box
              component="img"
              sx={{
                borderRadius: "50%",
                border: "1px solid #ccc",
                width: "150px",
                height: "150px",
              }}
              src={candidate.image}
              alt=""
            />
          </Grid>
          <Grid item md={1} xs={2}></Grid>
          <Grid item md={8} xs={7}>
            <Box component="h1" sx={{ margin: "24px 0px 0px  0px" }}>
              {candidate.name}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  padding: "10px 24px 0 0",
                  display: "flex",
                  flexWrap: "no-wrap",
                }}
              >
                <Email fontSize="small" />
                <Box sx={{ pl: "10px" }}>{candidate.email}</Box>
              </Box>
              <Box
                sx={{
                  padding: "10px 24px 0 0",
                  display: "flex",
                  flexWrap: "no-wrap",
                }}
              >
                <Phone fontSize="small" />
                <Box sx={{ pl: "10px" }}>{candidate.phone}</Box>
              </Box>
              <Box
                sx={{
                  padding: "10px 24px 0 0",
                  display: "flex",
                  flexWrap: "no-wrap",
                }}
              >
                <LocationOn fontSize="small" />
                <Box sx={{ pl: "10px" }}>{candidate.address}</Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={12} sm={12}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Public sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "5.5px", m: 0 }}
                >
                  Introduction
                </Box>
              </Box>
              <Box sx={{ padding: "10px 0 0 40px" }}>{cv.introduction}</Box>
            </Box>
            <Box pl='16px' pb='16px' width='100%'><Divider sx={{ backgroundColor: "black", mt: "16px" }} /></Box>
          </Grid>

          <Grid item md={12} sm={12} >
          
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <IntegrationInstructions sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "6.5px", m: 0 }}
                >
                  Skills
                </Box>
              </Box>
              <Box sx={{ padding: "0px 0 0 40px" }}>
                {cv.skills.map((skill, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection:'column',
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      mb:'16px'
                  
                    }}
                  >
                    <Box m={0} component='h4'>{skill.skillname}</Box>
                    <Box> 1 năm kinh nghiệm</Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ backgroundColor: "black", mt: "16px" }} />
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EmojiEvents sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "6.5px", m: 0 }}
                >
                  Certificates
                </Box>
              </Box>
              <Box sx={{ padding: "0px 0 0 40px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <Grid container spacing={2}>
                  {cv.certificates.map((certificate, index) => (
                    <Grid item md={6} sm={12} key={index}>
                      <ModalCertificates certificate={certificate} />
                    </Grid>
                  ))}</Grid>
                </Box>
                 
              </Box>
            </Box>
           
          </Grid>
          
          <Grid item md={12} sm={12}>
          <Divider sx={{ backgroundColor: "black", mt: "16px" }} />
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AssignmentTurnedIn sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "5.5px", m: 0 }}
                >
                  Experience
                </Box>
              </Box>
              <Box sx={{ padding: "10px 0 0 40px" }}>{`${cv.experience}`}</Box>
            </Box>
            
          </Grid>
          <Box pl='16px' width='100%'><Divider sx={{ backgroundColor: "black", mt: "16px" }} /></Box>
          <Grid item md={6} sm={12}>
        
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Language sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "5.5px", m: 0 }}
                >
                  Language
                </Box>
              </Box>
              <Stack direction='row' sx={{ display:'flex',flexWrap:'wrap', padding: "10px 0 0 40px" }}>
                {cv.languages.map((language, index) => (
                  <Box key={index} m='16px 16px 0 0'>
                  <Chip  label={language.name} /></Box>
                ))}
              </Stack>
            </Box>
            
        </Grid>
        <Grid item md={6} sm={12}>
      
            <Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <School sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "5.5px", m: 0 }}
                >
                  Education
                </Box>
              </Box>
              <Box sx={{ padding: "10px 0 0 40px" }}>{cv.education}</Box>
            </Box>
            
        </Grid>
        </Grid>
        
      </Box>
    )
  );
};

export default CV;
