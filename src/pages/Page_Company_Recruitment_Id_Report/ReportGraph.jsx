import { useCallback, useMemo } from "react";
import { Box, Grid } from "@mui/material";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import Plot from "react-plotly.js";


function getArray(from, to) {
  let arr = [from];
  for (let i = from; i < to; i = i + 0.1) {
    arr.push(i);
  }
  return arr;
}

function f(array) {
  return array.map((x) => Math.pow(x, 3) - 10 * Math.pow(x, 2) - 4 * x + 8);
}

function g(array) {
  return array.map((x) => Math.pow(x, 4) - 238.9 * x);
}
export default function ReportGraph() {
  const x = useMemo(() => getArray(-10, 10));
  return (
    <Box
      sx={{
        border: "1px solid gray",
        borderRadius: 1,
        padding: 2,
      }}
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
            fontSize: 20,
          }}
        >
          <HubRoundedIcon
            sx={{
              fontSize: 30,
              marginRight: 1,
            }}
          />
          <Box
            sx={{
              fontWeight: 600,
            }}
          >
            General
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Plot
              data={[
                {
                  x: x,
                  y: f(x),
                  type: "scatter",
                  name: "sin(x)",
                },
                {
                  x: x,
                  y: g(x),
                  type: "scatter",
                  name: "sin(x)",
                },
              ]}
              layout={{
                showlegend: false,
                // responsive: true,
                autosize: true,
                width: "100%",
                height: "100%",
                title: {
                  text: "Trial",
                },
                xaxis: {
                  title: {
                    text: "x",
                  },
                },
                yaxis: {
                  title: {
                    text: "y",
                  },
                },
              }}
              useResizeHandler
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
