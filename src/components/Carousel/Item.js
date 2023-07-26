import { Paper, Button } from '@mui/material/'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
function Item(item) {
    return (
        <Paper>

            <Box>
                <img
                    src={item.item.image}
                    alt={item.item.title}
                    width='100%;' /* Kích thước tối đa của Carousel */
                    height='600px'
                />
                <Box sx={{ position: "relative", bottom: '150px', display: 'flex', justifyContent: 'center', }}>
                    <Typography
                        
                        color='white'
                        variant='h2'
                        sx={{ fontFamily: 'EB garamond',position: "relative", left:'0px' }}>
                        {item.item.title}
                    </Typography>
                </Box>

            </Box>

            <Button className="checkButton">
            </Button>
        </Paper>
    )
}

export default Item