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
import LangLeftTable from '../LangLeftTable/LangLeftTable';
import LangRightTable from '../LangRightTable/LangRightTable';
import ButtonTransfer from '../ButtonTransfer/ButtonTransfer';
const LangTransfer = (props) => {
    const { leftLang, rightLang } = props
    let [currentLang, setCurrentLang] = useState([])
    const dispatch = useDispatch()
    function handleTransfer() {
        let newQues = {
            categoryOrder: 1,
            chosenQuestionId: currentLang[0]
        }
        dispatch({ type: "question/transferSoftLangQuestion", payload: newQues })
        // handleChosenTech(newQues)
    }
    return (
        <>
            <Grid container>
                <Grid item md={5}>
                    <LangLeftTable leftLang={leftLang} currentLang={currentLang} setCurrentLang={setCurrentLang} />
                </Grid>
                <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <ButtonTransfer currentChosen={currentLang} handleTransfer={handleTransfer} />
                </Grid>
                <Grid item md={5}>
                    <LangRightTable rightLang={rightLang} type={"score"} />
                </Grid>
            </Grid>
        </>
    )

}

export default LangTransfer