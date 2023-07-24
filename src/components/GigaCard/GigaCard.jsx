import { Box, Typography } from "@mui/material";

const GigaCard = (props) => {
    return (
        <Box sx={{
            borderRadius: 4,
            boxShadow: 10,
            backgroundColor: "white",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            width: "100%"
        }}>
            {props.children}
        </Box>
    )
}


export default GigaCard