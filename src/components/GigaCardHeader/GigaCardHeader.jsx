import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Icon from '@mui/material/Icon';
import Avatar from '@mui/material/Avatar';

const GigaCardHeader = (props) => {
    return (
        <Box sx={{ paddingLeft: 4, paddingTop: 4 }}>
            {/* <Grid container sx={{ color: props.color, display: "flex", alignItems: "center" }}> */}
            <Box sx={{ color: props.color, display: "flex", alignItems: "center" }}>
                {/* <Grid item md={2}> */}
                <Avatar sx={{ backgroundColor: props.color, marginRight: 2 }}>
                    {props.headerIcon}
                </Avatar>
                {/* </Grid>
                <Grid item md={10}> */}
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {props.children}
                </Typography>
                {/* </Grid> */}
            </Box>
            {/* </Grid> */}
        </Box>
    )
}

export default GigaCardHeader