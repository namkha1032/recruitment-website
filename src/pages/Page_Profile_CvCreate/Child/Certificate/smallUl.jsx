import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import dayjs from "dayjs";

const SmallUlList = (comp) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
      <Card
        key={comp.comp.id}
        sx={{ minWidth: 120, maxWidth: 200, boxShadow: 10, borderRadius: 3 }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>
            {comp.comp.certificateName}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            {comp.comp.organizationName}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={handleClickOpen("paper")} size="small">
            More Detail
          </Button>
          <IconButton
            sx={{ marginLeft: "auto" }}
            aria-label="add to favorites"
            onClick={() => {
              comp.handleDelete(comp.comp.certificateId);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {comp.comp.certificateName}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Typography sx={{ fontSize: 20 }}>
            {comp.comp.organizationName}
          </Typography>
          <Typography sx={{ fontSize: 16 }}>
            From: {dayjs(comp.comp.dateEarned).format("MMMM D YYYY")}
          </Typography>
          {comp.comp.expirationDate !== null ? (
            <Typography sx={{ fontSize: 16 }}>
              To: {dayjs(comp.comp.expirationDate).format("MMMM D YYYY")}
            </Typography>
          ) : (
            ""
          )}
          <Typography>Link: {comp.comp.link}</Typography>
          <Typography sx={{ maxWidth: 500, wordWrap: "break-word" }}>
            Detail: {comp.comp.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default SmallUlList;
