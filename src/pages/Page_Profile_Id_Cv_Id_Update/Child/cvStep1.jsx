import Grid from "@mui/material/Grid";
import InputText from "./InputText";
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CvStep1(prop) {
  return (
    <>
      <Box sx={{ width: "80%", margin: "auto", marginTop: "50px" }}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <InputText
              state={"Title"}
              handleState={prop.handleTitle}
              width="98%"
              value={prop.cvtitle}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              state={"Introduction"}
              handleState={prop.handleIntro}
              width="98%"
              value={prop.intro}
            />
          </Grid>
          <Grid item xs={12}>
            <ReactQuill
              theme="snow"
              style={{width:"98%", margin:"auto", height:"200px"}}
              value={prop.education}
              onChange={prop.setEducation}
              className="QuillCss"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CvStep1;
