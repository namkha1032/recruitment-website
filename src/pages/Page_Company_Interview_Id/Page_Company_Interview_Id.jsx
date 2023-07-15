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

const Page_Company_Interview_Id = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:"saga/getInterviewId"})
    }, [])
    const interview = useSelector(state => state.interview)

    
    let softScoreArray = []
    let softSumString = ``
    let softMath = ``
    let softResult = 0

    let langScoreArray = []
    let langSumString = ``
    let langMath = ``
    let langResult = 0

    let techScoreArray = []
    let techSumString = ``
    let techMath = ``
    let techResult = 0

    
    return (
        <Typography variant="body1">Page_Company_Interview_Id</Typography>
    )
}

export default Page_Company_Interview_Id