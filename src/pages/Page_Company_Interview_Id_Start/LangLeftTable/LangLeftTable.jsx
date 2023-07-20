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

const LangLeftTable = (props) => {
    let { leftLang, currentLang, setCurrentLang } = props
    const dispatch = useDispatch()
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={0} onChange={(event, newTab) => { }}>
                    <Tab label={leftLang.languagename}></Tab>
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
                                <ViewDialog params={params} category={"Language"} languagename={leftLang.languagename} />
                            )
                        }
                    }]}
                rows={leftLang.questions.map(ques => (
                    {
                        ...ques,
                        action: "action"
                    }
                ))}
                onRowSelectionModelChange={(newChosen) => {
                    setCurrentLang(newChosen);
                }}
                rowSelectionModel={currentLang}
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

export default LangLeftTable