import * as React from "react";
import Grid from "@mui/material/Grid";
import SmallLanguageUlList from "./smallLanguageUl";

const LanguageUlList = (prop) => {
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        {prop.comps.map((comp) => (
          <Grid key={comp.id}>
            <SmallLanguageUlList comp={comp} handleDelete={prop.handleDelete} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default LanguageUlList;
