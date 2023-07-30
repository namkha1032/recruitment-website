import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CompHeader from "./compHeader";
import DateRangeIcon from "@mui/icons-material/DateRange";

const SelectDate = (prop) => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box style={{ marginLeft: "2%", marginTop: "8px" }}>
            <CompHeader headerIcon={<DateRangeIcon />}>Start Day</CompHeader>
            <Box style={{ marginTop: "8px" }}>
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
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            style={{ marginLeft: "3%", marginTop: "8px", marginRight: "2%" }}
          >
            <CompHeader headerIcon={<DateRangeIcon />}>End Day</CompHeader>
            <Box style={{ marginTop: "8px" }}>
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default SelectDate;
