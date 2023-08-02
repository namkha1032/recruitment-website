import * as React from "react";
import Grid from "@mui/material/Grid";
import SmallUlList from "./smallUl";

const RequireUlList = (prop) => {
  return (
    <>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {console.log(prop.skill)}
        
        {prop.comps.map((comp) => (
          <Grid key={comp.requirementId} item xs={3}>
            <SmallUlList comp={comp} skillName={prop.skill.length>0?prop.skill.filter((props)=>props.skillId===comp.skillId)[0].skillName:""} handleDelete={prop.handleDelete} />
            {/* <b> {prop.skill.length>0? console.log(prop.skill[0]):""} </b> */}
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default RequireUlList;
