import { Paper } from "@mui/material";

const GigaCard = (props) => {
    return (
        // <Box sx={{
        //     borderRadius: 4,
        //     boxShadow: 10,
        //     backgroundColor: "white",
        //     border: (theme) => `1px solid ${theme.palette.divider}`,
        //     height: "100%",
        //     display: "flex",
        //     flexDirection: "column",
        //     width: "100%"
        // }}>
        //     {props.children}
        // </Box>
        <Paper sx={{
            boxShadow: 10,
            borderRadius: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            width: "100%"
        }}>
            {props.children}
        </Paper>
    )
}


export default GigaCard