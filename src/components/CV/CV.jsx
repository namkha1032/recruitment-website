import {
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

  return (
    cv && candidate && (
      <>
        <Grid container spacing={2}>
          <Grid item md={3} xs={3}
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
            <Box component="h1" sx={{ margin: "24px 0px 0px  24px" }}>
                {candidate.name}
            </Box>
            <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start'}}>
              <Box sx={{ padding: "10px 24px 0 0", display: 'flex', flexWrap: 'no-wrap' }}>
                <Email  fontSize="small" />
                <Box sx={{pl:'10px'}}>{candidate.email}</Box>
              </Box>
              <Box sx={{ padding: "10px 24px 0 0", display: 'flex', flexWrap: 'no-wrap' }}>
                <Phone  fontSize="small" />
                <Box sx={{pl:'10px'}}>{candidate.phone}</Box>
              </Box>
              <Box sx={{ padding: "10px 24px 0 0", display: 'flex', flexWrap: 'no-wrap' }}>
                <LocationOn fontSize="small" />
                <Box sx={{pl:'10px'}}>{candidate.address}</Box>
              </Box>
           
              </Box>
          </Grid>


         
          <Grid item lg={12} md={12}>
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
              <Box sx={{ padding: "10px 0 0 40px" }}>{cv.experience}</Box>
            </Box>
            <Divider sx={{ backgroundColor: "black", mt: "16px" }} />
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
                    <Box key={index} sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap', margin: "10px 16px 0 0", border:'1px solid black',borderRadius:'3px',p:'16px' }}>
                      
                      <Box>{skill.skillname}</Box>
                      <Box>Số năm kinh nghiệm: 1 năm</Box>
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
                <Box sx={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap'}} >
                  {cv.certificates.map((certificate, index) => (
                    <Box key={index}>
                    <ModalCertificates certificate={certificate} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "black", mt: "16px" }} />
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
              <Box sx={{ padding: "10px 0 0 40px" }}>
                {cv.languages.map((language, index) => (
                  <Box key={index}>&bull; {language.name}</Box>
                ))}
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "black", mt: "16px" }} />
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
      </>
    )
  );
};

export default CV;
