import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const GigaCardBody = (props) => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{ paddingX: isMd ? 4 : 1, paddingBottom: 4, height: "100%", width: "100%" }}>
            {props.children}
        </Box>
    )
}

export default GigaCardBody