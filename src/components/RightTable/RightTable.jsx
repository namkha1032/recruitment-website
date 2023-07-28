import {
    Tabs,
    Tab,
    Box,
    TextField,
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import 'katex/dist/katex.min.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import ViewDialog from '../ViewDialog/ViewDialog';
const RightTable = (props) => {
    // const {
    //     rightTable,
    //     cate,
    //     setCurrentQues,
    //     currentSubTab,
    //     setCurrentSubTab,
    //     type,
    // } = props
    const rightTable = props.rightTable
    const cate = props.cate
    const currentSubTab = props.currentSubTab
    const setCurrentSubTab = props.setCurrentSubTab
    const setCurrentQues = props.setCurrentQues
    const dispatch = useDispatch()
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    let TabComponent
    let superSet
    if (cate == 0) {
        TabComponent = (<Tab label={"Soft Skill"}></Tab>)
        superSet = [rightTable]
    }
    else if (cate == 1) {
        TabComponent = rightTable.languages.map(language => {
            return (<Tab key={language.languageid} label={language.languagename}></Tab>)
        })
        superSet = rightTable.languages
    }
    else if (cate == 2) {
        TabComponent = rightTable.skills.map(skill => {
            return (<Tab key={skill.skillid} label={skill.skillname}></Tab>)
        })
        superSet = rightTable.skills
    }
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentSubTab} onChange={(event, newTab) => {
                    if (setCurrentQues) {
                        setCurrentQues([])
                    }
                    setCurrentSubTab(newTab)
                }}>
                    {TabComponent}
                </Tabs>
            </Box>
            {superSet.map((sub, index) => {
                let rightColumns = [
                    { field: "questionid", headerName: isMd ? "ID" : "#", flex: 2 },
                    { field: "questionstring", headerName: "String", flex: 5 },
                    {
                        field: "action", headerName: "", flex: 1, renderCell: (params) => {
                            if (cate == 0) {
                                return (
                                    <ViewDialog params={params} cate={cate} />
                                )
                            }
                            else if (cate == 1) {
                                return (
                                    <ViewDialog params={params} cate={cate} languagename={sub.languagename} />
                                )
                            }
                            else if (cate == 2) {
                                return (
                                    <ViewDialog params={params} cate={cate} skillname={sub.skillname} />
                                )
                            }
                        }
                    },
                    {
                        field: "score", headerName: "Score", flex: 3, renderCell: (params) => {
                            return (
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <TextField required type="number" size="small"
                                        value={superSet[currentSubTab].questions.find(ques => ques.questionid == params.row.questionid).score}
                                        onChange={(event) => {
                                            let middleScore = parseFloat(event.target.value) >= 0 && parseFloat(event.target.value) <= 10 ? parseFloat(event.target.value) : ""
                                            let newQues = {
                                                categoryOrder: cate,
                                                subOrder: currentSubTab,
                                                chosenQuestionId: params.row.questionid,
                                                newScore: middleScore
                                            }
                                            console.log("newQues: ", newQues)
                                            dispatch({ type: "question/scoreQuestion", payload: newQues })
                                        }}
                                        InputProps={{
                                            readOnly: setCurrentQues ? false : true,
                                        }}
                                    />
                                </Box>
                            )
                        }
                    }
                ]
                let rightRows = sub.questions.map(ques => ({
                    ...ques,
                    action: "action"
                }))
                return (
                    currentSubTab == index
                        ? <DataGrid
                            key={index}
                            columns={rightColumns}
                            rows={rightRows}
                            getRowId={(row) => row.questionid}
                            sx={{
                                height: 400,
                                '& .MuiDataGrid-row:hover': {
                                    cursor: 'pointer'
                                }
                            }}
                            disableColumnMenu
                            disableColumnFilter
                            disableColumnSelector
                            disableDensitySelector
                            disableRowSelectionOnClick
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

export default RightTable