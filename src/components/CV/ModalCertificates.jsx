import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const  ModalCertificates = ({certificate}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Name: {certificate.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Decription: {certificate.decription}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Orgranizationname: {certificate.Orgranizationname}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Dateearned: {certificate.dateearned}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Expirationdate: {certificate.expirationdate}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Link: {certificate.link}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default   ModalCertificates