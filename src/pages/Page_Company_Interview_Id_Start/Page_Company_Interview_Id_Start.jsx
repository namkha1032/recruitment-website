
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
    let softSumString = ``
    let softMath = ``
    let softResult = 0

    let langScoreArray = []
    let langSumString = ``
    let langMath = ``
    let langResult = 0

    let techScoreArray = []
    let techSumString = ``
    let techMath = ``
    let techResult = 0

    if (rightSoft) {
        rightSoft.questions.forEach((ques, index) => {
            if (ques.score != "") {
                softScoreArray = softScoreArray.concat(parseFloat(ques.score))
            }
        })
        softScoreArray.forEach((sco, index) => {
            let rightParen = `}\\right)`
            let num = softScoreArray.length.toString()
            let divider = `}{`
            let leftParen = `\\times\\left(\\frac{`
            let weight = `=0.2`
            softResult = (softScoreArray.reduce((a, b) => a + b, 0) / softScoreArray.length * 0.2).toFixed(2)
            softSumString = softSumString.concat(sco.toString())
            if (index < softScoreArray.length - 1) {
                softSumString = softSumString.concat("+")
            }
            softMath = `${softResult}` + weight + leftParen + softSumString + divider + num + rightParen
        })
    }
    // 9=0.2\\times\\left(\\frac{1+3+4}{2}\\right)
    if (rightLang) {
        rightLang.questions.forEach(ques => {
            if (ques.score != "") {
                langScoreArray = langScoreArray.concat(parseFloat(ques.score))
            }
        })
        langScoreArray.forEach((sco, index) => {
            let rightParen = `}\\right)`
            let num = langScoreArray.length.toString()
            let divider = `}{`
            let leftParen = `\\times\\left(\\frac{`
            let weight = `=0.3`
            langResult = (langScoreArray.reduce((a, b) => a + b, 0) / langScoreArray.length * 0.3).toFixed(2)

            langSumString = langSumString.concat(sco.toString())
            if (index < langScoreArray.length - 1) {
                langSumString = langSumString.concat("+")
            }
            langMath = `${langResult}` + weight + leftParen + langSumString + divider + num + rightParen
        })
    }

    if (rightTech) {
        rightTech.skills.forEach(skill => {
            skill.questions.forEach(ques => {
                if (ques.score != "") {
                    techScoreArray = techScoreArray.concat(parseFloat(ques.score))
                }
            })
        })
        techScoreArray.forEach((sco, index) => {
            let rightParen = `}\\right)`
            let num = techScoreArray.length.toString()
            let divider = `}{`
            let leftParen = `\\times\\left(\\frac{`
            let weight = `=0.5`
            techResult = (techScoreArray.reduce((a, b) => a + b, 0) / techScoreArray.length * 0.5).toFixed(2)

            techSumString = techSumString.concat(sco.toString())
            if (index < techScoreArray.length - 1) {
                techSumString = techSumString.concat("+")
            }
            techMath = `${techResult}` + weight + leftParen + techSumString + divider + num + rightParen
        })
    }
    let finalScore = (parseFloat(softResult) + parseFloat(langResult) + parseFloat(techResult)).toFixed(2)
    let finalMath = `${finalScore}=${softResult}+${langResult}+${techResult}`

    let [currentCateTab, setCurrentCateTab] = useState(0);

    let [currentLangTab, setCurrentLangTab] = useState(0);
    let [currentTechTab, setCurrentTechTab] = useState(0);

    let [currentSoft, setCurrentSoft] = useState([])
    let [currentLang, setCurrentLang] = useState([])
    let [currentTech, setCurrentTech] = useState([])

    let [note, setNote] = useState("")

    // console.log("softScoreArray: ", softScoreArray)
    // console.log("langScoreArray: ", langScoreArray)
    // console.log("techScoreArray: ", techScoreArray)

    // console.log("softSumString: ", softSumString)
    // console.log("langSumString: ", langSumString)
    // console.log("techSumString: ", techSumString)

    useEffect(() => {
        dispatch({ type: "saga/getAllRelatedQuestion" })
    }, [])
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        const newObj = {
            interviewid: "123",
            round: [
                rightSoft,
                rightLang,
                rightTech
            ],
            note: note
        }
        dispatch({ type: "saga/scoreInterview", payload: JSON.stringify(newObj) })
        navigate("/company/interview/1")
    }
    return (
        leftSoft ?
            <form autoComplete='off' onSubmit={handleSubmit}>
                <Box sx={{ border: "1px solid black", borderRadius: 10 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                        <Box onClick={() => { setCurrentCateTab(0) }}
                            sx={{
                                cursor: "pointer", zIndex: 3, borderRight: "1px solid black", borderBottom: "1px solid black", padding: 2, borderRadius: "40px 0px",
                                backgroundColor: currentCateTab == 0 ? "grey.600" : "white",
                                color: currentCateTab == 0 ? "white" : "black",
                                "&:hover": {
                                    backgroundColor: currentCateTab == 0 ? "grey.600" : "grey.300",
                                }
                            }}>
                            <Typography variant="h5">Soft Skill Questions</Typography>
                        </Box>
                        <Box onClick={() => { setCurrentCateTab(1) }}
                            sx={{
                                cursor: "pointer", zIndex: 2, position: "relative", left: "-40px", borderRight: "1px solid black", borderBottom: "1px solid black", padding: 2, borderRadius: "40px 0px",
                                backgroundColor: currentCateTab == 1 ? "grey.600" : "white",
                                color: currentCateTab == 1 ? "white" : "black",
                                "&:hover": {
                                    backgroundColor: currentCateTab == 1 ? "grey.600" : "grey.300",
                                }
                            }}>
                            <Typography sx={{ paddingLeft: "40px" }} variant="h5">Language Questions</Typography>
                        </Box>
                        <Box onClick={() => { setCurrentCateTab(2) }}
                            sx={{
                                cursor: "pointer", zIndex: 1, position: "relative", left: "-80px", borderRight: "1px solid black", borderBottom: "1px solid black", padding: 2, borderRadius: "40px 0px",
                                backgroundColor: currentCateTab == 2 ? "grey.600" : "white",
                                color: currentCateTab == 2 ? "white" : "black",
                                "&:hover": {
                                    backgroundColor: currentCateTab == 2 ? "grey.600" : "grey.300",
                                }
                            }}>
                            <Typography sx={{ paddingLeft: "40px" }} variant="h5">Technical Questions</Typography>
                        </Box>
                    </Box>
                    {/* Soft Skill Questions */}
                    {currentCateTab == 0
                        ? <Grid container sx={{ padding: 4 }}>
                            <Grid item md={5}>
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
                            </Grid>
                            <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Button
                                    sx={{ my: 0.5 }}
                                    variant="contained"
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
                                    variant="contained"
                                    size="small"
                                    color="error"
                                >
                                    &lt;
                                </Button>
                            </Grid>
                            <Grid item md={5}>
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
                            </Grid>
                        </Grid>
                        : null}
                    {/* Language Skill */}
                    {currentCateTab == 1
                        ? <Grid container sx={{ padding: 4 }}>
                            <Grid item md={5}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={0} onChange={(event, newTab) => { }}>
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
                            </Grid>
                            <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Button
                                    sx={{ my: 0.5 }}
                                    variant="contained"
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
                                    variant="contained"
                                    color="error"
                                    size="small"
                                >
                                    &lt;
                                </Button>
                            </Grid>
                            <Grid item md={5}>
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
                            </Grid>
                        </Grid>
                        : null}
                    {/* Technical Questions */}
                    {currentCateTab == 2
                        ? <Grid container sx={{ padding: 4 }}>
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
                            </Grid>
                            <Grid item md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Button
                                    sx={{ my: 0.5 }}
                                    variant="contained"
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
                                    variant="contained"
                                    size="small"
                                    color="error"
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
                            </Grid>
                        </Grid>
                        : null}
                </Box>
                {/* Note and mark */}
                <Grid container sx={{ marginTop: 5 }} columnSpacing={7}>
                    <Grid item md={6}>
                        <TextField
                            label="Note"
                            placeholder="Note"
                            multiline
                            fullWidth
                            variant="outlined"
                            value={note}
                            onChange={event => setNote(event.target.value)}
                            rows={11}
                            sx={{
                                "&": {
                                    height: "100%"
                                },
                                "& .MuiInputBase-root": {
                                    height: "100%",
                                    borderRadius: 5,
                                    border: "1px solid black"
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
                                <Grid container rowSpacing={4}>
                                    <Grid item md={4}>
                                        <Typography variant="body1">Soft Skill: </Typography>
                                    </Grid>
                                    <Grid item md={8}>
                                        <InlineMath
                                            math={softMath}
                                        />
                                    </Grid>
                                    <Grid item md={4}>
                                        <Typography variant="body1">Language Skill: </Typography>
                                    </Grid>
                                    <Grid item md={8}>
                                        <InlineMath
                                            math={langMath}
                                        />
                                    </Grid>
                                    <Grid item md={4}>
                                        <Typography variant="body1">Technical Skill: </Typography>
                                    </Grid>
                                    <Grid item md={8}>
                                        <InlineMath
                                            math={techMath}
                                        />
                                    </Grid>
                                    <Grid item md={4}>
                                        <Typography variant="body1">Final Score: </Typography>
                                    </Grid>
                                    <Grid item md={8}>
                                        <InlineMath
                                            math={finalMath}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                    <Button variant="contained" type="submit">Save record</Button>
                </Box>
            </form >
            : null
    );
}