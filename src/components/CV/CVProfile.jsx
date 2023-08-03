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
import Loading from "../Loading/Loading";
  
  const CVProfile = ({ cvid,page }) => {
    const dispatch = useDispatch();
    const cv = useSelector((state) => state.cv);
    const candidate = useSelector((state) => state.candidate);
    const user = useSelector(state => state.user)
    useEffect(() => {
      console.log({cvid:cvid,token:user.token,userid:user.userid} )
      dispatch({ type: "cvSaga/getCv", payload: {cvid:cvid,token:user.token,userid:user.userid} });
      return () => {
        dispatch({ type: "cv/setCv", payload: null });
      };
    }, []);
    console.log(cv)
  
    return (
      cv &&
      candidate && (
        <>
        <Box>
          <Grid container spacing={3}>
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
          { page !== 'Profile' && <Grid item md={12} xs={12}>
          <GigaCard>
  
           <Box p={3}>
          <Box m={0} component='h2' textAlign='center'> CV PDF</Box>
          <iframe style={{width:'100%',height:'800px'}} src="http://localhost:3000/data/2019_MT_KTM.pdf" ></iframe>
        </Box>
          </GigaCard>
          </Grid>}
          </Grid>
        </Box>
        </>)
    )
  };
  
  export default CVProfile;
  