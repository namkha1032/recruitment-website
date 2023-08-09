import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CompHeader from "./compHeader";
import DateRangeIcon from "@mui/icons-material/DateRange";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const SelectDate = (prop) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={isSm?6:12}>
          <Box style={{marginTop: "8px" }}>
            <CompHeader headerIcon={<DateRangeIcon />}>Start Day</CompHeader>
            <Box style={{ marginTop: "8px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    width: "100%",
                  }}
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
        <Grid item xs={isSm?6:12}>
          <Box
            style={{marginLeft:"0", marginTop: "8px" }}
          >
            <CompHeader headerIcon={<DateRangeIcon />}>End Day</CompHeader>
            <Box style={{ marginTop: "8px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    width: "100%",
                  }}
                  value={prop.endDate}
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
