import { CameraAltOutlined } from "@mui/icons-material";
import { Box, IconButton} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GigaCard from "../GigaCard/GigaCard";

const ProfileHeader = ({  id, userName }) => {
  const [selectedImage, setSelectedImage] = useState(
    "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
  );
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file !== null) {
      setSelectedImage(URL.createObjectURL(file));
      axios.patch("http://localhost:3001/user", {
        image: URL.createObjectURL(file),
      });
    }
  };

  return (
    <GigaCard>
      <img
        height="250px"
        style={{ objectFit:'initial' ,borderTopRightRadius:'10px',borderTopLeftRadius:'10px',widtd:'max-width'}}
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

          <Box sx={{ margin: "24px 0px 0px  24px" }}>{userName}</Box>
        </Box>

        
      </Box>
      </GigaCard>
  );
};

export default ProfileHeader;
