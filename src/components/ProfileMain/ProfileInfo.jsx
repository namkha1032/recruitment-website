import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Edit,
  Email,
  Home,
  PermContactCalendar,
  Person,
  Phone,
} from "@mui/icons-material";
import GigaCard from "../GigaCard/GigaCard";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LoadingButton } from "@mui/lab";
import { useParams } from "react-router-dom/dist";

const ProfileInfo = () => {
  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const { profileid } = useParams();
  const [block, setBlock] = useState(true);
  const [name, setName] = useState(profile.fullName ? profile.fullName : "");
  const [email, setEmail] = useState(profile.email ? profile.email : "");
  const [birth, setBirth] = useState(
    profile.dateOfBirth ? dayjs(profile.dateOfBirth) : ""
  );
  const [phone, setPhone] = useState(
    profile.phoneNumber ? profile.phoneNumber : ""
  );
  const [address, setAddress] = useState(
    profile.address ? profile.address : ""
  );
  const [open, setOpen] = useState(false);
  const [faild, setFaild] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading === true) {
      setLoading(false);
      setBlock(true);
      setOpen(true);
    }
  }, [profile]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function handleSave() {
    if (
      name === "" ||
      address === "" ||
      phone === "" ||
      birth.isAfter(dayjs("01-01-2099")) ||
      birth.isBefore(dayjs("01-01-1900"))
    ) {
      setFaild(true);
      setOpen(true);
    } else {
      setLoading(true);
      setFaild(false);
      const data = {
        FullName: name,
        DateOfBirth: birth.format("YYYY-MM-DDTHH:mm:ss"),
        Address: address,
        ImageFile: profile.imageURL ? profile.imageURL : "",
        PhoneNumber: phone,
      };
      dispatch({
        type: "profileSaga/updateProfile",
        payload: { data, userid: user.userid, token: user.token },
      });
    }
  }
  const handleEdit = () => {
    setBlock(false);
  };

  return (
    <>
      {" "}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={faild ? "error" : "success"}
          elevation={6}
          variant="filled"
        >
          {faild ? (
            <>
              {(name === "" || phone === "" || address === "") && (
                <>
                  {" "}
                  Please fill in the required information{" "}
                  {name === "" ? "(Full Name)" : ""}{" "}
                  {address === "" ? "(Address)" : ""}{" "}
                  {phone === "" ? "(Phone Number)" : ""}.<br></br>
                </>
              )}

              {birth.isAfter(dayjs("01-01-2099")) ||
              birth.isBefore(dayjs("01-01-1900"))
                ? "Date of birth is valid."
                : ""}
            </>
          ) : (
            <>Success!</>
          )}
        </Alert>
      </Snackbar>
      <Box>
        <GigaCard>
          <Box sx={{ padding: "24px" }}>
            <Box
              component="h2"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 0,
              }}
            >
              Detail{" "}
              {user.userid === profileid ? (<Box sx={{ ':hover':{color:'#3399FF'}, cursor: "pointer" }} onClick={handleEdit}> Edit
                <Edit
                  
                  fontSize="small"
                  sx={{ ml: "5px",':hover':{color:'#3399FF'}}}
                /></Box>
              ) : (
                <></>
              )}
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
                  error={name === "" && profileid === user.userid}
                  fullWidth
                  InputProps={{ readOnly: block }}
                  size="small"
                  label="Name"
                  value={name ? name : ""}
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
                <Box sx={{ marginLeft: "16px", width: "100%" }}>
                  <LocalizationProvider
                    sx={{ borderColor: "black" }}
                    dateAdapter={AdapterDayjs}
                  >
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        format="DD/MM/YYYY"
                        label="Birth"
                        minDate={dayjs("01-01-1900")}
                        maxDate={dayjs("01-01-2099")}
                        value={birth}
                        readOnly={block}
                        height=""
                        onChange={(newValue) => setBirth(newValue)}
                        sx={{ width: "100%" }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
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
                  InputProps={{ readOnly: true }}
                  size="small"
                  label="Email"
                  value={email ? email : ""}
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
                  error={phone === "" && profileid === user.userid}
                  InputProps={{ readOnly: block }}
                  size="small"
                  label="Phone"
                  value={phone ? phone : ""}
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
                  error={address === "" && profileid === user.userid}
                  InputProps={{ readOnly: block }}
                  multiline
                  size="small"
                  label="Address"
                  value={address ? address : ""}
                  sx={{ marginLeft: "16px" }}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: block ? "none" : "block",
                mt: "16px",
              }}
            >
              {isMd === false ? (
                <Box sx={{ display: "flex", justifyContent: "right" }}>
                  <Box mr={3}>
                    <Button
                      color="primary"
                      onClick={() => setBlock(true)}
                      variant="contained"
                      style={{ textTransform: "none", backgroundColor: "Red" }}
                    >
                      CLOSE
                    </Button>
                  </Box>
                  {loading === false ? (
                    <Button
                      color="primary"
                      onClick={handleSave}
                      variant="contained"
                      style={{
                        textTransform: "none",
                        backgroundColor: "black",
                      }}
                    >
                      SAVE
                    </Button>
                  ) : (
                    <LoadingButton
                      loading={loading}
                      loadingPosition="start"
                      startIcon={loading && <CircularProgress size={20} />}
                      variant="outlined"
                      style={{
                        textTransform: "none",
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      {" "}
                      SAVE
                    </LoadingButton>
                  )}
                </Box>
              ) : (
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Button
                        color="primary"
                        sx={{ width: "100%" }}
                        onClick={() => setBlock(true)}
                        variant="contained"
                        style={{
                          textTransform: "none",
                          backgroundColor: "Red",
                        }}
                      >
                        CLOSE
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      {loading === false ? (
                        <Button
                          color="primary"
                          sx={{ width: "100%" }}
                          onClick={handleSave}
                          variant="contained"
                          style={{
                            textTransform: "none",
                            backgroundColor: "black",
                          }}
                        >
                          SAVE
                        </Button>
                      ) : (
                        <LoadingButton
                          loading={loading}
                          loadingPosition="start"
                          sx={{ width: "100%" }}
                          startIcon={loading && <CircularProgress size={20} />}
                          variant="outlined"
                          style={{
                            textTransform: "none",
                            color: "white",
                            backgroundColor: "black",
                          }}
                        >
                          {" "}
                          SAVE
                        </LoadingButton>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Box>
        </GigaCard>
      </Box>
    </>
  );
};

export default ProfileInfo;
