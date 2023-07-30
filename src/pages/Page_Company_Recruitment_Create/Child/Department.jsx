import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import CompHeader from "./compHeader";
import BusinessIcon from "@mui/icons-material/Business";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Department = (prop) => {
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Box sx={{ marginLeft: "8px", minWidth: "10%" }}>
            <CompHeader headerIcon={<BusinessIcon />}>Department</CompHeader>
          </Box>
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
              {prop.department.map((comp) => (
                <MenuItem key={comp.departmentId} value={comp.departmentName}>
                  {comp.departmentName}
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
                Website
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
