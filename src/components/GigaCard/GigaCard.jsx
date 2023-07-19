import { Box, Typography } from "@mui/material";

const GigaCard = (props) => {
    return (
        <Box sx={{
            borderRadius: 4,
            boxShadow: 10,
            backgroundColor: "grey.50",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            height: "100%",
            display: "flex",
            flexDirection: "column"
        }}>
            {props.children}
        </Box>
    )
}

export default GigaCard