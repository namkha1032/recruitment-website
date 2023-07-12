import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { department } from "./RecruitData";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BorderAllRounded } from "@mui/icons-material";

const Department = (prop) => {
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Typography
            sx={{ margin: "0", marginLeft: "8px", minWidth: "10%" }}
            variant="h6"
            gutterBottom
          >
            Department
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <FormControl sx={{ m: 1, width: "97%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              department
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={prop.departmentName}
              label="Department"
              onChange={prop.handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {department.map((comp) => (
                <MenuItem key={comp.id} value={comp.name}>
                  {comp.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {prop.express ? (
          <>
            <Grid item xs={4}></Grid>
            <Grid item xs={3}>
              <Typography
                sx={{ margin: "0", marginLeft: "8px", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                Address
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography
                sx={{ margin: "0", marginLeft: "2%", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                {prop.departmentAddress}
              </Typography>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={3}>
              <Typography
                sx={{ margin: "0", marginLeft: "8px", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                Email
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography
                sx={{ margin: "0", marginLeft: "2%", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                {prop.departmentEmail}
              </Typography>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={3}>
              <Typography
                sx={{ margin: "0", marginLeft: "8px", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                Phone number
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography
                sx={{ margin: "0", marginLeft: "2%", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                {prop.departmentPhone}
              </Typography>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={3}>
              <Typography
                sx={{ margin: "0", marginLeft: "8px", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                Address
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography
                sx={{ margin: "0", marginLeft: "2%", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                {prop.departmentWeb}
              </Typography>
            </Grid>
          </>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
};
export default Department;
