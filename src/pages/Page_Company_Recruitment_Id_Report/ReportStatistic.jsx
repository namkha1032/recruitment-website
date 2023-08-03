import { Box, Grid, List, ListItem } from "@mui/material";
import TroubleshootRoundedIcon from '@mui/icons-material/TroubleshootRounded';

export default function ReportStatistic(props) {
    return (
        <Box sx={{
            border: "1px solid gray",
            borderRadius: 1,
            padding: 2
        }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontSize: 20,
                }}>
                    <TroubleshootRoundedIcon sx={{
                        fontSize: 30,
                        marginRight: 1
                    }}/> 
                    <Box sx={{
                        fontWeight: 600
                    }}>Numerical Data</Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <List>
                    <ListItem sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Box>Applied Total:</Box>
                        <Box>{props.data.AppliedTotal}</Box>
                    </ListItem>
                    <ListItem sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Box>Average:</Box>
                        <Box>{props.data.Average}</Box>
                    </ListItem>
                    <ListItem sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Box>Median:</Box>
                        <Box>{props.data.Median}</Box>
                    </ListItem>
                    <ListItem sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Box>Mode:</Box>
                        <Box>{props.data.Mode}</Box>
                    </ListItem>
                </List>
                </Grid>
                

            </Grid>
            
        
        </Box>
    )
}