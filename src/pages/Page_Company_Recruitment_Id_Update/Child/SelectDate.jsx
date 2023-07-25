import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";

const SelectDate = (prop) => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div style={{ marginLeft: "2%", marginTop: "8px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  width: "100%",
                }}
                label="Start Day"
                value={prop.startDate}
                onChange={prop.handleStart}
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
        <Grid item xs={6}>
          <div style={{ marginLeft: "3%", marginTop: "8px", marginRight: "2%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  width: "100%",
                }}
                value={prop.endDate}
                label="End Day"
                onChange={prop.handleEnd}
              />
            </LocalizationProvider>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default SelectDate;
