import { Box, Button, Paper, TextField, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import CV from "../CV/CV";
import { Edit, Email, Home, PermContactCalendar, Person, Phone } from "@mui/icons-material";
import GigaCard from "../GigaCard/GigaCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const  ProfileInfo = ({ profile }) => {

  const user = useSelector(state => state.user)
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();


  
  const [block, setBlock] = useState(true);
  const [name, setName] = useState(profile.name ? profile.name : '');
  const [email, setEmail] = useState(profile.email ? profile.email : '');
  const [birth, setBirth] = useState(profile.birth ? profile.birth : '');
  const [phone, setPhone] = useState(profile.phone ? profile.phone : '');
  const [address, setAddress] = useState(profile.address ? profile.address : '');


 

function handleSave () {
  setBlock(true);
  const data = {
    FullName: name,
    DateOfBirth:birth,
    Address:address,
    ImageFile:profile.image ? profile.image : '' ,
    PhoneNumber:phone
  }
  console.log(data)
  dispatch({type:'profileSaga/updateProfile',payload: {data,userid:user.userid,token:user.token}})
}
  const handleEdit = () => {
    setBlock(false);
  };

  return (
    
      <Box id="detail">
      <GigaCard>
        <Box sx={{ padding: "24px" }}>
          <Box
            component="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 0,
            }}
          >
            Detail{" "}
           
              <Edit
                onClick={handleEdit}
                fontSize="small"
                sx={{ ml: "5px", color: "black" }}
              />
          
          </Box>
          <Box sx={{ margin: "24px 0px 0px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <Person />
              <TextField
                fullWidth
                InputProps={{ readOnly: block }}
                size="small"
                label="Name"
                value={name ? name : ''}
                sx={{ marginLeft: "16px" }}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <PermContactCalendar />

              <TextField
                fullWidth
                InputProps={{ readOnly: block }}
                size="small"
                label="Birth"
                value={birth ? birth : ''}
                sx={{ marginLeft: "16px" }}
                onChange={(e) => setBirth(e.target.value)}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <Email />

              <TextField
                fullWidth
                InputProps={{ readOnly: block }}
                size="small"
                label="Email"
                value={email ? email : ''}
                sx={{ marginLeft: "16px" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <Phone />

              <TextField
                fullWidth
                InputProps={{ readOnly: block }}
                size="small"
                label="Phone"
                value={phone ? phone : ''}
                sx={{ marginLeft: "16px" }}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <Home />

              <TextField
                fullWidth
                InputProps={{ readOnly: block }}
                multiline
                size="small"
                label="Address"
                value={address ? address : ''}
                sx={{ marginLeft: "16px" }}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: block ? "none" : "block",
              mt: "16px",
            }}
          >
            {isMd === false ? 
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <Button color='primary' onClick={handleSave} variant="contained" style={{ textTransform: "none", backgroundColor:"black" }}>
                Save
              </Button>
            </Box> 
            : 
            <Box >
              <Button color='primary' sx={{width:'100%'}} onClick={handleSave} variant="contained" style={{ textTransform: "none", backgroundColor:"black" }}>
                Save
             </Button>
            </Box>
            }
            </Box>
        </Box>
        </GigaCard>
      </Box>

   
  );
}

export default ProfileInfo;
