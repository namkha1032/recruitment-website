import {
  Box,
  CircularProgress,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

import React, { useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Key, Person } from "@mui/icons-material";
import ProfileChangePW from "./ProfileChangPW";
import ProfileInfo from "./ProfileInfo";
import GigaCard from "../GigaCard/GigaCard";
import useGetRole from "../../hooks/useGetRole";
import CVProfile from "../CV/CVProfile";
import { useParams } from "react-router-dom/dist";
import MissingPage from "../MissingPage/MissingPage";
import cleanStore from "../../utils/cleanStore";

const ProfileMain = ({ page }) => {
  const navigate = useNavigate();
  const role = useGetRole();

  const { profileid } = useParams();
  const positionList = useSelector((state) => state.positionList);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile); // tạm thời lấy profile là của user đăng nhập => phải sửa thành profile của userid
  // const profile = null
  const userId = useSelector(state => state.user.userid)
  console.log(profile)

  useEffect(() => {
    dispatch({ type: "positionSaga/getPositionList" });
  }, []);
  const handleClickChangePW = () => {
    if (page !== "ChangePW") navigate(`/profile/${profileid}/changepassword`);
  };
  const handleClickProfile = () => {
    if (page !== "Profile") navigate(`/profile/${profileid}`);
  };
  const handleClickPosition = (id) => {
    navigate(`/recruitment/${id}`);
  };
  const handleClickHistory = () => {
    if (page !== "History") navigate("/profile/1/history");
  };
  return (
   
    profile === null ?  
    
    <Box sx={{position:'sticky',top:'300px',display:'flex',justifyContent:'center'}}>  
  
            <Box><CircularProgress color="secondary" /> </Box>      
     
    </Box>
    : 
    profile.id === profileid ?
    (
      <Container mb={3}>
        <Box sx={{ paddingTop: "40px", paddingBottom: "20px" }}>
          <ProfileHeader />
        </Box>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12} position="relative" >
            <Box sx={{ position: "sticky", top: "0px" }}>
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

                    {profileid === userId && (
                      <ListItemButton
                        selected={page === "ChangePW"}
                        onClick={handleClickChangePW}
                      >
                        <ListItemIcon>
                          <Key />
                        </ListItemIcon>
                        <ListItemText primary="Change Password" />
                      </ListItemButton>
                    )}
                  </List>
                </GigaCard>
              </Box>{" "}
            </Box>
          </Grid>
          <Grid item md={9} xs={12}>
            {page === "Profile" && (
              <Box>
                <Box>
                  <ProfileInfo />
                </Box>
                {role === "candidate" && profileid === userId && (
                  <Box>
                    <CVProfile cvid={null} page="Profile" />
                  </Box>
                )}
              </Box>
            )}
            {page === "ChangePW" && (
              <Box >
                <GigaCard>
                  <Box sx={{ padding: "24px" }}>
                    <ProfileChangePW />
                  </Box>
                </GigaCard>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    ) : <MissingPage/>
             
        
       
    
  );
};

export default ProfileMain;
