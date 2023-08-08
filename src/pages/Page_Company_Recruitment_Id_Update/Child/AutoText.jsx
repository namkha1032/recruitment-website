import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./AutoText.scss";
import CompHeader from "./compHeader";
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function EmptyTextarea(prop) {
  function handleDetail(e) {
    prop.setDetail(e.target.value);
  }
  return (
    <>
      <div className="AutoT">
        <Box
          sx={{
            "& > :not(style)": { width: "100%", margin: "0", marginTop: "8px" },
          }}
          noValidate
          autoComplete="off"
        >
          <CompHeader headerIcon={<EditNoteIcon/>}>Note</CompHeader>
          <TextField
            value={prop.value}
            onChange={handleDetail}
            id="outlined-basic"
            variant="outlined"
            multiline
          />
        </Box>
      </div>
    </>
  );
}
