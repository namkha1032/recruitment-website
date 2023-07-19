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
import ButtonTransfer from '../ButtonTransfer/ButtonTransfer';
const SoftTransfer = (props) => {
    let { leftSoft, rightSoft } = props
    let [currentSoft, setCurrentSoft] = useState([])
    const dispatch = useDispatch()
    function handleTransfer() {
        let newQues = {
            categoryOrder: 0,
            chosenQuestionId: currentSoft[0]
        }
        dispatch({ type: "question/transferSoftLangQuestion", payload: newQues })
        // handleChosenTech(newQues)
    }
    return (
        <>
            <Grid container>
                <Grid item md={5}>
                    <SoftLeftTable leftSoft={leftSoft} currentSoft={currentSoft} setCurrentSoft={setCurrentSoft} />
                </Grid>
                <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <ButtonTransfer currentChosen={currentSoft} handleTransfer={handleTransfer} />
                </Grid>
                <Grid item md={5}>
                    <SoftRightTable rightSoft={rightSoft} type={"score"} />
                </Grid>
            </Grid>
        </>
    )
}

export default SoftTransfer