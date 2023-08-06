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
    <>
      {/* <Grid container spacing={1} justifyContent="center" alignItems="center">
        {console.log(prop.skill)}
        
        {prop.comps.map((comp) => (
          <Grid key={comp.requirementId} item xs={isSm?3:6}>
            <SmallUlList comp={comp} skillName={prop.skill.length>0?prop.skill.filter((props)=>props.skillId===comp.skillId)[0].skillName:""} handleDelete={prop.handleDelete} />
            <b> {prop.skill.length>0? console.log(prop.skill[0]):""} </b>
          </Grid>
        ))}
      </Grid> */}
      
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
              prop.handleDelete(comp.cvSkillsId);
            }}
          />
        ))}
      </Grid>
    </>
  );
};
export default RequireUlList;
