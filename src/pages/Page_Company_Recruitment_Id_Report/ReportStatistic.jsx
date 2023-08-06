import { Box, Grid, List, ListItem } from "@mui/material";
import TroubleshootRoundedIcon from "@mui/icons-material/TroubleshootRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ReportStatistic(props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        borderLeft: isMd ? "1px solid #d3d3d3" : "",
        border: isMd ? "" : "1px solid #d3d3d3",
        borderRadius: isMd ? 0 : 1,
        paddingTop: isMd ? 0 : 2,
        paddingLeft: 2,
        paddingBottom: isMd ? 0 : 2,
        paddingRight: 2,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TroubleshootRoundedIcon
            sx={{
              fontSize: 30,
              marginRight: 1,
            }}
          />
          <Box
            sx={{
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Numerical Data
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <List>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>Total:</Box>
              <Box sx={{
                fontWeight: 600
              }}>{props.Total}</Box>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>Average:</Box>
              <Box sx={{
                fontWeight: 600
              }}>{props.Mean}</Box>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>Median:</Box>
              <Box sx={{
                fontWeight: 600
              }}>{props.Median}</Box>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>Mode:</Box>
              <Box sx={{
                fontWeight: 600
              }}>{props.Mode}</Box>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
