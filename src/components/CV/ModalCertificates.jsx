import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import './style.css'


const  ModalCertificates = ({certificate}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [scroll, setScroll] = React.useState("paper");
  return (
    <>
    <Box
      className='button'
      sx={{
       
        margin: "10px 16px 0 0",
        
        maxHeight: "180px",
        p: "8px",
        backgroundColor:'#c0c0c0c0',
        borderRadius: "8px",
        
      }}
      onClick={handleOpen}
      // onMouseLeave={handleClose}
    >
      <Box>Name: {certificate.certificateName}</Box>  
      <Box>Decription: {certificate.description}</Box>  
      <Box> Expirationdate: {certificate.expirationDate}</Box>
      <Box>Dateearned: {certificate.dateEarned}</Box>
      
     
      <Box>Orgranizationname: {certificate.organizationName}</Box>  
      <Box>Link: {certificate.link}</Box> 
    </Box>
    <Dialog
    open={open}
    // onMouseOut={handleClose}
    onClose={handleClose}
  //   scroll={scroll}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
  >
    <DialogTitle id="scroll-dialog-title">{certificate.certificateName}</DialogTitle>
    <DialogContent >

    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Name: {certificate.certificateName}
    </Typography>
    
    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Decription: {certificate.description}
    </Typography>
    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Orgranizationname: {certificate.organizationName}
    </Typography>
    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Dateearned: {certificate.dateEarned}
    </Typography>
    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Expirationdate: {certificate.expirationDate}
    </Typography>
    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Link: {certificate.link}
    </Typography>

    </DialogContent>
  </Dialog>
  </>
  );
}

export default   ModalCertificates