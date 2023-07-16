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

const SoftLeftTable = (props) => {
    const { leftSoft, currentSoft, setCurrentSoft } = props
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
                    { field: "questionstring", headerName: "String", flex: 3 }]}
                rows={leftSoft.questions.map(ques => ques)}
                onRowSelectionModelChange={(newChosen) => {
                    setCurrentSoft(newChosen);
                }}
                rowSelectionModel={currentSoft}
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

export default SoftLeftTable