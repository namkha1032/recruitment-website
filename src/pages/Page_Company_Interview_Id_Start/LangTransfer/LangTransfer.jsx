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

const LangTransfer = (props) => {
    const { leftLang, rightLang } = props
    let [currentLang, setCurrentLang] = useState([])
    const dispatch = useDispatch()
    return (
        <>
            <Grid container sx={{ padding: 4 }}>
                <Grid item md={5}>
                    <LangLeftTable leftLang={leftLang} currentLang={currentLang} setCurrentLang={setCurrentLang} />
                </Grid>
                <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        disabled={currentLang.length == 0}
                        onClick={() => {
                            let newQues = {
                                categoryOrder: 1,
                                chosenQuestionId: currentLang[0]
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
                        color="error"
                        size="small"
                    >
                        &lt;
                    </Button>
                </Grid>
                <Grid item md={5}>
                    <LangRightTable rightLang={rightLang} type={"score"} />
                </Grid>
            </Grid>
        </>
    )

}

export default LangTransfer