import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Dialog, DialogContent, DialogTitle, Divider, useMediaQuery, useTheme } from "@mui/material";
import './style.css'


const  ModalCertificates = ({certificate}) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);
  const theme = useTheme()
  // const isXs = useMediaQuery(theme.breakpoints.down("xs"))
  const isMd = useMediaQuery(theme.breakpoints.down("md"))

  const [scroll, setScroll] = React.useState("paper");
  return (
    <>
    
    <Box width='8px' sx={{display:'flex',flexWrap:'wrap'}} mb={2}> 
      <Box sx={{width:'8px',height:'8px',borderRadius:'50%',border:"2px solid black",backgroundColor: open ? 'white' : 'black',mt:"16px",cursor:'pointer'}} onClick={handleClick} ></Box>
      <Divider orientation="vertical" flexItem sx={{m:'3.5px',height:'90%',width:'1px',backgroundColor:'black'}} />

    </Box>
    <Box width='100%' sx={{display:'flex',justifyContent:'space-between'}}>
    <Box
      
      sx={{
       
        
        m:'8px 0 0 16px',
        
        cursor:'pointer'
      }}
      // onMouseLeave={handleClose}
    >
    <Box onClick={handleClick}>
      <Box> {certificate.dateEarned.slice(0,10)}</Box>
      <Box>Name: {certificate.certificateName}</Box>  
      <Box>Decription: {certificate.description}</Box>  
      <Box display={open ? 'block' : 'none'}>Orgranizationname: {certificate.organizationName}</Box>
      <Box display={open ? 'block' : 'none'}>ExpirationDate: {certificate.expirationDate.slice(0,10)}</Box>
      </Box>
      <Box display={open ? 'block' : 'none'}> Link: <a target="_blank" style={{textDecoration:'none',color:'black'}} href={`https://${certificate.link}`}>{certificate.link}</a></Box>
    </Box>
    {console.log(isMd)}
    <Box display='flex' flexDirection='column' justifyContent='flex-end'><Box sx={{display: isMd ? 'none' : 'block', cursor:'pointer'}} onClick={handleClick}> { open ?'See less' : 'See more...'}</Box></Box>
    </Box>
   {/* <Dialog
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
   </Dialog>*/}
  </>
  );
}

export default   ModalCertificates