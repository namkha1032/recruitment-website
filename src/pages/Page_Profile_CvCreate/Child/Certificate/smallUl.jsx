import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const SmallUlList = (comp) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Card key={comp.comp.id} sx={{ maxWidth: 200 }}>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              comp.handleDelete(comp.comp.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <CardContent>
          <Typography sx={{ fontSize: 20 }}>{comp.comp.name}</Typography>
          <Typography sx={{ fontSize: 20 }}>{comp.comp.organize}</Typography>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ fontSize: 20 }}>
              From: {comp.comp.startDate.format("YYYY")}
            </Typography>
            {comp.comp.endDate !== null ? (
              <Typography sx={{ fontSize: 20 }}>
                To: {comp.comp.endDate.format("YYYY")}
              </Typography>
            ) : (
              ""
            )}
            <Typography>Link: {comp.comp.link}</Typography>
            <Typography>Detail: {comp.comp.detail}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};
export default SmallUlList;
