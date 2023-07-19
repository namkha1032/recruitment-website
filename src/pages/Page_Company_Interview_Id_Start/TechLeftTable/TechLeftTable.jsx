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
    CardContent,
    IconButton
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewDialog from '../ViewDialog/ViewDialog';
const TechLeftTable = (props) => {
    const { leftTech, currentTech, setCurrentTech, currentTechTab, setCurrentTechTab } = props
    const dispatch = useDispatch()
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTechTab} onChange={(event, newTab) => {
                    setCurrentTech([])
                    setCurrentTechTab(newTab)
                }}>
                    {leftTech.skills.map(skill => {
                        return (<Tab key={skill.skillid} label={skill.skillname}></Tab>)
                    })}
                </Tabs>
            </Box>
            {leftTech.skills.map((skill, index) => {
                let leftTechColumns = [
                    { field: "questionid", headerName: "ID", flex: 1 },
                    { field: "questionstring", headerName: "String", flex: 4 },
                    {
                        field: "action", headerName: "View", flex: 1, renderCell: (params) => {
                            return (
                                <ViewDialog params={params} category={"Technology"} skill={skill.skillname} />
                            )
                        }
                    }
                ]
                let leftTechRows = skill.questions.map(ques => ({
                    ...ques,
                    action: "action"
                }))
                return (
                    currentTechTab == index
                        ? <DataGrid
                            key={skill.skillid}
                            columns={leftTechColumns}
                            rows={leftTechRows}
                            getRowId={(row) => row.questionid}
                            onRowSelectionModelChange={(newChosen) => {
                                setCurrentTech(newChosen);
                            }}
                            rowSelectionModel={currentTech}
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
                        : null
                )
            })}
        </>
    )
}

export default TechLeftTable