import {
  ContentPaste,
  Edit,
  Email,
  Home,
  PermContactCalendar,
  Person,
  Phone,
} from "@mui/icons-material";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import CV from "../../components/CV/CV";
import { TabPanel } from "@mui/lab";
import { useDispatch } from "react-redux";

const ProfileDetail = ({ user, cvlist, cvid, change, setChange }) => {
  const dispatch = useDispatch()
  const [selectedImage, setSelectedImage] = useState(user.image);

  const [block, setBlock] = useState(true);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birth, setBirth] = useState(user.birth);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [cv, setCv] = useState(user.cvselected);

  const handleSave = () => {
    // dispatch({type:'saga/setUser',payload:{userid:parseInt(localStorage.getItem('user')),name,email,birth,phone,address,cvselected:cv,image:selectedImage}})
    setChange(!change);
    setBlock(true);
  };
  const handleEdit = () => {
    setBlock(false);
  };

  return (
    cvlist && (
      <>
        <TabPanel value="Profile" sx={{ padding: "24px 0px 0px 0px" }}>
          <Grid
            container
            sx={{ position: "relative", left: "0px" }}
            spacing={3}
          >
            <Grid item md={5} xs={12}>
              {user && (
                <Paper sx={{ mb: "24px" }} id="detail">
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
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "12px",
                        }}
                      >
                        <ContentPaste />
                        <FormControl  fullWidth sx={{ marginLeft: "16px" }} size="small">
                        <InputLabel id="demo-select-small-label">CV</InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          defaultValue={user.cvselected}
                          label="CV"
                          onChange={(e) =>setCv(e.target.value)}
                          inputProps={{ readOnly: block }} 
                       
                        >
                        {console.log(cvlist)}
                        {cvlist.map((cv,index )=> 
                          <MenuItem key={index} value={cv.cvid}>{cv.name}</MenuItem>
                          )}
                          
                          
                        </Select>
                      </FormControl>
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
                </Paper>
              )}
            </Grid>
            {user.cvselected !== null && (
              <Grid item md={7} xs={12}>
                <Paper sx={{ marginBottom: "24px", padding: "16px" }}>
                  <CV cvid={cvid}/>
                </Paper> 
              </Grid>
            )}
          </Grid>
        </TabPanel>
      </>
    )
  );
};

export default ProfileDetail;
