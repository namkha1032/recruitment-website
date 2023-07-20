import { Box, Typography } from "@mui/material";

const GigaCardBody = (props) => {
    return (
        <Box sx={{ padding: 4, height: "100%" }}>
            {props.children}
        </Box>
    )
}

export default GigaCardBody