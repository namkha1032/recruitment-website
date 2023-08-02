import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CompHeader from "./compHeader";
import BusinessIcon from "@mui/icons-material/Business";
import { Box } from "@mui/material";
const Department = (prop) => {
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Box sx={{ marginLeft: "8px", minWidth: "10%" }}>
            <CompHeader headerIcon={<BusinessIcon />}>Department</CompHeader>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: "97%" }}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={prop.departmentName}
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
            <Grid item xs={4}>
              <Typography
                sx={{ margin: "0", marginLeft: "12px", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                Address
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                sx={{ margin: "0", marginLeft: "2%", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                {prop.departmentAddress}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography
                sx={{ margin: "0", marginLeft: "12px", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                Email
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                sx={{ margin: "0", marginLeft: "2%", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                {prop.departmentEmail}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography
                sx={{ margin: "0", marginLeft: "12px", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                Phone number
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                sx={{ margin: "0", marginLeft: "2%", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                {prop.departmentPhone}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{ margin: "0", marginLeft: "12px", minWidth: "10%" }}
                variant="h6"
                gutterBottom
              >
                Address
              </Typography>
            </Grid>
            <Grid item xs={8}>
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
