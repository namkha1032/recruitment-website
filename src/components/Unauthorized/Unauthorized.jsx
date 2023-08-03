import { Box, Typography/* , Button */ } from '@mui/material'
import React from 'react'
//import imageBackground from "../../assets/img/404-page.png"
//import imageBackground from "../../assets/img/11132.jpg"
import { useNavigate } from 'react-router-dom'

export default function Unauthorized() {

  //const navigate = useNavigate()

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
          fontSize: "40px",
          margin: "0px",
          color: "black",
        }}
      >
        Opps! Forbidden
      </Typography>

      <Box
        sx={{
          margin: "30px auto",
          //border: "5px solid black",
          fontSize: "126px",
          lineHeight: "126px",
          borderRadius: "30px",
        }}
      >
        403
      </Box>

      <Typography variant="h5" 
        sx={{ 
          marginTop: '10px',
          fontSize: "25px",
          textAlign: 'center',
          width: '40%'
        }}
      >
        You do not have permission to access this page.
      </Typography>
    </Box>
  )
}
