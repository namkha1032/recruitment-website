import { useState, useEffect } from 'react';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardHeader,
    CardContent
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Plot from 'react-plotly.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import components

// import functions
import calculateScore from '../../../utils/calculateScore';
// import styles
const RadarPlot = (props) => {
    const { allResult } = props
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    let rightSoft = allResult[0]
    let rightLang = allResult[1]
    let rightTech = allResult[2]
    console.log("rightSoft: ", rightSoft)
    console.log("rightLang: ", rightLang)
    console.log("rightTech: ", rightTech)
    let {
        softResult,
        softMath,
        langResult,
        langMath,
        techResult,
        techMath,
        finalResult,
        finalMath
    } = calculateScore(rightSoft, rightLang, rightTech)

    return (
        <>
            <Plot
                data={[{
                    type: 'scatterpolar',
                    r: [softResult, langResult, techResult],
                    theta: ['Soft Skill', 'Language', 'Technology'],
                    fill: 'toself'
                }]}

                layout={{
                    polar: {
                        radialaxis: {
                            visible: true,
                            range: [0, 10]
                        }
                    },
                    showlegend: false,
                    margin: {
                        autoexpand: false,
                        pad: 0,
                        b: 0,
                        l: isMd ? 20 : 15,
                        r: isMd ? 70 : 50,
                        t: 0
                    },
                    width: isMd ? 320 : 250,
                    height: isMd ? 320 : 250
                }}
                config={{
                    displayModeBar: false, // this is the line that hides the bar.
                }}
            />
        </>
    )
}

export default RadarPlot