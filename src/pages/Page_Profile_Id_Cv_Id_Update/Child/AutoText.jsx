import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./AutoText.scss";
import CompHeader from "./compHeader";

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
          <CompHeader headerIcon={prop.headerIcon}>{prop.state}</CompHeader>
          <TextField
            value={prop.value}
            onChange={handleDetail}
            id={prop.state}
            variant="outlined"
            multiline
            maxRows={4}
          />
        </Box>
      </Box>
    </>
  );
}
