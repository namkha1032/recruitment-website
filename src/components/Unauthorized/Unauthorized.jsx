import { Box, Typography, Button } from '@mui/material'
import React from 'react'
//import imageBackground from "../../assets/img/404-page.png"
import imageBackground from "../../assets/img/11132.jpg"
import { useNavigate } from 'react-router-dom'

export default function Unauthorized() {

  const navigate = useNavigate()

/*   const handleBack = (event) => {
    event.preventDefault()
    navigate('/')
  } */

  return (
    <Box
      sx={{
        height: "75vh",
        /* backgroundImage: `url(${imageBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", */
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
          fontSize: "72px",
          margin: "0px",
          color: "black",
          textShadow: "0px 0px 5px black"          
        }}
      >
        Opps!
      </Typography>

      <Box
        sx={{
          margin: "50px auto",
          border: "5px solid black",
          fontSize: "126px",
          lineHeight: "126px",
          borderRadius: "30px",
          textShadow: "6px 6px 5px black"
        }}
      >
        403
      </Box>

      <Typography variant="p" 
        sx={{ 
          marginTop: '10px',
          
        }}
      >
        You do not have permission to access this page.
      </Typography>
      {/* <Button variant="contained" color="primary" onClick={handleBack} style={{ marginTop: '20px' }}>
        Back to Home
      </Button> */}
    </Box>
  )
}
