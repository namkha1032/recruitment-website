import { TabContext, TabPanel } from "@mui/lab";
import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";

const Cvs = () => {
  const [tabValue, setTabValue] = useState("CVs");
  return (
    <>
      <Container sx={{ backgroundColor: "#f3f4f9" }}>
        <TabContext value={tabValue}>
          <Box sx={{ paddingTop: "40px", paddingBottom: "20px" }}>
            <ProfileHeader tabValue={tabValue} setTabValue={setTabValue} id={1} />
            <TabPanel value="Profile" sx={{ padding: "24px 0px 0px 0px" }}>
              CVsssss
            </TabPanel>
            <TabPanel value="CVs" sx={{ padding: "24px 0px 0px 0px" }}>
              <Box>abc</Box>
            </TabPanel>
          </Box>
        </TabContext>
      </Container>
    </>
  );
};

export default Cvs;
