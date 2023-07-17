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
import ScoreTable from '../Page_Company_Interview_Id_Start/ScoreTable/ScoreTable';
import RadarPlot from './RadarPlot/RadarPlot';
import QuestionTable from './QuestionTable/QuestionTable';
import NoteField from './NoteField/NoteField';
const Page_Company_Interview_Id = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: "saga/getInterviewId" })
    }, [])
    const interview = useSelector(state => state.interview)

    return (
        <>{interview &&
            <>
                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <NoteField note={interview.note} />
                    </Grid>
                    <Grid item md={6}>
                        <QuestionTable round={interview.round} />
                    </Grid>
                </Grid>
                <Box sx={{ border: "1px solid black", marginTop: 5, padding: 5, borderRadius: 5 }}>
                    <Grid container>
                        <Grid item md={6}>
                            <RadarPlot allResult={interview.round} />
                        </Grid>
                        <Grid item md={6}>
                            <ScoreTable allResult={interview.round} />
                        </Grid>
                    </Grid>
                </Box>
            </>
        }</>
    )
}

export default Page_Company_Interview_Id