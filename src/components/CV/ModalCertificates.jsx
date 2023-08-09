import * as React from "react";
import Box from "@mui/material/Box";
import {
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./style.css";

const ModalCertificates = ({ certificate }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box width="8px" sx={{ display: "flex", flexWrap: "wrap" }} mb={2}>
        <Box
          sx={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            border: "2px solid black",
            backgroundColor: open ? "white" : "black",
            mt: "16px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        ></Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            m: "3.5px",
            height: "90%",
            width: "1px",
            backgroundColor: "black",
          }}
        />
      </Box>
      <Box
        width="100%"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            m: "8px 0 0 16px",

            cursor: "pointer",
          }}
        >
          <Box onClick={handleClick}>
            <Box>
              {" "}
              <b>{certificate.dateEarned.slice(0, 10)}</b>
            </Box>
            <Box sx={{ wordBreak: "break-word", maxWidth: "400px" }}>
              Name: {certificate.certificateName}
            </Box>
            <Box sx={{ wordBreak: "break-word", maxWidth: "400px" }}>
              Decription: {certificate.description}
            </Box>
            <Box
              display={open ? "block" : "none"}
              sx={{ wordBreak: "break-word", maxWidth: "400px" }}
            >
              Orgranizationname: {certificate.organizationName}
            </Box>
            <Box display={open ? "block" : "none"}>
              ExpirationDate: {certificate.expirationDate.slice(0, 10)}
            </Box>
          </Box>
          <Box
            display={open ? "block" : "none"}
            sx={{ wordBreak: "break-word", maxWidth: "400px" }}
          >
            {" "}
            Link:{" "}
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
              href={`https://${certificate.link}`}
            >
              {certificate.link}
            </a>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-end">
          <Box
            sx={{ display: isMd ? "none" : "block", cursor: "pointer" }}
            onClick={handleClick}
          >
            {" "}
            {open ? "See less" : "See more..."}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ModalCertificates;
