import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import InputText from "./InputText";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Box1(prop) {
  return (
    <>
      <Box >
        <Grid item xs={12}>
          <InputText
            state={"Recuite Name"}
            handleState={prop.handleRname}
            width="98%"
            value={prop.RName}
          />
        </Grid>
        <Grid item xs={12}>
        <ReactQuill theme="snow" value={prop.description} onChange={prop.setDescription} className="QuillCss"/>
          {/* <InputText
            state={"Description"}
            handleState={prop.handleDescription}
            width="98%"
            value={prop.description}
          /> */}
        </Grid>
      </Box>
    </>
  );
}
export default Box1;
