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
  Button,
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
import GigaCard from "../GigaCard/GigaCard";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const CV = ({ cvid,page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cv = useSelector((state) => state.cv);
  const candidate = useSelector((state) => state.candidate);
  useEffect(() => {
    dispatch({ type: "saga/getCv", payload: cvid });
    return () => {
      dispatch({ type: "cv/setCv", payload: null });
    };
  }, []);
  

  return (
    cv &&
    candidate ? (
      <>
      <Box >
      <GigaCard>
        <Grid container spacing={3} >
        {page !== "Profile" && <>
   
         <Grid item md={12} xs={12}>
          <Box p='24px 24px 0 24px'>
          <Grid container >
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
            <Box>
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
         
          </Grid>
          <Box><Divider orientation="horizontal" flexItem sx={{mt:3,height:'0.5px'}} /></Box>


        </Box>
    </Grid>
</>
             
               
           
              }

              <Grid item md={12} xs={12}>
       
              <Box px={3}>
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
                <Box><Divider orientation="horizontal" flexItem sx={{mt:3,height:'0.5px' }} /></Box>
              </Box>
            </Grid>


          <Grid item md={12} xs={12} >
     
            <Box px={3}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <IntegrationInstructions sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "6.5px", m: 0 }}
                >
                  Skills
                </Box>
              </Box>
              <Box sx={{ padding: "16px 0 0 40px" }}>
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
                    <Box m={0} component='h4'>{skill.skillName} • 1 năm kinh nghiệm</Box>
                    <Box>{skill.description}</Box> 
                  </Box>
                ))}
              </Box>
              <Box><Divider orientation="horizontal" flexItem sx={{mt:3,height:'0.5px' }} /></Box>
            </Box>
  
          </Grid>
          <Grid item md={12} xs={12} >

            <Box px={3}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EmojiEvents sx={{ mr: "15px" }} />
                <Box
                  component="h2"
                  sx={{ position: "relative", top: "6.5px", m: 0 }}
                >
                  Certificates
                </Box>
              </Box>
              <Box sx={{ padding: "0px 0 0 40px",mt:"16px" }}>
                <Box
              
                >
                  
                  
                  {cv.certificates.map((certificate, index) => (
                  
                    <Box key={index} sx={{display:'flex'}}>
                      
                      <ModalCertificates  certificate={certificate} />
                    </Box>
              
                  ))}
                </Box>
                 
              </Box>
              <Box><Divider orientation="horizontal" flexItem sx={{mt:3,height:'0.5px' }} /></Box>
            </Box>
     
          </Grid>
          
          <Grid item md={12} xs={12}>

            <Box px={3}>

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
              <Box><Divider orientation="horizontal" flexItem sx={{mt:3,height:'0.5px' }} /></Box>
            </Box>

          </Grid>

          <Grid item md={12} xs={12}>

            <Box px={3}>
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
              <Box><Divider orientation="horizontal" flexItem sx={{mt:3,height:'0.5px' }} /></Box>
            </Box>

        </Grid>
        <Grid item md={12} xs={12}>
 
            <Box p='0 24px 24px 24px'>
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
        </GigaCard>
        <Box mt={3}>
        <GigaCard>

        { page !== 'Profile' && <Box p={3}>
        <Box m={0} component='h2' textAlign='center'> CV PDF</Box>
        <iframe style={{width:'100%',height:'800px'}} src="http://localhost:3000/data/2019_MT_KTM.pdf" ></iframe>
      </Box>}
        </GigaCard>
         {page === "profile_cv" && <Box sx={{ display: "flex", justifyContent: "flex-end", marginY: 4 }}>
            <Button
              variant="contained"
              color="warning"
              onClick={() => navigate("/profile/1/cv/1/update")}
            >
              update
            </Button>
          </Box>}
    </Box>
        
      </Box>
      </>
    ):<Loading/>
  );
};

export default CV;
