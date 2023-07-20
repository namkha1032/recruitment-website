import {
  ContentPaste,
  Edit,
  Email,
  Home,
  PermContactCalendar,
  Person,
  Phone,
} from "@mui/icons-material";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import CV from "../../components/CV/CV";
import axios from "axios";
import { TabPanel } from "@mui/lab";
const ProfileDetail = ({ user, CVs, cvid, change, setChange }) => {
  const userid = localStorage.getItem("userid");
  const [selectedImage, setSelectedImage] = useState("");
  const [block, setBlock] = useState(true);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birth, setBirth] = useState(user.birth);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [cv, setCv] = useState(user.cvselected);
  console.log(CVs, user);
  const cvdetail = CVs.filter((CV) => CV.cvid === cv)[0];
  console.log(cvdetail);
  const [CVname, setCVname] = useState(
    cvdetail !== undefined ? cvdetail.name : ""
  );
  let data = {
    "user": {
      "userid": 0,
      "name": "Nguyễn Văn A",
      "email": "0986925857@gmail.com",
      "birth": "24-08-20000",
      "phone": "0986925857aa",
      "address": "Phường Linh Đông Thành Phố Thủ Đức HCM",
      "cvselected": 0,
      "image": "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
    },
    "cvs": [
      {
        "cvid": 0,
        "userid": 0,
        "name": "CV1",
        "cvpdf": "",
        "toeic": 500,
        "education": "Đại học",
        "experience": "I have gained valuable experience in React.js, HTML, and interfaces and manage state efficiently. HTML provides the structure of web content, while CSS enables me to style and customize layouts. By combining these technologies, I create modern and engaging web experiences.",
        "certificates": [
          {
            "certificateid": 0,
            "name": "HTML CSS",
            "decription": "HTML CSS",
            "Orgranizationname": "HTML CSS",
            "dateearned": "12-12-2022",
            "expirationdate": "12-12-2023",
            "link": "abc.com"
          }
        ],
        "skills": [
          {
            "cvskillid": 0,
            "skillname": "HTML CSS",
            "decription": "HTML CSS"
          },
          {
            "cvskillid": 1,
            "skillname": "ReactJS",
            "decription": "ReactJS"
          },
          {
            "cvskillid": 2,
            "skillname": "JavaScript",
            "decription": "JavaScript"
          },
          {
            "cvskillid": 3,
            "skillname": "Python",
            "decription": "Python"
          }
        ],
        "languages": [
          {
            "cvlanguageid": 0,
            "name": "English",
            "decription": ""
          },
          {
            "cvlanguageid": 1,
            "name": "Korean",
            "decription": ""
          },
          {
            "cvlanguageid": 2,
            "name": "Chinese",
            "decription": ""
          }
        ]
      },
      {
        "cvid": 1,
        "userid": 1,
        "name": "CV2",
        "cvpdf": "",
        "toeic": 500,
        "education": "Đại học",
        "experience": "I have gained valuable experience in React.js, HTML, and interfaces and manage state efficiently. HTML provides the structure of web content, while CSS enables me to style and customize layouts. By combining these technologies, I create modern and engaging web experiences.",
        "certificates": [
          {
            "certificateid": 0,
            "name": "HTML CSS",
            "decription": "HTML CSS",
            "Orgranizationname": "HTML CSS",
            "dateearned": "12-12-2022",
            "expirationdate": "12-12-2023",
            "link": "abc.com"
          }
        ],
        "skills": [
          {
            "cvskillid": 0,
            "skillname": "HTML CSS",
            "decription": "HTML CSS"
          },
          {
            "cvskillid": 1,
            "skillname": "ReactJS",
            "decription": "ReactJS"
          },
          {
            "cvskillid": 2,
            "skillname": "JavaScript",
            "decription": "JavaScript"
          },
          {
            "cvskillid": 3,
            "skillname": "Python",
            "decription": "Python"
          },
          {
            "cvskillid": 2,
            "skillname": "JavaScript",
            "decription": "JavaScript"
          },
          {
            "cvskillid": 3,
            "skillname": "Python",
            "decription": "Python"
          }
        ],
        "languages": [
          {
            "cvlanguageid": 0,
            "name": "English",
            "decription": ""
          },
          {
            "cvlanguageid": 1,
            "name": "Korean",
            "decription": ""
          },
          {
            "cvlanguageid": 2,
            "name": "Chinese",
            "decription": ""
          },
          {
            "cvlanguageid": 2,
            "name": "Chinese",
            "decription": ""
          },
          {
            "cvlanguageid": 2,
            "name": "Chinese",
            "decription": ""
          }
        ]
      }
    ],
    "applications": [
      {
        "applicationid": "0",
        "name": ""
      }
    ]
  }
  const handleSave = () => {
    data = {...data,name,
      phone,
      birth,
      email,
      address,}
    // const res = axios.patch(`http://localhost:3001/user?userid=${userid}`, {
    //   name,
    //   phone,
    //   birth,
    //   email,
    //   address,
    // });
    setChange(!change);
    setBlock(true);
  };
  const handleEdit = () => {
    setBlock(false);
  };

  return (
    CVs && (
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

                        <TextField
                          fullWidth
                          InputProps={{ readOnly: block }}
                          size="small"
                          label="CV"
                          value={CVname}
                          sx={{ marginLeft: "16px" }}
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
                </Paper>
              )}
            </Grid>
            {cvdetail && (
              <Grid item md={7} xs={12}>
                <Paper sx={{ marginBottom: "24px", padding: "16px" }}>
                  {console.log(CVs.filter((cv) => cv.cvid === cvid))}
                  <CV cv={CVs.filter((cv) => cv.cvid === cvid)} user={user} />
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
