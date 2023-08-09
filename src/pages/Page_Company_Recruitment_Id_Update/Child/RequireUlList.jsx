import * as React from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
const RequireUlList = (prop) => {

  return (
    <>    
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {prop.comps.map((comp) => (
          <Chip
            key={comp.requirementId}
            label={(prop.skill.length>0?prop.skill.filter((props)=>props.skillId===comp.skillId)[0].skillName:"") + " (experience: " + comp.experience + ")"}
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
