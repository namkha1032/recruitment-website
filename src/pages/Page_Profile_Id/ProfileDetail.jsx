import { ContentPaste, Edit, Home, PermContactCalendar, Person, Phone } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
const ProfileDetail = () => {
  return (
    <>
      <Box sx={{ padding: "24px" }}>
        <Box
          component="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 0,
          }}
        >
          Detail <Edit fontSize="small" sx={{ ml: "5px" }} />
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
            <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
              Nguyễn Văn A
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <PermContactCalendar />
            <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
              24/08/2000
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <Home />
            <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
              Phường Linh Đông, Tp Thủ Đức{" "}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <Phone />
            <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
              0123456789
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <ContentPaste />
            <Box component="h6" sx={{ margin: "0px 0px 0px 8px" }}>
              CV1
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProfileDetail;
