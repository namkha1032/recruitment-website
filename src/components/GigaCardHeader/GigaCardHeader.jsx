import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Icon from '@mui/material/Icon';
import Avatar from '@mui/material/Avatar';

const GigaCardHeader = (props) => {
    return (
        <Box sx={{ paddingLeft: 4, paddingTop: 4 }}>
            <Box sx={{ color: props.color, display: "flex", alignItems: "center", columnGap: 2 }}>
                {/* <Avatar sx={{ backgroundColor: props.color }}> */}
                <Box sx={{ fontSize: 40, display: "flex", alignItems: "center" }}>
                    {props.headerIcon}
                </Box>
                {/* </Avatar> */}
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {props.children}
                </Typography>
            </Box>
        </Box>
    )
}

export default GigaCardHeader