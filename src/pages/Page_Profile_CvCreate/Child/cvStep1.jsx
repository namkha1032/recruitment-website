import Grid from "@mui/material/Grid";
import InputText from "./InputText";
import Box from "@mui/material/Box";

function CvStep1(prop) {
  return (
    <>
      <Box sx={{ width: "80%", margin: "auto",marginTop:"50px"}}>
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
            <InputText
              state={"Education"}
              handleState={prop.handleEdu}
              width="98%"
              value={prop.education}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CvStep1;
