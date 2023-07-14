import * as React from "react";
import NotRInputText from "../NotRequiredText";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";

const DateComp = (prop) => {
  const handleDateChange = (date) => {
    prop.setStart(date);
    console.log(date);
  };
  function handleOrg(e) {
    prop.setOrganize(e.target.value);
    console.log(e.target.value);
  }
  function handleEnd(date) {
    prop.setEnd(date);
    console.log(date);
  }
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <NotRInputText
            state={"Organization"}
            width="100%"
            margin="0"
            handleState={handleOrg}
            value={prop.organize}
          />
        </Grid>
        <Grid item xs={3}>
          <div style={{ marginLeft: "1%", marginTop: "8px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  width: "100%",
                }}
                label="Start Day"
                value={prop.startday}
                onChange={handleDateChange}
                required
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  inputProps: {
                    required: true,
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ marginLeft: "1%", marginTop: "8px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  width: "100%",
                }}
                value={prop.endday}
                label="End Day"
                onChange={handleEnd}
              />
            </LocalizationProvider>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default DateComp;
