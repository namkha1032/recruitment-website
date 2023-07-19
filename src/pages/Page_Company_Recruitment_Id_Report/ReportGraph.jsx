import { useCallback, useMemo } from "react";
import { Box } from "@mui/material";
import Plot from 'react-plotly.js';

function getArray(from, to) {
    let arr = [from];
    for (let i = from; i < to; i = i + 0.1) {
        arr.push(i)
    }
    return arr
}

function f(array) {
    return array.map(x => Math.pow(x, 3) - 10 * Math.pow(x, 2) - 4 * x + 8)
}

function g(array) {
    return array.map(x => Math.pow(x, 4) - 238.9 * x)
}
export default function ReportGraph() {
    const x = useMemo(() => getArray(-10, 10))
    return (
        <Box sx={{
            border: "1px solid gray",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Plot
                data={[{
                    x: x,
                    y: f(x),
                    type: 'scatter',
                    name: 'sin(x)'
                  }, {
                    x: x,
                    y: g(x),
                    type: 'scatter',
                    name: 'sin(x)',
                  }]}
                  layout = {{
                    showlegend: false,
                    title: {
                        text: "Trial",
                    },
                    xaxis: {
                        title: {
                            text: "x"
                        }
                    },
                    yaxis: {
                        title: {
                            text: "y"
                        }
                    }
                }}
            />
        </Box>
    )
}