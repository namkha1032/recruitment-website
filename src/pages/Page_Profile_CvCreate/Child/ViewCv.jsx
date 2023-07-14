import InputText from "./InputText";
import Button from "@mui/material/Button";
import FreeSoloCreateOptionDialog from "./ChooseList";
import Certificate from "./Certificate/Certificate";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const ViewCv = (prop) => {
  return (
    <>
      <div className={`CVForm InputForm`}>
        <div className="Container">
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              spacing={0}
              justifyContent="center"
            >
              <Grid item xs={4} display="flex" alignItems="flex-grid">
                <Typography sx={{ fontSize: 20 }}>Introduction:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  sx={{ fontSize: 20, maxWidth: 500, wordWrap: "break-word" }}
                >
                  {prop.intro}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              justifyContent="center"
            >
              <Grid item xs={4} display="flex" alignItems="flex-grid">
                <Typography sx={{ fontSize: 20 }}>Education:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  sx={{ fontSize: 20, maxWidth: 500, wordWrap: "break-word" }}
                >
                  {prop.education}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default ViewCv;
