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
  IconButton,
} from "@mui/material";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader"
import GigaCard from "../../components/GigaCard/GigaCard"
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody"

//import LockIcon from "@mui/icons-material/Lock";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const style = {
  marginTop: "15px",
  marginBottom: "15px",
};

const passwordRegex = /^.{8,}$/;

const Page_Profile_Id_ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [validNewPassword, setValidNewPassword] = useState(true);

  const handleNewPasswordChange = (event) => {
    let value = event.target.value;
    setNewPassword(value);
    if (!passwordRegex.test(value)) {
      setValidNewPassword(false);
    } else {
      setValidNewPassword(true);
    }
  }

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
    if (!validNewPassword) {
      setNewPassword("");
      setConfirmPassword("");
    }
    else {
      if (oldPassword === newPassword) {
        toast.error("New password cannot be same as old password", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
          closeOnClick: true,
        });
        setNewPassword("");
        setConfirmPassword("");
      } else if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
          closeOnClick: true,
        });
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.success("Password changed successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
          closeOnClick: true,
        });
        setTimeout(() => {
          navigate("/profile/:profileid");
        }, 2000);
      }
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
            width: "76%",
          }}
        >
          {/* <GigaCard>
            <GigaCardBody> */}
          <Grid item md={7} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
              item
              md={9}
              sx={{
                /* borderRadius: "10px",
                padding: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "white", */
                opacity: "100%",
                left: "20%",
                right: "20%",
                //border: "1px solid black",
              }}
            >
              <GigaCard>
                <GigaCardBody>
              <Typography 
                variant="h2" 
                align="center" 
                color='#1976d2' 
                gutterBottom
                fontFamily={'Roboto'}
                fontSize={'28px'}
                lineHeight={'28px'}
                fontWeight={'700'}
                padding={"10px"}
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
                    onChange={handleNewPasswordChange}
                    error={!validNewPassword}
                  />
                  {!validNewPassword && (
                    <Box
                    margin="3px 14px 0px"
                    >
                      {
                        newPassword === "" ? (
                          <Typography 
                            color="#f44336"
                            fontSize="12px"
                            lineHeight="20px"
                          >
                          Password is required
                          </Typography>
                        ) : (
                          <Typography color="#f44336"
                          fontSize="12px"
                            lineHeight="20px"
                          >
                          Your password must be at least 8 characters 
                          </Typography>
                        )
                      }
                      
                    </Box>
                  )}
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
                    Reset
                  </Button>
                </Grid>
              </form>

              <ToastContainer />
              </GigaCardBody>
              </GigaCard>
            </Grid>
          </Grid>
{/*           </GigaCardBody>
          </GigaCard> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Page_Profile_Id_ChangePassword;
