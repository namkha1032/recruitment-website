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
import { useDispatch, useSelector } from "react-redux";
// import { checkuser } from "../../assets/js/checkuser";
// import Error from "../../components/Error/Error";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log('user: ', user)
  const [tabValue, setTabValue] = useState("Profile");
  // const [change, setChange] = useState(true);
  // console.log(user.cvselected)
  useEffect(() => {
    // dispatch({ type: "saga/getListcv" });
    return () => {
      // dispatch({ type: "listcv/setListcv", payload: null });
    };
  }, []);
  // useEffect(() => {
  //   // dispatch({ type: "saga/getUserSaga" });
  //   return () => {
  //     // dispatch({ type: "user/setUser", payload: null });
  //   };
  // }, [change]);
  return (
    user && (
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
              // cvlist={listcv}
              cvid={user.cvselected}
            // change={change}
            // setChange={setChange}
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
