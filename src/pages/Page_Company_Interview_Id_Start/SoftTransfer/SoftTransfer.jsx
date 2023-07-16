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
import SoftLeftTable from '../SoftLeftTable/SoftLeftTable';
import SoftRightTable from '../SoftRightTable/SoftRightTable';

const SoftTransfer = (props) => {
    let { leftSoft, rightSoft } = props
    let [currentSoft, setCurrentSoft] = useState([])
    const dispatch = useDispatch()
    return (
        <>
            <Grid container sx={{ padding: 4 }}>
                <Grid item md={5}>
                    <SoftLeftTable leftSoft={leftSoft} currentSoft={currentSoft} setCurrentSoft={setCurrentSoft} />
                </Grid>
                <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        disabled={currentSoft.length == 0}
                        onClick={() => {
                            let newQues = {
                                categoryOrder: 0,
                                chosenQuestionId: currentSoft[0]
                            }
                            dispatch({ type: "question/transferSoftLangQuestion", payload: newQues })
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
                    <SoftRightTable rightSoft={rightSoft} />
                </Grid>
            </Grid>
        </>
    )
}

export default SoftTransfer