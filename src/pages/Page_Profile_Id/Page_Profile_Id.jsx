import {
  CameraAltOutlined,
  ContentPaste,
  Edit,
  Home,
  PermContactCalendar,
  Person,
  Phone,
} from "@mui/icons-material";
import { TabContext, TabPanel } from "@mui/lab";
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
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Cv from "../../components/Cv/Cv";
import ProfileDetail from "./ProfileDetail";
import ProfileHeader from "./ProfileHeader";

const Page_Profile_Id = () => {
  const [tabValue, setTabValue] = useState("Profile");
  return (
    <Container sx={{ backgroundColor: "#f3f4f9" }}>
      <TabContext value={tabValue}>
        <Box sx={{ paddingTop: "40px", paddingBottom: "20px" }}>
          <ProfileHeader tabValue={tabValue} setTabValue={setTabValue} id={1} />
          <TabPanel value="Profile" sx={{ padding: "24px 0px 0px 0px" }}>
            <Grid
              container
              sx={{ position: "relative", left: "0px" }}
              spacing={3}
            >
              <Grid item md={5} xs={12}>
                <Paper>
                  <ProfileDetail />
                </Paper>
              </Grid>
              <Grid item md={7} xs={12}>
                <Paper sx={{ marginBottom: "24px", padding: "16px" }}>
                  <Cv />
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="CVs" sx={{ padding: "24px 0px 0px 0px" }}>
            <Box>abc</Box>
          </TabPanel>
        </Box>
      </TabContext>
    </Container>
  );
};

export default Page_Profile_Id;
