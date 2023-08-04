import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CompHeader from "./compHeader";
import BusinessIcon from "@mui/icons-material/Business";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Department = (prop) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Box sx={{minWidth: "10%" }}>
            <CompHeader headerIcon={<BusinessIcon />}>Department</CompHeader>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{margin:0,width: "100%" }}>
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
            <Grid item xs={isSm?4:12}>
              <Typography
                sx={{ margin: "0", marginLeft: "12px", minWidth: "10%",fontWeight: "bold" }}
                variant="h6"
                gutterBottom
              >
                Address:
              </Typography>
            </Grid>
            <Grid item xs={isSm?8:12}>
              <Typography
                sx={{ margin: "0", marginLeft:isSm?"2%":"12px" , minWidth: "10%" }}
                variant="body1"
                gutterBottom
              >
                {prop.departmentAddress}
              </Typography>
            </Grid>

            <Grid item xs={isSm?4:12}>
              <Typography
                sx={{ margin: "0", marginLeft: "12px", minWidth: "10%",fontWeight: "bold" }}
                variant="h6"
                gutterBottom
              >
                Email:
              </Typography>
            </Grid>
            <Grid item xs={isSm?8:12}>
              <Typography
                sx={{ margin: "0", marginLeft:isSm?"2%":"12px", minWidth: "10%" }}
                variant="body1"
                gutterBottom
              >
                {prop.departmentEmail}
              </Typography>
            </Grid>

            <Grid item xs={isSm?4:12}>
              <Typography
                sx={{ margin: "0", marginLeft: "12px", minWidth: "10%",fontWeight: "bold"}}
                variant="h6"
                gutterBottom
              >
                Phone number:
              </Typography>
            </Grid>
            <Grid item xs={isSm?8:12}>
              <Typography
                sx={{ margin: "0", marginLeft:isSm?"2%":"12px", minWidth: "10%"  }}
                variant="body1"
                gutterBottom
              >
                {prop.departmentPhone}
              </Typography>
            </Grid>
            <Grid item xs={isSm?4:12}>
              <Typography
                sx={{ margin: "0", marginLeft: "12px", minWidth: "10%",fontWeight: "bold"}}
                variant="h6"
                gutterBottom
              >
                Website:
              </Typography>
            </Grid>
            <Grid item xs={isSm?8:12}>
              <Typography
                sx={{ margin: "0", marginLeft:isSm?"2%":"12px", minWidth: "10%" }}
                variant="body1"
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
