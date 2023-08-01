import * as React from "react";
import Grid from "@mui/material/Grid";
import SmallUlList from "./smallUl";

const RequireUlList = (prop) => {
  return (
    <>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {prop.comps.map((comp) => (
          <Grid key={comp.requirementId} item xs={3}>
              <SmallUlList comp={comp} handleDelete={prop.handleDelete} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default RequireUlList;
