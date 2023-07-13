
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
    TextField,
    Card,
    CardHeader,
    CardContent,
    Slider
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import "./Page_Company_Interview_Id_Start.scss"
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

    let softScoreArray = []
    let softScoreString = ``
    if (rightSoft) {
        rightSoft.questions.forEach((ques, index) => {
            if (ques.score != "") {
                softScoreArray = softScoreArray.concat(parseFloat(ques.score))
            }
        })
        softScoreArray.forEach((sco, index) => {
            softScoreString = softScoreString.concat(sco.toString())
            if (index < softScoreArray.length - 1) {
                softScoreString = softScoreString.concat("+")
            }
            else {
                softScoreString = softScoreString.concat(`=${softScoreArray.reduce((a, b) => a + b, 0)}`)
            }
        })
    }
    console.log("softScoreString: ", softScoreString)

    let langScoreArray = []
    if (rightLang) {
        rightLang.questions.forEach(ques => {
            if (ques.score != "") {
                langScoreArray = langScoreArray.concat(parseFloat(ques.score))
            }
        })
    }

    let techScoreArray = []
    if (rightTech) {
        rightTech.skills.forEach(skill => {
            skill.questions.forEach(ques => {
                if (ques.score != "") {
                    techScoreArray = techScoreArray.concat(parseFloat(ques.score))
                }
            })
        })
    }
    // console.log("softScoreString: ", softScoreArray)
    // console.log("softScoreArray: ", softScoreArray)
    // console.log("langScoreArray: ", langScoreArray)
    // console.log("techScoreArray: ", techScoreArray)
    let [currentLangTab, setCurrentLangTab] = useState(0);
    let [currentTechTab, setCurrentTechTab] = useState(0);

    let [currentSoft, setCurrentSoft] = useState([])
    let [currentLang, setCurrentLang] = useState([])
    let [currentTech, setCurrentTech] = useState([])


    let [chosenTech, setChosenTech] = useState(null)

    useEffect(() => {
        dispatch({ type: "saga/getAllRelatedQuestion" })
    }, [])
    const navigate = useNavigate()
    return (
        leftSoft ?
            <form autoComplete='off' onSubmit={(event) => {
                event.preventDefault()
            }}>
                {/* Soft Skill Questions */}
                <Box sx={{ border: "1px solid black", borderRadius: 10 }}>
                    <Box sx={{ borderRight: "1px solid black", borderBottom: "1px solid black", padding: 3, borderRadius: "40px 0px", width: "fit-content" }}>
                        <Typography variant="h5">Soft Skill Questions</Typography>
                    </Box>
                    <Grid container sx={{ padding: 4 }}>
                        <Grid item md={5}>
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
                                sx={{
                                    height: 400,
                                    '& .MuiDataGrid-row:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                            </DataGrid>
                        </Grid>
                    </Grid>
                </Box>
                {/* Language Skill */}
                <Box sx={{ border: "1px solid black", borderRadius: 10, marginTop: 7 }}>
                    <Box sx={{ borderRight: "1px solid black", borderBottom: "1px solid black", padding: 3, borderRadius: "40px 0px", width: "fit-content" }}>
                        <Typography variant="h5">Language Questions</Typography>
                    </Box>
                    <Grid container sx={{ padding: 4 }}>
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
                                    setCurrentLang(newChosen);
                                }}
                                rowSelectionModel={currentLang}
                                sx={{
                                    height: 400,
                                    '& .MuiDataGrid-row:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
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
                                sx={{
                                    height: 400,
                                    '& .MuiDataGrid-row:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            >

                            </DataGrid>
                        </Grid>
                    </Grid>
                </Box>
                {/* Technical Questions */}
                <Box sx={{ border: "1px solid black", borderRadius: 10, marginTop: 7 }}>
                    <Box sx={{ borderRight: "1px solid black", borderBottom: "1px solid black", padding: 3, borderRadius: "40px 0px", width: "fit-content" }}>
                        <Typography variant="h5">Technical Questions</Typography>
                    </Box>
                    <Grid container sx={{ padding: 4 }}>
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
                                        >
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
                                        ? <DataGrid
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
                                            sx={{
                                                height: 400,
                                                '& .MuiDataGrid-row:hover': {
                                                    cursor: 'pointer'
                                                }
                                            }}
                                        >
                                        </DataGrid>
                                        : null
                                )
                            })}
                        </Grid>
                    </Grid>
                </Box>
                <Grid container sx={{ marginTop: 5 }} columnSpacing={5}>
                    <Grid item md={6}>
                        <TextField
                            label="Note"
                            placeholder="Note"
                            multiline
                            fullWidth
                            variant="outlined"
                            rows={6}
                            sx={{
                                "&": {
                                    height: "100%"
                                },
                                "& .MuiInputBase-root": {
                                    height: "100%",
                                }
                                // "& .MuiInputBase-root .MuiInputBase-inputMultiline": {
                                //     height: "100%",
                                // },
                                // "&.MuiFormControl-root": {
                                //     height: "100%"
                                // },
                                // "&   .MuiInputBase-input": {
                                //     height: "100%"
                                // }
                            }}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Card variant="outlined" sx={{ border: "1px solid black", borderRadius: 5 }}>
                            <CardHeader title="Final Score" />
                            <CardContent>
                                <Grid container>
                                    <Grid item md={4}>
                                        <Typography variant="body1">Soft Skill: </Typography>
                                    </Grid>
                                    <Grid item md={8}>
                                        <InlineMath
                                            math={softScoreString}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Slider></Slider>
            </form>
            : null
    );
}