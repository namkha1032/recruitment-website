// import libraries
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// import MUI components
import { Container, Grid, Input, TextField, Typography } from '@mui/material'
import React from 'react'
import './Page_Company_Event_Create.scss'
import { Button } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box } from '@mui/system'
import GigaCard from '../../components/GigaCard/GigaCard'
import ReactQuill from 'react-quill'
// import GigaCardHeader from '../../components/GigaCardHeader/GigaCardHeader'
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { useDispatch, useSelector } from 'react-redux'
import { LoadingButton } from '@mui/lab'
import useGetRole from '../../hooks/useGetRole'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const Page_Company_Event_Create = () => {

    // useNavigate
    const navigate = useNavigate()

    const dispatch = useDispatch();


    const role = useGetRole()

    const user = useSelector(state => state.user)
    const userId = user ? user.userid : ""
    useEffect(() => {
        if (role === "recruiter") {
            dispatch({
                type: "eventSaga/getRecruiterIdCreateEvent",
                payload: {
                    userId: userId,
                    token: user.token
                }
            })
        }
    }, [role])
    const recruiterId = useSelector(state => state.recruiterIdCreateEvent)
    // console.log("DebugC: ", recruiterId)


    // useState
    const [name, setName] = useState(null);
    const [maxQuantity, setMaxQuantity] = useState(null);
    const [location, setLocation] = useState(null);

    const [content, setContent] = useState(null);
    const [time, setTime] = useState(null);

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
    // const [fileSelected, setFileSelected] = useState(false);


    // handle events
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleMaxQuantity = (e) => {
        setMaxQuantity(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    // const handleContent = (e) => {
    //     setContent(e.target.value);
    // }
    const contentRef = useRef()
    useEffect(() => {
        if (contentRef.current) {
            // console.log("contentRef", contentRef)
            contentRef.current.innerHTML = content
        }
    })

    const eventStatus = useSelector((state) => state.eventNavigate)


    // const handleImage = (e) => {
    //     setImage(e.target.value);
    // }

    // const handleFileChange = (event) => {
    //     if (event.target.files.length > 0) {
    //       setFileSelected(true);
    //       setImage(event.target.value);
    //     }
    //   };


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // console.log(maxQuantity);
        // console.log(location);

        // console.log(content);
        // console.log(time);

        // console.log(image);

        // ---------------------------------------
        const output = new Date(time.$d)
        const re = output.toJSON()
        // console.log("JSONformat: ", re)
        // console.log(typeof (re))
        // ---------------------------------------

        dispatch({
            type: "eventSaga/postEvent",
            payload: {
                eventName: name,
                recruiterId: recruiterId,
                description: content,
                // quantity: 50,
                maxParticipants: maxQuantity,
                datetimeEvent: re,
                place: location,
                // createdTime: "10:30 16/07/2023"
                token: user.token
            }
        });
    }

    // const [fileName, setFileName] = useState(null)
    // const handlechange = (event) => {
    //     setFileName(event.target.files[0])
    // }
    // console.log(fileName)

    useEffect(() => {
        if (eventStatus.status === "success") {
            navigate(`/company/event/${eventStatus.message}`);
            // console.log("===== OK =====")
            dispatch({ type: "eventNavigate/onReset" })
        }
    }, [eventStatus])


    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.down('md'));


    return (
        (eventStatus.status === 'idle' || eventStatus.status === 'loading') && <form onSubmit={handleSubmit}>
            <GigaCard>
                <Container sx={{ marginTop: 6 }} className='eventcreate' >
                    {isMd && (
                        <>
                            <Box sx={{
                                fontSize: 50,
                                fontWeight: 600,
                                // color: '#1565C0',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginBottom: 5
                            }}>
                                Create Event
                            </Box>

                            <Grid container rowSpacing={6} sx={{ marginBottom: 10 }}>

                                <Grid
                                    item
                                    xs={12}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="flex-start"
                                >
                                    <TextField
                                        id="eventname"
                                        label="Event Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={handleName}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                    </TextField>
                                </Grid>

                                {/* <Grid
                                item
                                xs={12}
                                display="flex"
                                alignItems="center"
                                justifyContent="flex-start"
                            >
                                <TextField
                                    id="maximumnumber"
                                    label="Maximum number of participants"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    type='number'
                                    inputProps={{ min: '0' }}
                                    onChange={handleMaxQuantity}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <GroupAddRoundedIcon></GroupAddRoundedIcon>
                                            </InputAdornment>
                                        ),
                                    }}
                                >
                                </TextField>
                            </Grid> */}

                                <Grid container sx={{ marginTop: 5 }}>
                                    <Grid item xs={6} sx={{ paddingRight: 2 }}>
                                        {/* <Grid container rowSpacing={4.5}> */}
                                        <Grid container rowSpacing={6}>
                                            <Grid
                                                item
                                                xs={12}
                                            >
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DateTimePicker']}>
                                                        {/* <DatePicker 
                                            value={time} 
                                            onChange={(newValue) => {
                                                let newDate = new Date(newValue.$d)
                                                const year = newDate.toLocaleString('default', { year: 'numeric' });
                                                const month = newDate.toLocaleString('default', { month: '2-digit' });
                                                const day = newDate.toLocaleString('default', { day: '2-digit' });
                                                newDate = year + "-" + month + "-" + day
                                                setTime(newDate)
                                            }} 
                                            format='DD-MM-YYYY' 
                                            slotProps={{ textField: { required: true } }} 
                                        /> */}
                                                        <DateTimePicker
                                                            label="Time"
                                                            sx={{ width: "100%" }}
                                                            slotProps={{ textField: { required: true } }}
                                                            value={time}
                                                            onChange={(newValue) => {
                                                                // console.log("main: ", newValue)
                                                                // console.log("sub: ", newValue.$d)
                                                                // Step 1: const newDate = new Date(newValue.$d)
                                                                // console.log("newDate: ", newDate)
                                                                // console.log("type: ", typeof (newValue.$d.toLocaleTimeString()))
                                                                // Step 2: console.log("DateTime created: ", newDate.toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }))
                                                                setTime(newValue)
                                                            }}
                                                            // format='HH:mm:ss DD/MM/YYYY'
                                                            // format='DD/MM/YYYY HH:mm'
                                                            format='HH:mm DD/MM/YYYY'
                                                        />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </Grid>

                                            {/* ------------------------- Maximum number of participants ------------------------- */}
                                            <Grid
                                                item
                                                xs={12}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="flex-start"
                                            >
                                                <TextField
                                                    id="maximumnumber"
                                                    label="Maximum number of participants"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    type='number'
                                                    inputProps={{ min: '0' }}
                                                    onChange={handleMaxQuantity}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <GroupAddRoundedIcon></GroupAddRoundedIcon>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                >
                                                </TextField>
                                            </Grid>
                                            {/* --------------------------------------------------------------------------- */}

                                            <Grid
                                                item
                                                xs={12}
                                            >
                                                <TextField
                                                    id="location"
                                                    label="Location"
                                                    variant="outlined"
                                                    fullWidth
                                                    required
                                                    multiline
                                                    rows={3}
                                                    onChange={handleLocation}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment sx={{
                                                                display: 'flex',
                                                                alignItems: 'flex-end',
                                                            }}>
                                                                <Box>
                                                                    <LocationOnRoundedIcon></LocationOnRoundedIcon>
                                                                </Box>
                                                            </InputAdornment>
                                                        ),
                                                        inputProps: {
                                                            style: { marginTop: 10, marginLeft: 5 },
                                                        }
                                                    }}
                                                >
                                                </TextField>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={6}
                                        sx={{
                                            paddingLeft: 2,
                                            // display: 'flex',
                                            // justifyContent: 'center',
                                            // alignItems: 'center'
                                            // marginTop: 1.25
                                            marginTop: 1.1
                                        }}
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                        >
                                            {/* <Box>
                                            <Box sx={{ color: 'black', display: "flex", alignItems: "center", columnGap: 1 }}>
                                                <Box sx={{ fontSize: 40, display: "flex", alignItems: "center" }}>
                                                    <EditNoteRoundedIcon fontSize='large'></EditNoteRoundedIcon>
                                                </Box>
                                                <Box sx={{
                                                    fontSize: 25,
                                                    fontWeight: 600,
                                                    // color: '#1565C0',
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                }}>
                                                    Event Content
                                                </Box>
                                            </Box>
                                        </Box> */}
                                            <ReactQuill
                                                theme='snow'
                                                placeholder='Typing Event Content here...'
                                                value={content}
                                                onChange={setContent}
                                                style={{ height: '320px' }}
                                            >
                                            </ReactQuill>
                                        </Grid>
                                    </Grid>

                                    <div style={{
                                        border: '2px dashed #00838f',
                                        // border: '2px dashed #1565C0',
                                        borderRadius: '5px',
                                        width: '100%',
                                        marginTop: '60px',
                                        cursor: 'pointer'
                                    }}
                                        onClick={() => document.querySelector(".input-field").click()}
                                    >
                                        <input
                                            type="file"
                                            accept='image/*'
                                            className='input-field'
                                            hidden
                                            onChange={({ target: { files } }) => {
                                                // files[0] && setFileName(files[0].name)
                                                // if (files) {
                                                //     setImage(URL.createObjectURL(files[0]))
                                                // }
                                                if (files && files[0]) {
                                                    setFileName(files[0].name);
                                                    // Check browser support for URL.createObjectURL
                                                    if (typeof URL !== "undefined" && URL.createObjectURL) {
                                                        try {
                                                            setImage(URL.createObjectURL(files[0]));
                                                        } catch (error) {
                                                            console.error("Error creating object URL:", error);
                                                        }
                                                    } else {
                                                        console.error("URL.createObjectURL is not supported in this browser.");
                                                    }
                                                }
                                            }}
                                        />
                                        {image ?
                                            <img
                                                src={image}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}>
                                            </img> :
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingTop: 20
                                            }}
                                            >
                                                <CloudUploadRoundedIcon
                                                    fontSize='large'
                                                    sx={{
                                                        color: '#00838f'
                                                        // color: '#1565C0'
                                                    }}
                                                >
                                                </CloudUploadRoundedIcon>
                                                <p>Browse Photos to upload</p>
                                            </div>
                                        }
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: '10px'
                                    }}>
                                        {/* <InsertPhotoRoundedIcon fontSize='medium'></InsertPhotoRoundedIcon> */}
                                        <span>
                                            {fileName}
                                        </span>
                                        <DeleteRoundedIcon
                                            sx={{
                                                cursor: 'pointer',
                                                // marginLeft: 5
                                                color: '#ff1744'
                                            }}
                                            onClick={() => {
                                                setFileName("No selected file")
                                                setImage(null)
                                            }}></DeleteRoundedIcon>
                                    </div>
                                    <Grid item xs={12} align='right' sx={{ marginTop: 6 }}>
                                        {eventStatus.status !== "loading" && eventStatus.status !== "success" ?
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size='large'
                                                sx={{
                                                    backgroundColor: "black",
                                                    "&:hover": {
                                                        backgroundColor: "grey",
                                                    }
                                                }}>
                                                <TaskAltIcon sx={{ marginRight: 1 }}></TaskAltIcon>
                                                Save
                                            </Button>
                                            : <LoadingButton
                                                loading
                                                loadingPosition='center'>
                                            </LoadingButton>}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                    )}

                    {isSm && (
                        <>
                            <Box sx={{
                                fontSize: 30,
                                fontWeight: 600,
                                // color: '#1565C0',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginBottom: 5
                            }}>
                                Create Event
                            </Box>

                            <Grid container rowSpacing={6} sx={{ marginBottom: 10 }}>

                                <Grid
                                    item
                                    xs={12}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="flex-start"
                                >
                                    <TextField
                                        id="eventname"
                                        label="Event Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={handleName}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                    </TextField>
                                </Grid>

                                {/* <Grid
                            item
                            xs={12}
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                        >
                            <TextField
                                id="maximumnumber"
                                label="Maximum number of participants"
                                variant="outlined"
                                fullWidth
                                required
                                type='number'
                                inputProps={{ min: '0' }}
                                onChange={handleMaxQuantity}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <GroupAddRoundedIcon></GroupAddRoundedIcon>
                                        </InputAdornment>
                                    ),
                                }}
                            >
                            </TextField>
                        </Grid> */}

                                {/* <Grid container sx={{ marginTop: 5 }}> */}
                                <Grid
                                    // item xs={6}
                                    // sx={{ paddingRight: 2 }}
                                    item xs={12}
                                    sx={{ paddingRight: 0 }}
                                >
                                    {/* <Grid container rowSpacing={4.5}> */}
                                    <Grid container rowSpacing={6}>
                                        <Grid
                                            item
                                            xs={12}
                                        >
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DateTimePicker']}>
                                                    {/* <DatePicker 
                                        value={time} 
                                        onChange={(newValue) => {
                                            let newDate = new Date(newValue.$d)
                                            const year = newDate.toLocaleString('default', { year: 'numeric' });
                                            const month = newDate.toLocaleString('default', { month: '2-digit' });
                                            const day = newDate.toLocaleString('default', { day: '2-digit' });
                                            newDate = year + "-" + month + "-" + day
                                            setTime(newDate)
                                        }} 
                                        format='DD-MM-YYYY' 
                                        slotProps={{ textField: { required: true } }} 
                                    /> */}
                                                    <DateTimePicker
                                                        label="Time"
                                                        sx={{ width: "100%" }}
                                                        slotProps={{ textField: { required: true } }}
                                                        value={time}
                                                        onChange={(newValue) => {
                                                            // console.log("main: ", newValue)
                                                            // console.log("sub: ", newValue.$d)
                                                            // Step 1: const newDate = new Date(newValue.$d)
                                                            // console.log("newDate: ", newDate)
                                                            // console.log("type: ", typeof (newValue.$d.toLocaleTimeString()))
                                                            // Step 2: console.log("DateTime created: ", newDate.toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }))
                                                            setTime(newValue)
                                                        }}
                                                        // format='HH:mm:ss DD/MM/YYYY'
                                                        // format='DD/MM/YYYY HH:mm'
                                                        format='HH:mm DD/MM/YYYY'
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </Grid>

                                        {/* ------------------------- Maximum number of participants ------------------------- */}
                                        <Grid
                                            item
                                            xs={12}
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="flex-start"
                                        >
                                            <TextField
                                                id="maximumnumber"
                                                label="Maximum number of participants"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                type='number'
                                                inputProps={{ min: '0' }}
                                                onChange={handleMaxQuantity}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <GroupAddRoundedIcon></GroupAddRoundedIcon>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            >
                                            </TextField>
                                        </Grid>
                                        {/* --------------------------------------------------------------------------- */}

                                        <Grid
                                            item
                                            xs={12}
                                        >
                                            <TextField
                                                id="location"
                                                label="Location"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                multiline
                                                rows={3}
                                                onChange={handleLocation}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment sx={{
                                                            display: 'flex',
                                                            alignItems: 'flex-end',
                                                        }}>
                                                            <Box>
                                                                <LocationOnRoundedIcon></LocationOnRoundedIcon>
                                                            </Box>
                                                        </InputAdornment>
                                                    ),
                                                    inputProps: {
                                                        style: { marginTop: 10, marginLeft: 5 },
                                                    }
                                                }}
                                            >
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                // xs={6}
                                // sx={{
                                //     paddingLeft: 2,
                                //     // display: 'flex',
                                //     // justifyContent: 'center',
                                //     // alignItems: 'center'
                                //     // marginTop: 1.25
                                //     marginTop: 1.1
                                // }}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        {/* <Box>
                                        <Box sx={{ color: 'black', display: "flex", alignItems: "center", columnGap: 1 }}>
                                            <Box sx={{ fontSize: 40, display: "flex", alignItems: "center" }}>
                                                <EditNoteRoundedIcon fontSize='large'></EditNoteRoundedIcon>
                                            </Box>
                                            <Box sx={{
                                                fontSize: 25,
                                                fontWeight: 600,
                                                // color: '#1565C0',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}>
                                                Event Content
                                            </Box>
                                        </Box>
                                    </Box> */}
                                        <ReactQuill
                                            theme='snow'
                                            placeholder='Typing Event Content here...'
                                            value={content}
                                            onChange={setContent}
                                            style={{ height: '320px' }}
                                        >
                                        </ReactQuill>
                                    </Grid>
                                </Grid>

                                <div style={{
                                    border: '2px dashed #00838f',
                                    // border: '2px dashed #1565C0',
                                    borderRadius: '5px',
                                    width: '100%',
                                    marginTop: '60px',
                                    cursor: 'pointer'
                                }}
                                    onClick={() => document.querySelector(".input-field").click()}
                                >
                                    <input
                                        type="file"
                                        accept='image/*'
                                        className='input-field'
                                        hidden
                                        onChange={({ target: { files } }) => {
                                            // files[0] && setFileName(files[0].name)
                                            // if (files) {
                                            //     setImage(URL.createObjectURL(files[0]))
                                            // }
                                            if (files && files[0]) {
                                                setFileName(files[0].name);
                                                // Check browser support for URL.createObjectURL
                                                if (typeof URL !== "undefined" && URL.createObjectURL) {
                                                    try {
                                                        setImage(URL.createObjectURL(files[0]));
                                                    } catch (error) {
                                                        console.error("Error creating object URL:", error);
                                                    }
                                                } else {
                                                    console.error("URL.createObjectURL is not supported in this browser.");
                                                }
                                            }
                                        }}
                                    />
                                    {image ?
                                        <img
                                            src={image}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}>
                                        </img> :
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingTop: 20
                                        }}
                                        >
                                            <CloudUploadRoundedIcon
                                                fontSize='large'
                                                sx={{
                                                    color: '#00838f'
                                                    // color: '#1565C0'
                                                }}
                                            >
                                            </CloudUploadRoundedIcon>
                                            <p>Browse Photos to upload</p>
                                        </div>
                                    }
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: '10px'
                                }}>
                                    {/* <InsertPhotoRoundedIcon fontSize='medium'></InsertPhotoRoundedIcon> */}
                                    <span>
                                        {fileName}
                                    </span>
                                    <DeleteRoundedIcon
                                        sx={{
                                            cursor: 'pointer',
                                            // marginLeft: 5
                                            color: '#ff1744'
                                        }}
                                        onClick={() => {
                                            setFileName("No selected file")
                                            setImage(null)
                                        }}></DeleteRoundedIcon>
                                </div>
                                <Grid item xs={12} align='right' sx={{ marginTop: 6 }}>
                                    {eventStatus.status !== "loading" && eventStatus.status !== "success" ?
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size='large'
                                            sx={{
                                                backgroundColor: "black",
                                                "&:hover": {
                                                    backgroundColor: "grey",
                                                }
                                            }}>
                                            <TaskAltIcon sx={{ marginRight: 1 }}></TaskAltIcon>
                                            Save
                                        </Button>
                                        : <LoadingButton
                                            loading
                                            loadingPosition='center'>
                                        </LoadingButton>}
                                </Grid>
                                {/* </Grid> */}
                            </Grid>
                        </>
                    )}
                </Container>
            </GigaCard>
        </form>
    )
}

export default Page_Company_Event_Create