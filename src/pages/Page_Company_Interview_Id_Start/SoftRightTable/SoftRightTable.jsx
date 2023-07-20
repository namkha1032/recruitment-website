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
import ViewDialog from '../ViewDialog/ViewDialog';

const SoftRightTable = (props) => {
    let { rightSoft, type } = props
    const dispatch = useDispatch()
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={0} onChange={(event, newTab) => { }}>
                    <Tab label={"Soft Skills"}></Tab>
                </Tabs>
            </Box>
            <DataGrid
                getRowId={(row) => row.questionid}
                columns={[
                    { field: "questionid", headerName: "ID", flex: 1 },
                    { field: "questionstring", headerName: "String", flex: 3 },
                    {
                        field: "action", headerName: "View", flex: 1, renderCell: (params) => {
                            return (
                                <ViewDialog params={params} category={"Soft Skill"} />
                            )
                        }
                    },
                    {
                        field: "score", headerName: "Score", flex: 1,
                        renderCell: (params) => {
                            return (
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <TextField required type="number" size="small"
                                        value={rightSoft.questions.find(ques => ques.questionid == params.row.questionid).score}
                                        onChange={(event) => {
                                            let middleScore = parseFloat(event.target.value) >= 0 && parseFloat(event.target.value) <= 10 ? parseFloat(event.target.value) : ""
                                            let newQues = {
                                                categoryOrder: 0,
                                                chosenQuestionId: params.row.questionid,
                                                newScore: middleScore
                                            }
                                            dispatch({ type: "question/updateNewSoftLangScore", payload: newQues })
                                        }}
                                        InputProps={{
                                            readOnly: type == "score" ? false : true,
                                        }} />
                                </Box>
                            )
                        }
                    }
                ]}
                rows={rightSoft.questions.map(ques => ques)}
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

export default SoftRightTable