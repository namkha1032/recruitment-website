import { Box } from '@mui/material'
import React from 'react'
import imageBackground from "../../assets/img/404-page.png"

export default function Unauthorized() {
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
      {/* Unauthorized */}
    </Box>
  )
}
