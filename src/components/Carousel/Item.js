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
                    height='500px'
                />
                <Box sx={{ position: "relative", bottom: '95px', display: 'flex', justifyContent: 'center', }}>
                    <Typography
                        color='white'
                        variant='h4'
                        sx={{ fontFamily: 'EB garamond' }}>
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