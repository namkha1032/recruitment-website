import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Snackbar,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CV from "../CV/CV";
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

const ProfileInfo = ({ profile }) => {
  const user = useSelector((state) => state.user);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const [block, setBlock] = useState(true);
  const [name, setName] = useState(profile.name ? profile.name : "");
  const [email, setEmail] = useState(profile.email ? profile.email : "");
  const [birth, setBirth] = useState(profile.birth ? dayjs(profile.birth) : "");
  const [phone, setPhone] = useState(profile.phone ? profile.phone : "");
  const [address, setAddress] = useState(
    profile.address ? profile.address : ""
  );
  const [open, setOpen] = useState(false);
  const [faild, setFaild] = useState(false);
  const [loading,setLoading] = useState(false)
    useEffect(() => {
      if( loading === true){
        setLoading(false)
        setBlock(true);
        setOpen(true)
        
      }
      
    },[user])
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }setOpen(false);
  };
    console.log(birth)
  function handleSave() {
   
    if(name === '' || address === '' || phone ==='' || !birth  ||  isNaN(birth.date())){
      setFaild(true)
      setOpen(true)
    }else{
      setLoading(true)
      setFaild(false)
    const data = { 
      FullName: name,
      DateOfBirth: birth.format('YYYY-MM-DDTHH:mm:ss'),
      Address: address,
      ImageFile: profile.image ? profile.image : "",
      PhoneNumber: phone,
    };
    console.log(data);
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
    <> <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
    <Alert onClose={handleClose} severity={faild ? "error" : "success"} elevation={6} variant="filled">
      {faild ?<> Không thành công</> :<>Thành công !</>  }
    </Alert>
  </Snackbar>
    <Box id="detail">
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
            <Edit
              onClick={handleEdit}
              fontSize="small"
              sx={{ ml: "5px", color: "black" }}
            />
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
              <Box sx={{ marginLeft: "16px", width:'100%'}}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
        
              >
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    format="DD/MM/YYYY"
                    label="Birth"
                    value={birth}
                    readOnly={block} 
                    height=""
                    onChange={(newValue) => setBirth(newValue)}
                    sx={{  width: '100%' }}
                    
                  />
                </DemoContainer>
              </LocalizationProvider></Box>
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
                  Close
                </Button>
                </Box>
               {loading ===false  ?  <Button
                  color="primary"
                  onClick={handleSave}
                  variant="contained"
                  style={{ textTransform: "none", backgroundColor: "black" }}
                >
                  Save  
                </Button>
                : <LoadingButton 
                loading={loading}
                loadingPosition="start"
                startIcon={loading && <CircularProgress size={20} />}  variant="outlined" style={{ textTransform: "none",color:'white', backgroundColor: "black" }}> Save  
              </LoadingButton> }
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
                  style={{ textTransform: "none", backgroundColor: "Red" }}
                >
                  Close
                </Button>
                </Grid>
                <Grid item xs={6}>
                <Button
                  color="primary"
                  sx={{ width: "100%" }}
                  onClick={handleSave}
                  variant="contained"
                  style={{ textTransform: "none", backgroundColor: "black" }}
                >
                  SAVE
                </Button>
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
