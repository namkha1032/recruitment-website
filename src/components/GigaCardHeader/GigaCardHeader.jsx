import { Box, Typography } from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const GigaCardHeader = (props) => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{ paddingX: isMd ? 4 : 2, paddingTop: 4, paddingBottom: isMd ? 0 : 4 }}>
            <Box sx={{ color: props.color, display: "flex", alignItems: "center", columnGap: 2 }}>
                {/* <Avatar sx={{ backgroundColor: props.color }}> */}
                <Box sx={{ fontSize: 40, display: "flex", alignItems: "center" }}>
                 
                  {props.headerIcon}
                </Box>
                {/* </Avatar> */}
                <Typography variant={isMd ? "h4" : "h5"} sx={{ fontWeight: "bold" }}>
                    {props.children}
                </Typography>
            </Box>
        </Box>
    )
}

export default GigaCardHeader