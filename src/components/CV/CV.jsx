import { Code, EmojiEmotions, EmojiEvents, IntegrationInstructions, Person, School } from "@mui/icons-material"
import { Box, Divider, Grid } from "@mui/material"
import { useEffect } from "react"

const user = {
    userid:'Nguyễn Văn A',
    email:'0123456789@gmail.com',
    phone: '0123456789',
    address:'Phường Linh Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',
    image:'https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg'
}
const infoCV = {
    cvid:0,
    cvpdf:'',
    toeic:500,
    education:'Đại học',
    experience: `I have gained valuable experience in React.js, HTML, and
    CSS. React.js has allowed me to build dynamic user
    interfaces and manage state efficiently. HTML provides the
    structure of web content, while CSS enables me to style and
    customize layouts. By combining these technologies, I create
    modern and engaging web experiences.`,
    certificates:[
        {
            certificateid:0,
            name:'HTML CSS',
            decription:'HTML CSS',
            Orgranizationname:'HTML CSS',
            dateearned:'12-12-2022',
            expirationdate:'12-12-2023',
            link:'abc.com'
        }
    ],
    skills:[
        {
            cvskillid:0,
            skillname:'HTML CSS',
            decription:'HTML CSS'
        },
        {
            cvskillid:1,
            skillname:'ReactJS',
            decription:'ReactJS'
        },
        {
            cvskillid:2,
            skillname:'JavaScript',
            decription:'JavaScript'
        },
        {
            cvskillid:3,
            skillname:'Python',
            decription:'Python'
        },
    ]
}
const CV = (props) => {
    const { cvid } = props
    useEffect(() => {
        // goi api lấy thông tin CV của cvid về
    }, [])
    return (
        <Box sx={{padding:'16px 0 16px 0'}} >
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bottom: "25px",
        }}
      >
        <Box
          component="img"
          sx={{
            borderRadius: "50%",
            border: "1px solid #ccc",
            width: "100px",
            height: "100px",
          }}
          src={user.image}
          alt=""
        />
        <Box component='h1' sx={{ margin: "24px 0px 0px  24px" }}>Nguyễn Văn A</Box>
      </Box>
            <Grid container spacing={2} sx={{mt:'10px'}}>
                <Grid item lg={8} md={12}>
                <Box>
                    <Box sx={{display:'flex',alignItems:'flex-end'}}>
                        <Person sx={{mr:'15px'}}/> 
                        <Box component='h2' sx={{position:'relative', top:'5.5px',m:0}}>
                         Profile
                        </Box>
                    </Box>
                    <Box sx={{padding:'10px 0 0 40px'}}>
                    {infoCV.experience}
                    </Box>
                    
                </Box>
                <Divider sx={{backgroundColor:'black',mt:'16px'}} />
                <Box>
                    <Box sx={{display:'flex',alignItems:'flex-end'}}>
                        <IntegrationInstructions sx={{mr:'15px'}}/>
                        <Box component='h2' sx={{position:'relative', top:'6.5px',m:0}}>
                         Skils
                        </Box>
                    </Box>
                    <Box sx={{padding:'10px 0 0 40px'}}>
                    {infoCV.skills.map((skill,index) => (
                        <Box key={index}>&bull; {skill.skillname}</Box>
                    ))}
                     
                    </Box>
                    
                </Box>
                <Divider sx={{backgroundColor:'black',mt:'16px'}} />
                <Box>
                    <Box sx={{display:'flex',alignItems:'flex-end'}}>
                    <EmojiEvents sx={{mr:'15px'}}/>
                        <Box component='h2' sx={{position:'relative', top:'6.5px',m:0}}>
                         Certificates
                        </Box>
                    </Box>
                    <Box sx={{padding:'10px 0 0 40px'}}>
                    {infoCV.certificates.map((certificate,index) => (
                        <Box key={index}>
                            &bull; {certificate.name}
                            <Box sx={{ml:'50px'}}> 
                             EarnedDate: {certificate.dateearned} , ExpDate: {certificate.expirationdate}
                            </Box>
                        </Box>
                        
                       
                    ))}
                     
                    </Box>
                    
                </Box>
                <Divider sx={{backgroundColor:'black',mt:'16px' }} />
                <Box>
                    <Box sx={{display:'flex',alignItems:'flex-end'}}>
                        <School sx={{mr:'15px'}}/>
                        <Box component='h2' sx={{position:'relative', top:'5.5px',m:0}}>
                         Education
                        </Box>
                    </Box>
                    <Box sx={{padding:'10px 0 0 40px'}}>
                    {infoCV.education}
                    </Box>
                    
                </Box>
                </Grid>
                <Grid item lg={4} md={12}>
                <Divider sx={{backgroundColor:'black' , display:{lg:'none'}}} />
                <Box component='h2' sx={{position:'relative', top:'5.5px',m:0}}>
                    Details
                </Box>
                <Box sx={{padding:'10px 0 0 0'}}>
                        <Box>
                            {user.address}
                        </Box>
                        <Box>
                            {user.phone}
                        </Box>
                        <Box>
                           <a>{user.email}</a> 
                        </Box>
                </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CV