import * as React from "react";
import Grid from "@mui/material/Grid";
import SmallUlList from "./smallUl";

const UlList = (prop) => {
  return (
    <>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {prop.comps.map((comp) => (
          <Grid key={comp.id} item xs={3}>
            <div>
              <SmallUlList comp={comp} handleDelete={prop.handleDelete} />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default UlList;
