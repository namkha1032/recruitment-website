// import libraries
import axios from "axios"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import MUI components
import {
    Typography,
    Button,
    Autocomplete,
    TextField,
    Paper,
    Box,
    Chip,
    Card,
    CardHeader,
    CardContent,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    Skeleton
} from "@mui/material";
import Grid from "@mui/material/Grid";
// import components



import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SkeletonInterviewCreate = (props) => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Skeleton variant="rounded" sx={{ height: "600px", width: "100%" }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Skeleton variant="rounded" sx={{ height: "600px", width: "100%" }} />
                </Grid>
                <Grid item md={12}>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>

                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SkeletonInterviewCreate