import { Box, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import CV from "../CV/CV";
import { Edit, Email, Home, PermContactCalendar, Person, Phone } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import GigaCard from "../GigaCard/GigaCard";


const  ProfileInfo = ({ cvid, user }) => {
  const [selectedImage, setSelectedImage] = useState(user.image);
  const [block, setBlock] = useState(true);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birth, setBirth] = useState(user.birth);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
 

  const handleSave = () => {
    setBlock(true);
  };
  const handleEdit = () => {
    setBlock(false);
  };

  return (
    
      <Box sx={{ mb: "24px", }} id="detail">
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
            <a href="#edit">
              <Edit
                onClick={handleEdit}
                fontSize="small"
                sx={{ ml: "5px", color: "black" }}
              />
            </a>
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
              <Button onClick={handleSave} variant="contained">
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
