import { Box, Typography } from '@mui/material'
import React from 'react'
import imageBackground from "../../assets/img/404-page.png"

export default function MissingPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${imageBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      {/* <Typography variant="h1" sx={{color: "black", textAlign: "center", marginTop: "20%"}}>404</Typography>
      <Typography variant="h3" sx={{color: "black", textAlign: "center"}}>Page Not Found</Typography>
      <Typography variant="h5" sx={{color: "black", textAlign: "center"}}>We are sorry, but page you requested was not found</Typography> */}
    </Box>
  )
}
