import { CameraAltOutlined } from "@mui/icons-material";
import { Box, IconButton, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const  ProfileHeader = ({tabValue,setTabValue,id}) => {
    const [selectedImage, setSelectedImage] = useState(
        "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
      );
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file !== null) setSelectedImage(URL.createObjectURL(file));
        console.log(URL.createObjectURL(file));
      };
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <>
      <img
        height="100%"
        width="100%"
        style={{ objectFit: "cover" }}
        src="https://uko-react.vercel.app/static/background/user-cover-pic.png"
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
            src={selectedImage}
            alt=""
          />
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            style={{ display: "none" }}
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
                style={{ display: "flex", alignItems: "center" }}
              >
                <CameraAltOutlined fontSize="small" />
              </label>
            </IconButton>
          </Box>

          <Box sx={{ margin: "24px 0px 0px  24px" }}>Nguyễn Văn A</Box>
        </Box>

        <Tabs
          className="tab"
          centered={true}
          sx={{
            height: "48px",
          }}
          value={tabValue}
          onChange={(e, newvalue) =>{
            if (newvalue === 'CVs') navigate(`/profile/${id}/cv`)
            if (newvalue === 'Profile') navigate(`/profile/${id}`)
            if (newvalue === 'Applications') navigate(`/profile/${id}/application`)
            if (newvalue === 'Interviews') navigate(`/profile/${id}/interview`)
            if (newvalue === 'Events') navigate(`/profile/${id}/event`)
        }}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ padding: "0px 8px", margin: "0px 16px 0px 0px" }}
            value="Profile"
            label="Profile"
          />
          <Tab
            sx={{ padding: "0px 8px", margin: "0px 0px 0px 16px" }}
            value="CVs"
            label="CVs"
          />
          <Tab
            sx={{ padding: "0px 8px", margin: "0px 0px 0px 16px" }}
            value="Applications"
            label="Applications"
          />
          <Tab
            sx={{ padding: "0px 8px", margin: "0px 0px 0px 16px" }}
            value="Interviews"
            label="Interviews"
          />
          <Tab
            sx={{ padding: "0px 8px", margin: "0px 0px 0px 16px" }}
            value="Events"
            label="Events"
          />
        </Tabs>
      </Box>
    </>
  );
}

export default ProfileHeader;
