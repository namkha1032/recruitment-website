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
      <Box className="AutoT">
        <Box
          sx={{
            "& > :not(style)": {
              width: prop.width,
              margin: "0",
              marginLeft: prop.marginLeft,
              marginTop: "8px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={prop.value}
            onChange={handleDetail}
            id="outlined-basic"
            label={prop.state}
            variant="outlined"
            multiline
          />
        </Box>
      </Box>
    </>
  );
}
