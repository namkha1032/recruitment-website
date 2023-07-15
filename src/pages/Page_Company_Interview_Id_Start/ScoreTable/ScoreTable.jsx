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
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const ScoreTable = (props) => {
    return (
        <Grid container rowSpacing={4}>
            <Grid item md={3}>
                <Typography variant="body1">Soft Skill: </Typography>
            </Grid>
            <Grid item md={9}>
                <InlineMath
                    math={softMath}
                />
            </Grid>
            <Grid item md={3}>
                <Typography variant="body1">Language Skill: </Typography>
            </Grid>
            <Grid item md={9}>
                <InlineMath
                    math={langMath}
                />
            </Grid>
            <Grid item md={3}>
                <Typography variant="body1">Technical Skill: </Typography>
            </Grid>
            <Grid item md={9}>
                <InlineMath
                    math={techMath}
                />
            </Grid>
            <Grid item md={3}>
                <Typography variant="body1">Final Score: </Typography>
            </Grid>
            <Grid item md={9}>
                <InlineMath
                    math={finalMath}
                />
            </Grid>
        </Grid>
    )
}

export default ScoreTable