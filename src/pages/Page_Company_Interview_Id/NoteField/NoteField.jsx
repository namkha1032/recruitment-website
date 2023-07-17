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

const NoteField = (props) => {
    const { note } = props
    return (
        <>
            <Box sx={{ borderRadius: 4, border: "1px solid black", padding: 2, height: "100%" }}>
                <Typography variant="h4">Note</Typography>
                <Typography varint="body1">{note}</Typography>
            </Box>
        </>
    )
}

export default NoteField