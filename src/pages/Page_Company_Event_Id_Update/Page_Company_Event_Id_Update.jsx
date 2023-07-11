import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import './Page_Company_Event_Id_Update.scss'
import { Button } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';

const Page_Company_Event_Id_Update = () => {
    const [value, setValue] = React.useState(null);
    return (
        <Container sx={{ p: 1 }} className='eventupdate' >
            <Typography variant='h4' align='center'>Chỉnh sửa sự kiện</Typography>
            <form>
                <Container style={{ border: '2px solid black', background: 'white', margin: 30 }}>
                    <Grid container spacing={3} sx={{
                        p: 1.2,
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Tên sự kiện</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField fullWidth placeholder='Nhập tên sự kiện'></TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Nội dung</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField fullWidth multiline rows={3} maxRows={5} placeholder="Nhập nội dung" />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Số lượng tham gia tối đa</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField fullWidth placeholder='Nhập số lượng'></TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Thời gian</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Địa điểm</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField fullWidth placeholder='Nhập địa điểm'></TextField>
                        </Grid>
                        <Grid item xs={12} align='right'>
                            <Button variant="contained" size='large' color="success" sx={{ mx: 2 }}>
                                <EditIcon></EditIcon>
                                Chỉnh sửa
                            </Button>
                            <Button variant="contained" size='large'>
                                <TaskAltIcon></TaskAltIcon>
                                Lưu
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </form>
        </Container >
    )
}

export default Page_Company_Event_Id_Update