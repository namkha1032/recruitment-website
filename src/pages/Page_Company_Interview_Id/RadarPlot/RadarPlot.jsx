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
// import components

// import functions
import calculateScore from '../../../utils/calculateScore';

const RadarPlot = (props) => {
    const { allResult } = props
    let rightSoft = allResult[0]
    let rightLang = allResult[1]
    let rightTech = allResult[2]
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
                    theta: ['Soft Skill', 'Language Skill', 'Technology Skill'],
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
                    title: {
                        text: "Candidate skill overview"
                    },
                    width: 400,
                    height: 350
                }}
            />
        </>
    )
}

export default RadarPlot