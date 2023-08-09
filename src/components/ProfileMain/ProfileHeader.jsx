import { CameraAltOutlined } from "@mui/icons-material";
import { Alert, Box, IconButton, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GigaCard from "../GigaCard/GigaCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/dist";
import cleanStore from "../../utils/cleanStore";

const ProfileHeader = () => {
  const profile = useSelector((state) => state.profile);
  const { profileid } = useParams();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [faild, setFaild] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/bmp",
      ];
      if (validImageTypes.includes(fileType)) {
        setLoading(true);
        const data = {
          FullName: profile.name !== null ? profile.fullName : "",
          DateOfBirth: profile.dateOfBirth,
          Address: profile.address !== null ? profile.address : "",
          ImageFile: URL.createObjectURL(file),
          PhoneNumber: profile.phone !== null ? profile.phoneNumber : "",
        };
        dispatch({
          type: "profileSaga/updateProfile",
          payload: { data, userid: user.userid, token: user.token },
        });
      } else {
        setFaild(true);
        setOpen(true);
      }
    }
  };
  useEffect(() => {
    if (loading === true) {
      setLoading(false);
      setOpen(true);
    }
  }, [profile]);
  useEffect(() => {
    return () => {
      cleanStore(dispatch);
    };
  }, []);
  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={faild ? "error" : "success"}
          elevation={6}
          variant="filled"
        >
          {faild ? <> Wrong image format </> : <>Success !</>}
        </Alert>
      </Snackbar>

      <GigaCard>
        <img
          height="250px"
          style={{
            objectFit: "initial",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            widtd: "max-width",
          }}
          src="https://indochinapost.com/wp-content/uploads/chuyen-phat-nhanh-tnt-di-anh.jpg"
          alt=""
        />

        <Box
          sx={{
            padding: "0px 24px 16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: "white",
            borderBottomLeftRadius: "7px",
            borderBottomRightRadius: "7px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              bottom: "25px",
            }}
          >
            <Box
              component="img"
              sx={{
                borderRadius: "50%",
                border: "1px solid #ccc",
                width: "100px",
                height: "100px",
              }}
              src={profile.imageURL}
              alt=""
            />
            {user.userid === profileid && (
              <>
                <input
                  // accept="image/*"
                  id="image-upload"
                  type="file"
                  style={{ display: "none", cursor: "pointer" }}
                  onChange={handleFileChange}
                />
                <Box
                  sx={{
                    border: "1px solid #c1c3cb",
                    borderRadius: "50%",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#c1c3cb",
                    width: "25px",
                    height: "25px",
                    left: "75px",
                    bottom: "3px",
                  }}
                >
                  <IconButton
                    sx={{
                      padding: "2.5px",
                    }}
                  >
                    <label
                      htmlFor="image-upload"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <CameraAltOutlined fontSize="small" />
                    </label>
                  </IconButton>
                </Box>
              </>
            )}
            <Box component="h2" sx={{ margin: "24px 0px 0px  24px" }}>
              {profile.fullName}
            </Box>
          </Box>
        </Box>
      </GigaCard>
    </>
  );
};

export default ProfileHeader;
