import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import Page_Profile_Id_Cv_Id from '../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv'
import { Link } from 'react-router-dom'
const CvList = [
    {
        id:0,
        name:'CV1',
        skill:[
            'ReactJS',
            'Java',
            'Python',
            'C/C++'
        ],
        certificate:[
            'Certificate ReactJS',
            'Certificate Java',
            'Certificate Python',
            'Certificate C/C++'
        ]
    },
    {
        id:1,
        name:'CV2',
        skill:[
            'HTML CSS',
            'Angular',
            'C#',
            'C/C++'
        ],
        certificate:[
            'Certificate HTML CSS',
            'Certificate Angular',
            'Certificate C#',
            'Certificate C/C++'
        ]
    }
]
const style = {border:'1px solid #000',borderRadius:'10px'}
const  Page_Company_Recruitment_Id_Application_Id= () => {
  return (
    <Container>
    <Typography variant='h3' align='center'>Detail of the Application</Typography>
    <Grid container sx={{marginTop: '50px'}}>
        <Grid item xs={4} sx={{display:'flex',flexDirection:'column', justifyContent:'space-between', padding:'15px'}}>
            
                <Box sx={{...style,marginBottom:'15px'}}>
                    <Typography variant='h5' align='center'>Information Of Candidate</Typography>
                    <div style={{marginLeft:'25px', marginTop:'25px'}}>
                        <TextField 
                            size='small'
                            name='Name' 
                            label='Name'   
                            value='hoang'
                            sx={{marginBottom :'15px'}}
                        />
                        <TextField
                            size='small'
                            name='Email' 
                            label='Email'   
                            value='Email'
                            sx={{marginBottom :'15px'}}
                        />
                        <TextField
                            size='small'
                            name='Phone' 
                            label='Phone'   
                            value='Phone'
                            sx={{marginBottom :'15px'}}
                        />
                        <TextField
                            size='small'
                            name='Address' 
                            label='Address'   
                            value='Address'
                            sx={{marginBottom :'15px'}}
                        />
                    </div>
                    
                </Box>
                <Box sx={style}>
                    <Typography variant='h5' align='center'>Information Of Position</Typography>
                    <div style={{marginLeft:'25px', marginTop:'25px'}}>
                        <TextField
                            size='small'
                            name='Name' 
                            label='Name'   
                            value='hoang'
                            sx={{marginBottom :'15px'}}
                        />
                        <TextField
                            size='small'
                            name='Recritment' 
                            label='Recritment'   
                            value='Recritment'
                            sx={{marginBottom :'15px'}}
                        />
                        <TextField
                            size='small'
                            name='Language'
                            label='Language'   
                            value='Language'
                            sx={{marginBottom :'15px'}}
                        />
                    </div>
                </Box>
         
        </Grid>
        <Grid item xs={8} sx={{padding:'15px'}}>
            <div style={{...style,height:'100%'}}>
                <Typography variant='h5' align='center'>Cv detail</Typography> 
                <Container>
                <Page_Profile_Id_Cv_Id cvlist={CvList}/>
                </Container>
                
            </div>
        </Grid>
            <Grid xs={12} sx={{display:'flex',justifyContent:'flex-end',padding:'15px'}}>
               <Link to='/company/interview/create'> <Button variant='contained' sx={{marginRight:'50px'}}>Create Interview </Button></Link> 
                <Button variant='contained'>Reject </Button>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Page_Company_Recruitment_Id_Application_Id