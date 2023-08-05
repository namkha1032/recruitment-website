import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <CircularProgress color="inherit" />{" "}
    </Box>
  );
};

export default Loading;
