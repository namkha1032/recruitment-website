import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import CV from "../CV/CV";
import { Edit, Email, Home, PermContactCalendar, Person, Phone } from "@mui/icons-material";

import GigaCard from "../GigaCard/GigaCard";


const  ProfileInfo = ({ profile }) => {
  const [selectedImage, setSelectedImage] = useState(profile.image);
  const [block, setBlock] = useState(true);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [birth, setBirth] = useState(profile.birth);
  const [phone, setPhone] = useState(profile.phone);
  const [address, setAddress] = useState(profile.address);
 

  const handleSave = () => {
    setBlock(true);
  };
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
                value={name}
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
                value={birth}
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
                value={email}
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
                value={phone}
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
                value={address}
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
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <Button color='primary' onClick={handleSave} variant="contained" style={{ textTransform: "none", backgroundColor:"black" }}>
                Save
              </Button>
            </Box>
          </Box>
        </Box>
        </GigaCard>
      </Box>

   
  );
}

export default ProfileInfo;
