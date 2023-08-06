import * as React from "react";
import Grid from "@mui/material/Grid";
import SmallUlList from "./smallUl";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

const RequireUlList = (prop) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isDm = useMediaQuery(theme.breakpoints.up("md"));
  return (
    // <>
    //   <Grid container spacing={1} justifyContent="center" alignItems="center">
    //     {prop.comps.map((comp) => (
    //       <Grid key={comp.requirementId} item xs={isSm?3:6}>
    //           <SmallUlList comp={comp} handleDelete={prop.handleDelete} />
    //       </Grid>
    //     ))}
    //   </Grid>
    // </>
    <>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {prop.comps.map((comp) => (
          <Chip
            key={comp.requirementId}
            label={comp.skillname + " (experience: " + comp.experience + ")"}
            sx={{
              m: 0.5,
              height: "40px",
            }}
            variant="outlined"
            onDelete={() => {
              prop.handleDelete(comp.requirementId);
            }}
          />
        ))}
      </Grid>
    </>
  );
};
export default RequireUlList;
