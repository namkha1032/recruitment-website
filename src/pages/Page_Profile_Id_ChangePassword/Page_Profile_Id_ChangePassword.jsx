import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

const Page_Profile_Id_ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldPassword === newPassword) {
      alert("New password cannot be the same as old password");
      setNewPassword("");
      setConfirmPassword("");
    } else if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      alert("Password change successful");
      navigate("/profile/:profileid");
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          sx={{
            paddingTop: "60px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "80%",
          }}
        >

          <Grid item md={7} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
              item
              md={9}
              sx={{
                borderRadius: "20px",
                padding: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "white",
                opacity: "100%",
                left: "20%",
                right: "20%",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{ ...style, display: "flex", justifyContent: "center" }}
              >
                <Typography variant="h5" align="center">
                  Change your password
                </Typography>
              </Grid>

              <form onSubmit={handleSubmit}>
                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Old Password"
                    type="password"
                    value={oldPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon />
                        </InputAdornment>
                      ),

                      style: { borderRadius: "25px" },
                    }}
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="New Password"
                    type="password"
                    value={newPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon />
                        </InputAdornment>
                      ),

                      style: { borderRadius: "25px" },
                    }}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon />
                        </InputAdornment>
                      ),

                      style: { borderRadius: "25px" },
                    }}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", ...style }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      height: "40px",
                      width: "100%",
                      borderRadius: "20px",
                      marginTop: "15px",
                    }}
                  >
                    Reset
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Page_Profile_Id_ChangePassword;
