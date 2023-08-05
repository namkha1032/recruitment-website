import { Paper, Button } from '@mui/material/'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const Item = (item) => {
    const navigate = useNavigate()
    const click = (id) => {
        navigate(`/${id}`)
    }
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    let caroHeight = "0"
    let titleSize = "0"
    let pos = "0"
    caroHeight = isMd ? "600px" : "200px"
    titleSize = isMd ? "h2" : "h4"
    pos = isMd ? "150px" : "80px"
    return (
        <Paper sx={{ height: caroHeight }}>
            {item.item.navigate !== 'about' ?
                <Box  >
                    <img
                        src={item.item.image}
                        alt={item.item.title}
                        width='100%;' /* Kích thước tối đa của Carousel */
                        height={caroHeight}
                        onClick={() => click(item.item.navigate)}
                        style={{ cursor: 'pointer' }}
                    />
                    <Box onClick={() => click(item.item.navigate)} sx={{ position: "relative", bottom: pos, display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                        <Typography

                            color='white'
                            variant={titleSize}

                            sx={{ position: "relative", left: '0px', fontWeight: 'bold' }}>
                            {item.item.title}
                        </Typography>
                    </Box>

                </Box> :
                <Box >
                    <a href='#about'><img
                        src={item.item.image}
                        alt={item.item.title}
                        width='100%;' /* Kích thước tối đa của Carousel */
                        height={caroHeight}
                        style={{ cursor: 'pointer' }}
                    />
                    </a><a href='#about' style={{ textDecoration: 'none' }}>
                        <Box
                            sx={{ position: "relative", bottom: pos, display: 'flex', justifyContent: 'center' }}>
                            <Typography

                                color='white'
                                variant={titleSize}
                                sx={{ position: "relative", left: '0px', cursor: 'pointer', fontWeight: 'bold' }}>
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