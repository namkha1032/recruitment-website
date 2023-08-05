import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import InputText from "./InputText";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CompHeader from "./compHeader";
import ArticleIcon from "@mui/icons-material/Article";
import CreateIcon from "@mui/icons-material/Create";

function Box1(prop) {
  return (
    <>
      <Box>
        <Grid item xs={12}>
          <InputText
            headerIcon={<CreateIcon />}
            state={"Position Name"}
            handleState={prop.handleRname}
            width="100%"
            margin="0"
            value={prop.RName}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: "100%", margin: "auto" }}>
            <CompHeader headerIcon={<ArticleIcon />}>Description</CompHeader>
            <ReactQuill
              theme="snow"
              style={{ marginTop:"8px" }}
              value={prop.description}
              onChange={prop.setDescription}
              className="QuillCss"
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}
export default Box1;
