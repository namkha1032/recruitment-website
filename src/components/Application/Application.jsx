import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import CV from "../CV/CV";
const style = { border: '1px solid #000', borderRadius: '10px' }
  const Application = ({cvid,CVs,user,applicationid}) => {
  return (
    <>
      <Typography variant="h3" align="center">
        Detail of the Application
      </Typography>
      <Grid container sx={{ marginTop: "50px" }} spacing={3}>
        <Grid item xs={4}>
          <Box sx={{ ...style, marginBottom: "24px", padding: "24px" }}>
            <Typography variant="h5" align="center">
              Information Of Candidate
            </Typography>
            <Box sx={{ marginTop: "16px" }}>
              <Box component="p" sx={{ m: 0, display: "flex" }}>
                Name:{" "}
                <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                  {" "}
                  Nguyễn Văn A{" "}
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, display: "flex" }}>
                Email:
                <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                  0123456789@gmail.com
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, display: "flex" }}>
                Phone:{" "}
                <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                  {" "}
                  0123456789{" "}
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, display: "flex" }}>
                Address:{" "}
                <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                  {" "}
                  Phường Linh Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh,
                  Việt Nam{" "}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...style, marginBottom: "24px", padding: "24px" }}>
            <Typography variant="h5" align="center">
              Information Of Position
            </Typography>
            <Box sx={{ marginTop: "16px" }}>
              <Box component="h5" sx={{ m: 0, display: "flex" }}>
                Name :{" "}
                <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                  {" "}
                  Nguyễn Văn B{" "}
                </Box>
              </Box>
              <Box component="h5" sx={{ m: 0, display: "flex" }}>
                Email:
                <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                  000123456789@gmail.com
                </Box>
              </Box>
              <Box component="h5" sx={{ m: 0, display: "flex" }}>
                Phone:{" "}
                <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                  {" "}
                  01234567890{" "}
                </Box>
              </Box>
              <Box component="h5" sx={{ m: 0, display: "flex" }}>
                Address:{" "}
                <Box sx={{ fontWeight: "normal", paddingLeft: "8px" }}>
                  {" "}
                  Phường Linh Tây, Thành phố Thủ Đức, Thành phố Hồ Chí Minh,
                  Việt Nam{" "}
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ padding: "15px" }}>
          <div style={{ ...style }}>
            <Container>
              {/* <Page_Profile_Id_Cv_Id cvlist={user.cvs} /> */}
              <CV cvid={cvid} user={user} CVs={CVs} />
            </Container>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Application;
