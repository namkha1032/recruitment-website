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
    CircularProgress,
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
  
  const CVProfile = ({ cvid,page }) => {
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
      cv &&
      candidate ? (
        <>
        <Box>
          <Grid container spacing={3}>
          {page !== "Profile" && 
          <Grid item md={12} xs={12}>
          <GigaCard> 
            <Grid container p={3}>
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
  
               
                 </Grid></GigaCard>
                </Grid>
                }
  
                <Grid item md={12} xs={12}>
                <GigaCard>
                <Box p={3}>
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
                </Box></GigaCard>
              </Grid>
  
  
            <Grid item md={12} xs={12} >
            <GigaCard>
              <Box p={3}>
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
              </Box>
            </GigaCard>
            </Grid>
            <Grid item md={12} xs={12} >
            <GigaCard>
              <Box p={3}>
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
              </Box>
             </GigaCard>
            </Grid>
            
            <Grid item md={12} xs={12}>
            <GigaCard>
              <Box p={3}>
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
              </GigaCard>
            </Grid>
  
            <Grid item md={12} xs={12}>
            <GigaCard>
              <Box p={3}>
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
             </GigaCard> 
          </Grid>
          <Grid item md={12} xs={12}>
          <GigaCard>
              <Box p={3}>
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
              </GigaCard>
          </Grid>
          <Grid item md={12} xs={12}>
          <GigaCard>
  
          { page !== 'Profile' && <Box p={3}>
          <Box m={0} component='h2' textAlign='center'> CV PDF</Box>
          <iframe style={{width:'100%',height:'800px'}} src="http://localhost:3000/data/2019_MT_KTM.pdf" ></iframe>
        </Box>}
          </GigaCard>
          </Grid>
          </Grid>
        </Box>
        </>
      ): <Box sx={{display:'flex',justifyContent:'center'}}><CircularProgress color="secondary" /> </Box>  
    );
  };
  
  export default CVProfile;
  