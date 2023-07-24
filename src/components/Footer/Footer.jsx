import { Typography, Box, Link } from "@mui/material";
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Team 4
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const Footer = () => {
    return (
        <>
            <Box sx={{ padding: '24px', borderTop: '1px solid lightgrey', marginTop: 10 }} id='AboutUs'>
                <Box>
                    <h1 style={{ textAlign: 'center', fontFamily: 'serif' }}>About us</h1>
                </Box>
            </Box>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Team 4
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
        </>
    )
}

export default Footer