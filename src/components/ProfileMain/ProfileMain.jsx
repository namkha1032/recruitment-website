import {
  Box,
  Button,
  ButtonBase,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { History, Key, PaidOutlined, Person, ScheduleOutlined, Send } from "@mui/icons-material";
import CV from "../CV/CV";
import ProfileChangePW from "./ProfileChangPW";
import ProfileInfo from "./ProfileInfo";
import GigaCard from "../GigaCard/GigaCard";
import useGetRole from "../../hooks/useGetRole";
import ProfileHistory from "./ProfileHistory/ProfileHistory";
import CVProfile from "../CV/CVProfile";
import { useParams } from "react-router-dom/dist";

const ProfileMain = ({ page }) => {
  const navigate = useNavigate();
  const role = useGetRole();
  const {profileid} = useParams()
  const positionList = useSelector((state) => state.positionList);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile)
  const userId = useSelector(state => state.user.userid)
  useEffect(() => {
    dispatch({ type: "saga/getPositionList" });
    dispatch({ type: "saga/getProfile" });
  }, []);
  const handleClickChangePW = () => {
    if (page !== "ChangePW") navigate("/profile/1/changepassword");
  };
  const handleClickProfile = () => {
    if (page !== "Profile") navigate("/profile/1");
  };
  const handleClickPosition = (id) =>{
    navigate(`/recruitment/${id}`)
  }
  const handleClickHistory = () => {
    if (page !== "History") navigate("/profile/1/history");
  }


  return (
    profile && (
      <Container>
        <Box sx={{ paddingTop: "40px", paddingBottom: "20px" }}>
          <ProfileHeader profile={profile} />
        </Box>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12} position='relative' pb={3}>
            <Box sx={{position:"sticky",top:'95px'}}>
              <Box sx={{ width: "100%" }}>
                <GigaCard>
                  <List
                    sx={{
                      m: "16px",
                      // display:'flex',
                      maxWidth: "100%",
                      bgcolor: "background.paper",
                      // position: fixed
                    }}
                  >
                    <ListItemButton
                      selected={page === "Profile"}
                      onClick={handleClickProfile}
                    >
                      <ListItemIcon>
                        <Person />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                    
                    
                   {profileid === userId && <ListItemButton
                      selected={page === "ChangePW"}
                      onClick={handleClickChangePW}
                    >
                      <ListItemIcon>
                        <Key />
                      </ListItemIcon>
                      <ListItemText primary="Change Password" />
                    </ListItemButton>}
                    {/*<ListItemButton
                    selected={page === "History"}
                      onClick={handleClickHistory}
                    >
                      <ListItemIcon>
                      
                        <History />
                      </ListItemIcon>
                      <ListItemText primary="History" />
                    </ListItemButton>*/}
                    
                  </List>
                </GigaCard>
              </Box>{" "}
            </Box>
          </Grid>
          <Grid item md={9} xs={12}>
          {page === "Profile" && (
              <Box>
                <Box sx={{ mb: "24px" }}>
                <ProfileInfo profile={profile} />
                </Box>
                {role === "candidate" && (
                  
                      <Box >
                        <CVProfile cvid={profile.cvselected} page="Profile"/>
                      
                  </Box>
                )}
              </Box>
            ) }
            {page === "ChangePW" && (
              <Box sx={{ mb: "24px" }}>
                <GigaCard>
                  <Box sx={{ padding: "24px" }}>
                    <ProfileChangePW />
                  </Box>
                </GigaCard>
              </Box>
            )}
            {page === "History" && (
              <Box sx={{ mb: "24px" }}>
                <GigaCard>
                  <Box sx={{ padding: "24px" }}>
                    <ProfileHistory />
                  </Box>
                </GigaCard>
              </Box>
            )}
         
          </Grid>
          
        </Grid>
      </Container>
    )
  );
};

export default ProfileMain;
