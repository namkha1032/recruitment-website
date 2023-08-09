import {
    Tabs,
    Tab,
    Box
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'katex/dist/katex.min.css';
import ViewDialog from '../../../components/ViewDialog/ViewDialog';
const LeftTable = (props) => {
    const { leftTable, cate,
        currentQues, setCurrentQues,
        currentSubTab, setCurrentSubTab } = props
    let TabComponent
    let superSet
    if (cate == 0) {
        TabComponent = (<Tab label={"SOFT SKILL"}></Tab>)
        superSet = [leftTable]
    }
    else if (cate == 1) {
        TabComponent = leftTable.languages.map(language => {
            return (<Tab key={language.languageid} label={language.languagename}></Tab>)
        })
        superSet = leftTable.languages
    }
    else if (cate == 2) {
        TabComponent = leftTable.skills.map(skill => {
            return (<Tab key={skill.skillid} label={skill.skillname}></Tab>)
        })
        superSet = leftTable.skills
    }
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentSubTab} onChange={(event, newTab) => {
                    setCurrentQues([])
                    setCurrentSubTab(newTab)
                }}>
                    {TabComponent}
                </Tabs>
            </Box>
            {superSet.map((sub, index) => {
                let leftColumns = [
                    { field: "questionid", headerName: "ID", flex: 1 },
                    { field: "questionstring", headerName: "String", flex: 4 },
                    {
                        field: "action", headerName: "View", flex: 1, renderCell: (params) => {
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
                    }
                ]
                let leftRows = sub.questions.map(ques => ({
                    ...ques,
                    action: "action"
                }))
                return (
                    currentSubTab == index
                        ? <DataGrid
                            key={index}
                            columns={leftColumns}
                            rows={leftRows}
                            getRowId={(row) => row.questionid}
                            onRowSelectionModelChange={(newChosen) => {
                                setCurrentQues(newChosen);
                            }}
                            rowSelectionModel={currentQues}
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

export default LeftTable