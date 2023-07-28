import { Box, Grid } from "@mui/material";
import TroubleshootRoundedIcon from '@mui/icons-material/TroubleshootRounded';

export default function ReportStatistic() {
    return (
        <Box sx={{
            border: "1px solid gray",
            borderRadius: 1,
            padding: 2
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontSize: 20
                }}>
                    <TroubleshootRoundedIcon sx={{
                        fontSize: 30,
                        marginRight: 1
                    }}/> 
                    <Box sx={{
                        fontWeight: 600
                    }}>Statistic</Box>
                    
                </Grid>

            </Grid>
            
        
        </Box>
    )
}