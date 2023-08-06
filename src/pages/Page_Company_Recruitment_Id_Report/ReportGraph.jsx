import { useCallback, useMemo } from "react";
import { Box, Grid } from "@mui/material";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import Plot from "react-plotly.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  LanguageRounded,
  PsychologyRounded,
  SchoolRounded,
} from "@mui/icons-material";

// function getArray(from, to) {
//   let arr = [from];
//   for (let i = from; i < to; i = i + 0.1) {
//     arr.push(i);
//   }
//   return arr;
// }

// function f(array) {
//   return array.map((x) => Math.pow(x, 3) - 10 * Math.pow(x, 2) - 4 * x + 8);
// }

// function g(array) {
//   return array.map((x) => Math.pow(x, 4) - 238.9 * x);
// }
// const x = useMemo(() => getArray(-10, 10));
export default function ReportGraph(props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={
        {
          // border: "1px solid gray",
          // borderRadius: 1,
          // padding: 2,
        }
      }
    >
      <Grid container spacing={2}>
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
          {props.title === "General" && (
            <HubRoundedIcon
              sx={{
                fontSize: 30,
                marginRight: 1,
              }}
            />
          )}
          {props.title === "Technology" && (
            <SchoolRounded
              sx={{
                fontSize: 30,
                marginRight: 1,
              }}
            />
          )}
          {props.title === "Language" && (
            <LanguageRounded
              sx={{
                fontSize: 30,
                marginRight: 1,
              }}
            />
          )}
          {props.title === "Soft Skills" && (
            <PsychologyRounded
              sx={{
                fontSize: 30,
                marginRight: 1,
              }}
            />
          )}
          <Box
            sx={{
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            {props.title}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: isMd ? "flex-start" : "center",
          }}
        >
          <Box>
            <Plot
              data={[
                {
                  x: props.data,
                  type: "histogram",
                  // name: "General Score",
                  marker: {
                    color: "black",
                  },
                },
              ]}
              layout={{
                showlegend: false,
                margin:
                  isMd === true
                    ? {
                        // autoexpand: true,
                        // pad: 5,
                        b: 50,
                        l: 100,
                        r: 50,
                        t: 0,
                      }
                    : {
                        // autoexpand: true,
                        // pad: 1,
                        b: 30,
                        l: 40,
                        r: 0,
                        t: 0,
                      },
                width: isMd === true ? 600 : 280,
                height: isMd === true ? 200 : 120,
                // title: {
                //   text: "Trial",
                // },
                xaxis: {
                  title: {
                    text: "Score",
                    font:
                      isMd === true
                        ? {
                            size: 14,
                          }
                        : {
                            size: 10,
                          },
                  },
                  showgrid: false,
                  // zeroline: false,
                },
                yaxis: {
                  title: {
                    text: "Candidate",
                    font:
                      isMd === true
                        ? {
                            size: 14,
                          }
                        : {
                            size: 10,
                          },
                  },
                  showline: false,
                  domain: [0.00, 10.00],
                },
                transition: {
                  duration: 500,
                  easing: "linear-in",
                },
                frame: {
                  duration: 500,
                },
              }}
              config={{
                displayModeBar: false, // this is the line that hides the bar.
                responsive: true,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
