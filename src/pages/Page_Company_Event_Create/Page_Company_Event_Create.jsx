// import libraries
import { useState } from 'react'


// import MUI components
import { Box, Container, Grid, Input, TextField, Typography } from '@mui/material'
import React from 'react'
import './Page_Company_Event_Create.scss'
import { Button } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TaskAltIcon from '@mui/icons-material/TaskAlt';



const Page_Company_Event_Create = () => {

    // useState
    const [name, setName] = useState(null);
    const [content, setContent] = useState(null);
    const [maxQuantity, setMaxQuantity] = useState(null);
    const [time, setTime] = useState(null);
    const [location, setLocation] = useState(null);
    const [image, setImage] = useState(null);
    // const [fileSelected, setFileSelected] = useState(false);


    // handle events
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e.target.value);
    }

    const handleMaxQuantity = (e) => {
        setMaxQuantity(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.value);
    }
    // const handleFileChange = (event) => {
    //     if (event.target.files.length > 0) {
    //       setFileSelected(true);
    //       setImage(event.target.value);
    //     }
    //   };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(content);
        console.log(maxQuantity);
        console.log(time);
        console.log(location);
        console.log(image);
    }

    
    // const [fileName, setFileName] = useState(null)
    // const handlechange = (event) => {
    //     setFileName(event.target.files[0])
    // }
    // console.log(fileName)


    return (
        <form onSubmit={handleSubmit}>
            <Container sx={{ p: 1 }} className='eventcreate' >
                <Typography variant='h4' align='center' sx={{ fontWeight: 600, color: 'cornflowerblue' }}>Tạo sự kiện</Typography>
                <Container style={{ border: '2px solid black', background: 'white', margin: 14 }}>
                    <Grid container spacing={2.5} sx={{
                        p: 1,
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Grid item md={3} sm={4} xs={5}>
                            <Typography variant='span' className='header'>Tên sự kiện</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={7}>
                            <TextField required fullWidth placeholder='Nhập tên sự kiện' onChange={handleName}></TextField>
                        </Grid>
                        <Grid item md={3} sm={4} xs={5}>
                            <Typography variant='span' className='header'>Nội dung</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={7}>
                            <TextField required fullWidth multiline rows={3} placeholder="Nhập nội dung" onChange={handleContent} />
                        </Grid>
                        <Grid item md={3} sm={4} xs={5}>
                            <Typography variant='span' className='header'>Số lượng tham gia tối đa</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={7}>
                            <TextField type='number' required inputProps={{ min: '0' }} fullWidth placeholder='Nhập số lượng' onChange={handleMaxQuantity}></TextField>
                        </Grid>
                        <Grid item md={3} sm={4} xs={5}>
                            <Typography variant='span' className='header'>Hình ảnh</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={7}>
                            {/* <Button variant='outlined' size='medium' className='btnfile'>
                                <label htmlFor="customFile" className='choice'>Chọn tệp</label>
                            </Button> */}
                            {/* <input type="file" classname="form-control" id="customFile" style={{display: 'none'}} /> */}
                            {/* <input type="file" classname="form-control" id="customFile" onChange={handlechange}/> */}
                            {/* <Input type='file' onChange={handleFileChange} disabled={fileSelected}></Input> */}
                            <Input type='file' onChange={handleImage}></Input>
                        </Grid>
                        <Grid item md={3} sm={4} xs={5}>
                            <Typography variant='span' className='header'>Thời gian</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={7}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker value={time} onChange={(newValue) => {
                                        let newDate = new Date(newValue.$d)
                                        const year = newDate.toLocaleString('default', { year: 'numeric' });
                                        const month = newDate.toLocaleString('default', { month: '2-digit' });
                                        const day = newDate.toLocaleString('default', { day: '2-digit' });
                                        newDate = year + "-" + month + "-" + day
                                        setTime(newDate)
                                    }} format='DD-MM-YYYY' slotProps={{ textField: { required: true } }} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item md={3} sm={4} xs={5}>
                            <Typography variant='span' className='header'>Địa điểm</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={7}>
                            <TextField required fullWidth placeholder='Nhập địa điểm' onChange={handleLocation}></TextField>
                        </Grid>
                        <Grid item xs={12} align='right'>
                            <Button type="submit" variant="contained" size='large'>
                                <TaskAltIcon sx={{ marginRight: 1 }}></TaskAltIcon>
                                Lưu
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Container >
        </form>
    )
}

export default Page_Company_Event_Create