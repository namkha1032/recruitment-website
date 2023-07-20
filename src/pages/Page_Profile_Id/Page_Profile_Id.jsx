import {
  CameraAltOutlined,
  ContentPaste,
  Edit,
  Email,
  Home,
  PermContactCalendar,
  Person,
  Phone,
} from "@mui/icons-material";
import {
  DatePicker,
  LocalizationProvider,
  TabContext,
  TabPanel,
} from "@mui/lab";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

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
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import CV from "../../components/CV/CV";
import axios from "axios";
import ProfileHeader from "./ProfileHeader";
import ProfileDetail from "./ProfileDetail";
// import { checkuser } from "../../assets/js/checkuser";
// import Error from "../../components/Error/Error";
const data = {
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
const Profile = () => {
  const userid = localStorage.getItem("userid");
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(data.user);
  const [CVs, setCVs] = useState(data.cvs);
  const [tabValue, setTabValue] = useState("Profile");
  const [change, setChange] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3001/user?userid=${userid}`
  //     );
      
  //     setUser(response.data);
  //     const response1 = await axios.get(
  //       `http://localhost:3001/cvs?userid=${userid}`
  //     );
  //     setCVs(response1.data);
  //   };
  //   fetchData();
  // }, [change]);
  // if (checkuser(location, 1) === true) {
  //   return <Error />;
  // }
  return (
    user &&
    CVs && (
      <Container sx={{ backgroundColor: "#f3f4f9" }}>
        <>
          {" "}
          <TabContext value={tabValue}>
            <Box sx={{ paddingTop: "40px", paddingBottom: "20px" }}>
              <ProfileHeader
                tabValue={tabValue}
                setTabValue={setTabValue}
                id={user.cvselected}
                userName={user.name}
              />
            </Box>
            <ProfileDetail
              user={user}
              CVs={CVs}
              cvid={user.cvselected}
              change={change}
              setChange={setChange}
            />
          </TabContext>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/profile/1/changepassword")}
          >
            Đổi mật khẩu
          </Button>{" "}
        </>
      </Container>
    )
  );
};

export default Profile;
