import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Snackbar, Alert } from "@mui/material";

//import LockIcon from "@mui/icons-material/Lock";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

const ProfileChangePW = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const [errorPasswordSnackbar, setErrorPasswordSnackbar] = useState(false);
  const [messagePassword, setMessagePassword] = useState("")

  const dispatch = useDispatch();

  const newError = useSelector((state) => state.error);

  useEffect(() => {
    if (newError.status === "no") {
      dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
      navigate("/profile/:profileid");
    }
    if (newError.status === "yes") {
      setErrorSnackbar(true)
      setOldPassword("")
      setNewPassword("")
      setConfirmPassword("")
      setTimeout(() => {
          setErrorSnackbar(false)
          dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
      }, 5000)
    }
  }, [newError]);

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  }

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldPassword === newPassword) {
      /* toast.error("New password cannot be same as old password", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        closeOnClick: true,
      }); */
      setMessagePassword("New password cannot be same as old password")
      setErrorPasswordSnackbar(true)
      setNewPassword("");
      setConfirmPassword("");
    } else if (newPassword !== confirmPassword) {
      //setErrorSnackbar(true)
      /* toast.error("Passwords do not match", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        closeOnClick: true,
      }); */
      setMessagePassword("Passwords do not match")
      setErrorPasswordSnackbar(true)
      setNewPassword("");
      setConfirmPassword("");
    } else {
      dispatch({ 
        type: "saga/userChangePassword", 
        payload: { oldPassword, newPassword, confirmPassword}
      })
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
            paddingTop: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >

          <Grid item md={7} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
              item
              md={9}
              sx={{
                borderRadius: "10px",
                padding: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "white",
                opacity: "100%",
                left: "20%",
                right: "20%",
                //border: "1px solid black",
              }}
            >
              <Typography 
                variant="h2" 
                align="center" 
                color='#1976d2' 
                gutterBottom
                fontFamily={'Roboto'}
                fontSize={'28px'}
                lineHeight={'28px'}
                fontWeight={'700'}
                padding={"20px"}
              >
                Change password
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid item xs={12} md={12} sx={{ ...style }}>
                  <TextField
                    fullWidth
                    required
                    label="Old Password"
                    type={showOldPassword ? "text" : "password"}
                    value={oldPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowOldPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showOldPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),

                      style: { borderRadius: "12px" },
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
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowNewPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showNewPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),

                      style: { borderRadius: "12px" },
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
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),

                      style: { borderRadius: "12px" },
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
                      borderRadius: "5px",
                      marginTop: "15px",
                    }}
                  >
                    change
                  </Button>
                </Grid>
              </form>

              <ToastContainer />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={3000}
        onClose={() => setErrorSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert 
          severity="error"
          onClose={() => setErrorSnackbar(false)}
        >
          {newError.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorPasswordSnackbar}
        autoHideDuration={3000}
        onClose={() => setErrorPasswordSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert 
          severity="error"
          onClose={() => setErrorPasswordSnackbar(false)}
        >
          {messagePassword}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProfileChangePW;
