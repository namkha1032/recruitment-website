import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { useState } from "react"
import Plot from 'react-plotly.js';


export default function Page_Test() {


    return (
        <Plot
            data={[{
                type: 'scatterpolar',
                r: [39, 28, 8],
                theta: ['Soft Skill', 'Language Skill', 'Technology Skill'],
                fill: 'toself'
            }]}

            layout={{
                polar: {
                    radialaxis: {
                        visible: true,
                        range: [0, 50]
                    }
                },
                showlegend: false,
                title: {
                    text: "super radar"
                },
                width: 500,
                height: 500
            }}
        />
    )
}