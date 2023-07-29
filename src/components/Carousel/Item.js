import { Paper, Button } from '@mui/material/'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
const  Item = (item) => {
    const navigate = useNavigate()
    const click = (id) => {
            navigate(`/${id}`)
    }
    return (
        <Paper>
            { item.item.navigate !=='about' ?
            <Box  >
                <img
                    src={item.item.image}
                    alt={item.item.title}
                    width='100%;' /* Kích thước tối đa của Carousel */
                    height='600px'
                    onClick={() => click(item.item.navigate)}
                    style={{cursor:'pointer'}}
                />
                <Box  onClick={() => click(item.item.navigate)} sx={{ position: "relative", bottom: '150px', display: 'flex', justifyContent: 'center',cursor:'pointer' }}>
                    <Typography
                        
                        color='white'
                        variant='h2'
                       
                        sx={{ fontFamily: 'EB garamond',position: "relative", left:'0px', }}>
                        {item.item.title}
                    </Typography>
                </Box>

            </Box> : 
           <Box >
                 <a href='#about'><img
                src={item.item.image}
                alt={item.item.title}
                    width='100%;' /* Kích thước tối đa của Carousel */
                    height='600px'
                    style={{cursor:'pointer'}}
                />
                </a><a href='#about' style={{textDecoration:'none'}}>
                <Box sx={{ position: "relative", bottom: '150px', display: 'flex', justifyContent: 'center', }}>
                <Typography
                        
                        color='white'
                        variant='h2'
                        sx={{ fontFamily: 'EB garamond',position: "relative", left:'0px',cursor:'pointer' }}>
                        {item.item.title}
                    </Typography>
                </Box></a>

            </Box>}

            <Button className="checkButton">
            </Button>
        </Paper>
    )
}

export default Item