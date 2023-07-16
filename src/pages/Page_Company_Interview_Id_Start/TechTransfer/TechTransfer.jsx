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

// import components
import TechLeftTable from '../TechLeftTable/TechLeftTable';
import TechRightTable from '../TechRightTable/TechRightTable';
const TechTransfer = (props) => {
    const { leftTech, rightTech } = props
    const dispatch = useDispatch()
    let [currentTechTab, setCurrentTechTab] = useState(0);
    let [currentTech, setCurrentTech] = useState([])
    return (
        <Grid container sx={{ padding: 4 }}>
            <Grid item md={5}>
                <TechLeftTable leftTech={leftTech}
                    currentTech={currentTech}
                    setCurrentTech={setCurrentTech}
                    currentTechTab={currentTechTab}
                    setCurrentTechTab={setCurrentTechTab} />
            </Grid>
            <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Button
                    sx={{ my: 0.5 }}
                    variant="contained"
                    size="small"
                    disabled={currentTech.length == 0}
                    onClick={() => {
                        let newQues = {
                            categoryOrder: 2,
                            skillOrder: currentTechTab,
                            chosenQuestionId: currentTech[0]
                        }
                        dispatch({ type: "question/transferTechQuestion", payload: newQues })
                        // handleChosenTech(newQues)
                    }}
                >
                    &gt;
                </Button>
                <Button
                    sx={{ my: 0.5 }}
                    variant="contained"
                    size="small"
                    color="error"
                >
                    &lt;
                </Button>
            </Grid>
            <Grid item md={5}>
                <TechRightTable
                    rightTech={rightTech}
                    setCurrentTech={setCurrentTech}
                    currentTechTab={currentTechTab}
                    setCurrentTechTab={setCurrentTechTab} />
            </Grid>
        </Grid>
    )
}

export default TechTransfer