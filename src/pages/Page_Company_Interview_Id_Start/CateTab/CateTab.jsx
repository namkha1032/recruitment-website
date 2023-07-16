import { useState, useEffect } from 'react';
import {
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardHeader,
    CardContent
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CateTab = (props) => {
    const { currentCateTab, setCurrentCateTab } = props
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Box onClick={() => { setCurrentCateTab(0) }}
                    sx={{
                        cursor: "pointer", zIndex: 3, borderRight: "1px solid black", borderBottom: "1px solid black", padding: 2, borderRadius: "40px 0px",
                        backgroundColor: currentCateTab == 0 ? "grey.600" : "white",
                        color: currentCateTab == 0 ? "white" : "black",
                        "&:hover": {
                            backgroundColor: currentCateTab == 0 ? "grey.600" : "grey.300",
                        }
                    }}>
                    <Typography variant="h5">Soft Skill Questions</Typography>
                </Box>
                <Box onClick={() => { setCurrentCateTab(1) }}
                    sx={{
                        cursor: "pointer", zIndex: 2, position: "relative", left: "-40px", borderRight: "1px solid black", borderBottom: "1px solid black", padding: 2, borderRadius: "40px 0px",
                        backgroundColor: currentCateTab == 1 ? "grey.600" : "white",
                        color: currentCateTab == 1 ? "white" : "black",
                        "&:hover": {
                            backgroundColor: currentCateTab == 1 ? "grey.600" : "grey.300",
                        }
                    }}>
                    <Typography sx={{ paddingLeft: "40px" }} variant="h5">Language Questions</Typography>
                </Box>
                <Box onClick={() => { setCurrentCateTab(2) }}
                    sx={{
                        cursor: "pointer", zIndex: 1, position: "relative", left: "-80px", borderRight: "1px solid black", borderBottom: "1px solid black", padding: 2, borderRadius: "40px 0px",
                        backgroundColor: currentCateTab == 2 ? "grey.600" : "white",
                        color: currentCateTab == 2 ? "white" : "black",
                        "&:hover": {
                            backgroundColor: currentCateTab == 2 ? "grey.600" : "grey.300",
                        }
                    }}>
                    <Typography sx={{ paddingLeft: "40px" }} variant="h5">Technical Questions</Typography>
                </Box>
            </Box>
        </>
    )
}

export default CateTab