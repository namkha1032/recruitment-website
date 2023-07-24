import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";


const  ModalCertificates = ({certificate}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [scroll, setScroll] = React.useState("paper");
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "10px 16px 0 0",
        width: "180px",
        height: "120px",
        p: "16px",
        border: "1px solid black",
        borderRadius: "3px",
        textAlign: "center",
      }}
      type='button'
      onClick={handleOpen}
    >
      <Box>{certificate.name}</Box>
      <Box>Exp: {certificate.expirationdate}</Box>   
    </Box>
    <Dialog
    open={open}
    onClose={handleClose}
  //   scroll={scroll}
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
  >
    <DialogTitle id="scroll-dialog-title">{certificate.name}</DialogTitle>
    <DialogContent >

    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Name: {certificate.name}
    </Typography>
    
    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Decription: {certificate.decription}
    </Typography>
    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Orgranizationname: {certificate.Orgranizationname}
    </Typography>
    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Dateearned: {certificate.dateearned}
    </Typography>
    <Typography id="scroll-dialog-description" variant="h6" component="h2">
    Expirationdate: {certificate.expirationdate}
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