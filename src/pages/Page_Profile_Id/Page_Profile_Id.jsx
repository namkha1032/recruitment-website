import {
  CameraAltOutlined,
  ContentPaste,
  Edit,
  Home,
  PermContactCalendar,
  Person,
  Phone,
} from "@mui/icons-material";
import { DatePicker, LocalizationProvider, TabContext, TabPanel } from "@mui/lab";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import "./Page_Profile_Id.css";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import CV from "../../components/CV/CV";
const Profile = () => {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(
    "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
  );
  const [block,setBlock] = useState('none')
  const [tabValue, setTabValue] = useState("Profile");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file !== null) setSelectedImage(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };
  const handleSave = () => {
    setBlock('none')
  }
  const handleEdit = () => {
    setBlock('block')
  }
  return (
    <Container sx={{ backgroundColor: "#f3f4f9" }}>
      <TabContext value={tabValue}>
        <Box sx={{ paddingTop: "40px", paddingBottom: "20px" }}>
          <img
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
            src="https://uko-react.vercel.app/static/background/user-cover-pic.png"
            alt=""
          />

          <Box
            sx={{
              padding: "0px 24px 16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              backgroundColor: "white",
              borderBottomLeftRadius: "7px",
              borderBottomRightRadius: "7px",
            }}
          >
            <Box
              sx={{
                position: "relative",
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
                  width: "100px",
                  height: "100px",
                }}
                src={selectedImage}
                alt=""
              />
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <Box
                sx={{
                  border: "1px solid #c1c3cb",
                  borderRadius: "50%",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#c1c3cb",
                  width: "25px",
                  height: "25px",
                  left: "75px",
                  bottom: "3px",
                }}
              >
                <IconButton
                  sx={{
                    padding: "2.5px",
                  }}
                >
                  <label
                    htmlFor="image-upload"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <CameraAltOutlined fontSize="small" />
                  </label>
                </IconButton>
              </Box>

              <Box sx={{ margin: "24px 0px 0px  24px" }}>Nguyễn Văn A</Box>
            </Box>

            <Tabs
              className="tab"
              centered={true}
              sx={{
                height: "48px",
              }}
              value={tabValue}
              onChange={(e, newvalue) => setTabValue(newvalue)}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ padding: "0px 8px", margin: "0px 16px 0px 0px" }}
                value="Profile"
                label="Profile"
              />
              
              {// <Tab
              //   sx={{ padding: "0px 8px", margin: "0px 0px 0px 16px" }}
              //   value="CVs"
              //   label="CVs"
              // />
              // <Tab
              //   sx={{ padding: "0px 8px", margin: "0px 0px 0px 16px" }}
              //   value="Applications"
              //   label="Applications"
              // />
              // <Tab
              //   sx={{ padding: "0px 8px", margin: "0px 0px 0px 16px" }}
              //   value="Interviews"
              //   label="Interviews"
              // />
              // <Tab
              //   sx={{ padding: "0px 8px", margin: "0px 0px 0px 16px" }}
              //   value="Events"
              //   label="Events"
              // />
            }
              
            </Tabs>
          </Box>
          <TabPanel value="Profile" sx={{ padding: "24px 0px 0px 0px" }}>
            <Grid
              container
              sx={{ position: "relative", left: "0px" }}
              spacing={3}
            >
              <Grid item md={5} xs={12}>
                <Paper sx={{mb:'24px'}} id='detail'>
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
                      Detail <a href='#edit'><Edit  onClick={handleEdit} fontSize="small" sx={{ ml: "5px",color:'black' }} /></a> 
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
                        <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
                          Nguyễn Văn A
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "12px",
                        }}
                      >
                        <PermContactCalendar />
                        <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
                          24/08/2000
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "12px",
                        }}
                      >
                        <Home />
                        <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
                          Phường Linh Đông, Tp Thủ Đức{" "}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "12px",
                        }}
                      >
                        <Phone />
                        <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
                          0123456789
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "12px",
                        }}
                      >
                        <ContentPaste />
                        <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
                          CV1
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
                <Paper id='edit' sx={{display: block}}>
                <Box sx={{ padding: "24px" }}>
                  <TextField value='abc' label='Name' fullWidth sx={{mb:'16px'}}/>
                  <TextField value='abc' label='Birth' fullWidth sx={{mb:'16px'}}/>
                  <TextField value='abc' label='Address' fullWidth sx={{mb:'16px'}}/>
                  <TextField value='abc' label='Phone' fullWidth sx={{mb:'16px'}}/>
                  <TextField value='abc' label='Email' fullWidth sx={{mb:'16px'}}/>
                    <Box sx={{display:'flex',justifyContent:'right'}}>
                        <Button onClick={handleSave} variant="contained">Save</Button>
                    </Box>
                </Box>
                </Paper>
              </Grid>
              <Grid item md={7} xs={12}>
                <Paper sx={{ marginBottom: "24px", padding: "16px" }}>
                  <CV />
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </TabContext>
      <Button variant="contained" color="success" onClick={()=>navigate("/profile/1/changepassword")}>Đổi mật khẩu</Button>
    </Container>
  );
};

export default Profile;
