import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./AutoText.scss";

export default function EmptyTextarea(prop) {
  function handleDetail(e) {
    console.log(e.target.value);
    prop.setDetail(e.target.value);
  }
  return (
    <>
      <div className="AutoT">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "100%", margin: "0", marginTop: "8px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={prop.value}
            onChange={handleDetail}
            id="outlined-basic"
            label="Detail"
            variant="outlined"
            multiline
          />
        </Box>
      </div>
    </>
  );
}
