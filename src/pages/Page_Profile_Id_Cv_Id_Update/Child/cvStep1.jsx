import Grid from "@mui/material/Grid";
import InputText from "./InputText";
import Box from "@mui/material/Box";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CompHeader from "./compHeader";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from '@mui/icons-material/Book';

function CvStep1(prop) {
  return (
    <>
      <Box sx={{ width: "80%", margin: "auto", marginTop: "50px" }}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <InputText
              headerIcon={<DriveFileRenameOutlineIcon />}
              state={"Title"}
              handleState={prop.handleTitle}
              width="100%"
              margin="0"
              value={prop.cvtitle}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              headerIcon={<PersonIcon />}
              state={"Introduction"}
              handleState={prop.handleIntro}
              width="100%"
              margin="0"
              value={prop.intro}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{width: "100%", margin: "auto",marginBottom:"32px"}}>
              <CompHeader headerIcon={<BookIcon />}>Education</CompHeader>
              <ReactQuill
                id="education"
                theme="snow"
                style={{ height: "200px", marginTop:"8px" }}
                value={prop.education}
                onChange={prop.setEducation}
                className="QuillCss"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CvStep1;
