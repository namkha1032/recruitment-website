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
                        cursor: "pointer", zIndex: 3, borderRight: "1px solid black", borderBottom: "1px solid black",
                        padding: 2, borderRadius: "16px 0px",
                        backgroundColor: currentCateTab == 0 ? "grey.600" : "white",
                        color: currentCateTab == 0 ? "white" : "black",
                        "&:hover": {
                            backgroundColor: currentCateTab == 0 ? "grey.600" : "grey.300",
                        }
                    }}>
                    <Typography variant="h6">Soft Skill</Typography>
                </Box>
                <Box onClick={() => { setCurrentCateTab(1) }}
                    sx={{
                        cursor: "pointer", zIndex: 2, position: "relative", borderRight: "1px solid black", borderBottom: "1px solid black",
                        padding: 2, borderRadius: "16px 0px", left: "-16px",
                        backgroundColor: currentCateTab == 1 ? "grey.600" : "white",
                        color: currentCateTab == 1 ? "white" : "black",
                        "&:hover": {
                            backgroundColor: currentCateTab == 1 ? "grey.600" : "grey.300",
                        }
                    }}>
                    <Typography sx={{ paddingLeft: 2 }} variant="h6">Language</Typography>
                </Box>
                <Box onClick={() => { setCurrentCateTab(2) }}
                    sx={{
                        cursor: "pointer", zIndex: 1, position: "relative", borderRight: "1px solid black", borderBottom: "1px solid black",
                        padding: 2, borderRadius: "16px 0px", left: "-32px",
                        backgroundColor: currentCateTab == 2 ? "grey.600" : "white",
                        color: currentCateTab == 2 ? "white" : "black",
                        "&:hover": {
                            backgroundColor: currentCateTab == 2 ? "grey.600" : "grey.300",
                        }
                    }}>
                    <Typography sx={{ paddingLeft: 2 }} variant="h6">Technology</Typography>
                </Box>
            </Box>
        </>
    )
}

export default CateTab