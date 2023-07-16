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

const LangRightTable = (props) => {
    const { rightLang } = props
    const dispatch = useDispatch()
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={0} onChange={(event, newTab) => { }}>
                    <Tab label={rightLang.languagename}></Tab>
                </Tabs>
            </Box>
            <DataGrid
                getRowId={(row) => row.questionid}
                columns={[
                    { field: "questionid", headerName: "ID", flex: 1 },
                    { field: "questionstring", headerName: "String", flex: 3 },
                    {
                        field: "score", headerName: "Score", flex: 1,
                        renderCell: (params) => {
                            return (
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <TextField required type="number" size="small"
                                        value={rightLang.questions.find(ques => ques.questionid == params.row.questionid).score}
                                        onChange={(event) => {
                                            let newQues = {
                                                categoryOrder: 1,
                                                chosenQuestionId: params.row.questionid,
                                                newScore: parseFloat(event.target.value)
                                            }
                                            dispatch({ type: "question/updateNewSoftLangScore", payload: newQues })
                                        }} />
                                </Box>
                            )
                        }
                    }
                ]}
                rows={rightLang.questions.map(ques => ques)}
                sx={{
                    height: 400,
                    '& .MuiDataGrid-row:hover': {
                        cursor: 'pointer'
                    }
                }}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 100 },
                        csvOptions: { disableToolbarButton: true },
                        printOptions: { disableToolbarButton: true }
                    },
                }}
            >

            </DataGrid>
        </>
    )
}

export default LangRightTable