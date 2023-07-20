import {
    Tabs,
    Tab,
    Box,
    TextField,
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import 'katex/dist/katex.min.css';

import ViewDialog from '../ViewDialog/ViewDialog';

const TechRightTable = (props) => {
    const rightTech = props.rightTech
    const setCurrentTech = props.setCurrentTech
    const currentTechTab = props.currentTechTab
    const setCurrentTechTab = props.setCurrentTechTab
    const type = props.type
    const dispatch = useDispatch()
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTechTab} onChange={(event, newTab) => {
                    if (type == "score") {
                        setCurrentTech([])
                    }
                    setCurrentTechTab(newTab)
                }}>
                    {rightTech.skills.map(skill => {
                        return (<Tab key={skill.skillid} label={skill.skillname}></Tab>)
                    })}
                </Tabs>
            </Box>
            {rightTech.skills.map((skill, index) => {
                let rightTechColumns = [
                    { field: "questionid", headerName: "ID", flex: 1 },
                    { field: "questionstring", headerName: "String", flex: 3 },
                    {
                        field: "action", headerName: "View", flex: 1, renderCell: (params) => {
                            return (
                                <ViewDialog params={params} category={"Technology"} skillname={skill.skillname} />
                            )
                        }
                    },
                    {
                        field: "score", headerName: "Score", flex: 1, renderCell: (params) => {
                            return (
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <TextField required type="number" size="small"
                                        value={rightTech.skills[currentTechTab].questions.find(ques => ques.questionid == params.row.questionid).score}
                                        onChange={(event) => {
                                            let middleScore = parseFloat(event.target.value) >= 0 && parseFloat(event.target.value) <= 10 ? parseFloat(event.target.value) : ""
                                            let newQues = {
                                                categoryOrder: 2,
                                                skillOrder: currentTechTab,
                                                chosenQuestionId: params.row.questionid,
                                                newScore: middleScore
                                            }
                                            dispatch({ type: "question/updateNewTechScore", payload: newQues })
                                        }}
                                        InputProps={{
                                            readOnly: type == "score" ? false : true,
                                        }}
                                    />
                                </Box>
                            )
                        }
                    }
                ]
                let rightTechRows = skill.questions.map(ques => ({
                    ...ques,
                    action: "action"
                }))
                return (
                    currentTechTab == index
                        ? <DataGrid
                            key={skill.skillid}
                            columns={rightTechColumns}
                            rows={rightTechRows}
                            getRowId={(row) => row.questionid}
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

export default TechRightTable