import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import Page_Profile_Id_Cv_Id from '../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv'

   

const style = {border:'1px solid #000',borderRadius:'10px'}
const user = {
	'userid':1,
	'name':'abc',
	'birth':'12-12-2012',
	'address':'abc',
	'sex':'nam',
	'email':'a@a',
	'phone':'0123456789',
	'cvs':[
		{
			'cvid':0,
            'name':'CV1',
			'certificates':[
				{
					'certificateid':1,
					'name':'css',
					'description':'123',
					'organizationname':'123',
					'dateearned':'12-12-2023',
					'expirationdate':'12-12-2026',
					'link':'123.com'
				},
				{
					'certificateid':2,
					'name':'html',
					'description':'123',
					'organizationname':'123',
					'dateearned':'12-12-2023',
					'expirationdate':'12-12-2026',
					'link':'123.com'
				},		
			],
			'skills':[
				{
					'skillid':1,
					'skillname':'CSS',
					'decription':'CSS css'
				},
				{
					'skillid':1,
					'skillname':'CSS',
					'decription':'CSS css'
				},
				{
					'skillid':1,
					'skillname':'CSS',
					'decription':'CSS css'
				}
			],
			'cvpdf':'123123.pdf'
        },
        {
			'cvid':1,
            'name':'CV2',
			'certificates':[
				{
					'certificateid':1,
					'name':'css',
					'description':'123',
					'organizationname':'123',
					'dateearned':'12/12/2023',
					'expirationdate':'12/12/2026',
					'link':'123.com'
				},
				{
					'certificateid':2,
					'name':'html',
					'description':'123',
					'organizationname':'123',
					'dateearned':'12/12/2023',
					'expirationdate':'12/12/2026',
					'link':'123.com'
				},		
			],
			'skills':[
				{
					'skillid':1,
					'skillname':'CSS',
					'decription':'CSS css'
				},
				{
					'skillid':1,
					'skillname':'CSS',
					'decription':'CSS css'
				},
				{
					'skillid':1,
					'skillname':'CSS',
					'decription':'CSS css'
				},
                {
					'skillid':1,
					'skillname':'CSS ss',
					'decription':'CSS css'
				}
			],
			'cvpdf':'123123.pdf'
        }
	]
}
const Page_Recruitment_Id_Application_Id = () => {
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
                <div style={{...style}}>
                    <Typography variant='h5' align='center'>Cv detail</Typography> 
                    <Container>
                    <Page_Profile_Id_Cv_Id cvlist={user.cvs}/>
                    </Container>
                    
                </div>
            </Grid>
            <Grid xs={12} sx={{display:'flex',justifyContent:'space-between',padding:'15px'}}>
                <Typography variant='h5' >Date: 30/06/2023 </Typography>
                <em>Status</em>
            </Grid>
        </Grid>
        
    </Container>
  )
}

export default Page_Recruitment_Id_Application_Id
