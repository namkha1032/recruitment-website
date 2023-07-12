
import { useState, useEffect } from 'react';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Checkbox,
    TextField
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function CustomTabPanel(props) {

    return (
        <Box
            sx={{
                display: props.value == props.index ? "block" : "none",
                padding: 3,
                height: 400
                // borderLeft: "1px solid black",
                // borderRight: "1px solid black",
                // borderBottom: "1px solid black",
                // borderRadius: "0 0 20px 20px"
            }}
        >
            {props.children}
        </Box>
    );
}



export default function Page_Company_Interview_Id_Start() {
    const dispatch = useDispatch()
    // const [leftSoft, setleftSoft] = useState(useSelector(state => {
    //     return state.question ? state.question[0] : null
    // }))
    let leftSoft = useSelector(state => {
        return state.interviewQuestion ? state.interviewQuestion.left[0] : null
    })
    let leftLang = useSelector(state => {
        return state.interviewQuestion ? state.interviewQuestion.left[1] : null
    })
    let leftTech = useSelector(state => {
        return state.interviewQuestion ? state.interviewQuestion.left[2] : null
    })

    let rightSoft = useSelector(state => {
        return state.interviewQuestion ? state.interviewQuestion.right[0] : null
    })
    let rightLang = useSelector(state => {
        return state.interviewQuestion ? state.interviewQuestion.right[1] : null
    })
    let rightTech = useSelector(state => {
        return state.interviewQuestion ? state.interviewQuestion.right[2] : null
    })


    let [currentLangTab, setCurrentLangTab] = useState(0);
    let [currentTechTab, setCurrentTechTab] = useState(0);

    let [currentSoft, setCurrentSoft] = useState([])
    let [currentLang, setCurrentLang] = useState([])
    let [currentTech, setCurrentTech] = useState([])


    let [chosenTech, setChosenTech] = useState(null)

    // function handleChosenTech(newQues) {
    //     setChosenTech(oldState => ({
    //         ...oldState,
    //         skills: oldState.skills.map((skill, skillIndex) => {
    //             if (skillIndex != action.payload.skillOrder) {
    //                 return skill
    //             }
    //             else {
    //                 return {
    //                     ...skill,
    //                     questions: skill.questions.filter((ques) => {
    //                         return ques.questionid != action.payload.chosenQuestionId
    //                     })
    //                 }
    //             }
    //         })
    //     }))
    // }
    // console.log("leftSoft", leftSoft)
    // console.log("leftLang", leftLang)
    // console.log("leftTech", leftTech)
    console.log("currentTech: ", currentTech)
    useEffect(() => {
        dispatch({ type: "saga/getAllRelatedQuestion" })
    }, [])
    const navigate = useNavigate()
    return (
        leftSoft ?
            <form autoComplete='off' onSubmit={(event) => {
                event.preventDefault()
                console.log("submitted")
            }}>
                <Grid container rowSpacing={0} columnSpacing={0}>
                    {/* Soft Skill Questions */}
                    <Grid item md={12}>
                        <Typography variant="h5">Soft Skill Questions</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <DataGrid
                            getRowId={(row) => row.questionid}
                            columns={[
                                { field: "questionid", headerName: "ID", flex: 1 },
                                { field: "questionstring", headerName: "String", flex: 3 }]}
                            rows={leftSoft.questions.map(ques => ques)}
                            onRowSelectionModelChange={(newChosen) => {
                                console.log("newChosenSoft: ", newChosen)
                                setCurrentSoft(newChosen);
                            }}
                            rowSelectionModel={currentSoft}
                            sx={{ height: 400 }}
                        >
                        </DataGrid>
                    </Grid>
                    <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            disabled={currentSoft.length == 0}
                            onClick={() => {
                                let newQues = {
                                    categoryOrder: 0,
                                    chosenQuestionId: currentSoft[0]
                                }
                                dispatch({ type: "interviewQuestion/transferSoftLangQuestion", payload: newQues })
                                // handleChosenTech(newQues)
                            }}
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                        >
                            &lt;
                        </Button>
                    </Grid>
                    <Grid item md={5}>
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
                                                    value={rightSoft.questions.find(ques => ques.questionid == params.row.questionid).score}
                                                    onChange={(event) => {
                                                        console.log("quesid: ", params.row.questionid)
                                                        let newQues = {
                                                            categoryOrder: 0,
                                                            chosenQuestionId: params.row.questionid,
                                                            newScore: event.target.value
                                                        }
                                                        dispatch({ type: "interviewQuestion/updateNewSoftLangScore", payload: newQues })
                                                    }} />
                                            </Box>
                                        )
                                    }
                                }
                            ]}
                            rows={rightSoft.questions.map(ques => ques)}
                            sx={{ height: 400 }}
                        >
                        </DataGrid>
                    </Grid>
                    {/* Language Skill */}
                    <Grid item md={12} sx={{ marginTop: 4 }}>
                        <Typography variant="h5">Language Questions</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={currentLangTab} onChange={(event, newTab) => { }}>
                                <Tab label={leftLang.languagename}></Tab>
                            </Tabs>
                        </Box>
                        <DataGrid
                            getRowId={(row) => row.questionid}
                            columns={[
                                { field: "questionid", headerName: "ID", flex: 1 },
                                { field: "questionstring", headerName: "String", flex: 3 }]}
                            rows={leftLang.questions.map(ques => ques)}
                            onRowSelectionModelChange={(newChosen) => {
                                console.log(newChosen)
                                setCurrentLang(newChosen);
                            }}
                            rowSelectionModel={currentLang}
                            sx={{ height: 400 }}
                        >

                        </DataGrid>
                    </Grid>
                    <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            disabled={currentLang.length == 0}
                            onClick={() => {
                                let newQues = {
                                    categoryOrder: 1,
                                    chosenQuestionId: currentLang[0]
                                }
                                dispatch({ type: "interviewQuestion/transferSoftLangQuestion", payload: newQues })
                                // handleChosenTech(newQues)
                            }}
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                        >
                            &lt;
                        </Button>
                    </Grid>
                    <Grid item md={5}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={currentLangTab} onChange={(event, newTab) => { }}>
                                <Tab label={leftLang.languagename}></Tab>
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
                                                        console.log("quesid: ", params.row.questionid)
                                                        let newQues = {
                                                            categoryOrder: 1,
                                                            chosenQuestionId: params.row.questionid,
                                                            newScore: event.target.value
                                                        }
                                                        dispatch({ type: "interviewQuestion/updateNewSoftLangScore", payload: newQues })
                                                    }} />
                                            </Box>
                                        )
                                    }
                                }
                            ]}
                            rows={rightLang.questions.map(ques => ques)}
                            sx={{ height: 400 }}
                        >

                        </DataGrid>
                    </Grid>
                    {/* Technical Questions */}
                    <Grid item md={12} sx={{ marginTop: 4 }}>
                        <Typography variant="h5">Technical Questions</Typography>
                    </Grid>
                    <Grid item md={5}>
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
                                { field: "questionstring", headerName: "String", flex: 3 }
                            ]
                            let leftTechRows = skill.questions.map(ques => ques)
                            return (
                                currentTechTab == index
                                    ? < DataGrid
                                        key={skill.skillid}
                                        columns={leftTechColumns}
                                        rows={leftTechRows}
                                        getRowId={(row) => row.questionid}
                                        onRowSelectionModelChange={(newChosen) => {
                                            console.log(newChosen)
                                            setCurrentTech(newChosen);
                                        }}
                                        rowSelectionModel={currentTech}
                                        sx={{ height: 400 }}>
                                    </DataGrid>
                                    : null
                            )
                        })}
                    </Grid>
                    <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            disabled={currentTech.length == 0}
                            onClick={() => {
                                let newQues = {
                                    categoryOrder: 2,
                                    skillOrder: currentTechTab,
                                    chosenQuestionId: currentTech[0]
                                }
                                dispatch({ type: "interviewQuestion/transferTechQuestion", payload: newQues })
                                // handleChosenTech(newQues)
                            }}
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                        >
                            &lt;
                        </Button>
                    </Grid>
                    <Grid item md={5}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={currentTechTab} onChange={(event, newTab) => {
                                setCurrentTech([])
                                setCurrentTechTab(newTab)
                            }}>
                                {rightTech.skills.map(skill => {
                                    return (<Tab key={skill.skillid} label={skill.skillname}></Tab>)
                                })}
                            </Tabs>
                        </Box>
                        {rightTech.skills.map((skill, index) => {
                            return (
                                currentTechTab == index
                                    ? < DataGrid
                                        key={skill.skillid}
                                        columns={[
                                            { field: "questionid", headerName: "ID", flex: 1 },
                                            { field: "questionstring", headerName: "String", flex: 3 },
                                            {
                                                field: "score", headerName: "Score", flex: 1, renderCell: (params) => {
                                                    return (
                                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                                            <TextField required type="number" size="small"
                                                                value={rightTech.skills[currentTechTab].questions.find(ques => ques.questionid == params.row.questionid).score}
                                                                onChange={(event) => {
                                                                    console.log("quesid: ", params.row.questionid)
                                                                    let newQues = {
                                                                        categoryOrder: 2,
                                                                        skillOrder: currentTechTab,
                                                                        chosenQuestionId: params.row.questionid,
                                                                        newScore: event.target.value
                                                                    }
                                                                    dispatch({ type: "interviewQuestion/updateNewTechScore", payload: newQues })
                                                                }} />
                                                        </Box>
                                                    )
                                                }
                                            }
                                        ]}
                                        rows={skill.questions.map(ques => ques)}
                                        getRowId={(row) => row.questionid}
                                        sx={{ height: 400 }}>
                                    </DataGrid>
                                    : null
                            )
                        })}
                    </Grid>
                </Grid >
                <Button variant="contained" type="submit">Submit</Button>
            </form>
            : null
    );
}