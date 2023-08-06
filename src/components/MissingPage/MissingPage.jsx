import { Box, Typography } from '@mui/material'
import React from 'react'
import imageBackground from "../../assets/img/404-page.png"

export default function MissingPage() {
  return (
    // <Box
    //   sx={{
    //     height: "100vh",
    //     backgroundImage: `url(${imageBackground})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     width: "100%",
    //   }}
    // >
    // </Box>
    <Box
      sx={{
        height: "75vh",
        fontFamily: "'Ropa Sans' sans-serif",
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant='h1'
        sx={{
          fontSize: "40px",
          margin: "0px",
          color: "black",
        }}
      >
        Opps! Page Not Found
      </Typography>

      <Box
        sx={{
          margin: "30px auto",
          // border: "5px solid black",
          fontSize: "126px",
          lineHeight: "126px",
          borderRadius: "30px",
        }}
      >
        404
      </Box>

      <Typography variant="h5" 
        sx={{ 
          marginTop: '10px',
          fontSize: "25px",
          textAlign: 'center',
          width: '35%'
        }}
      >
        We are sorry, but the page you requested was not found
      </Typography>
    </Box>
  )
}
