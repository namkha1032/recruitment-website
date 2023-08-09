import { Chip, Grid, Box, Typography } from '@mui/material';
import AssistantIcon from '@mui/icons-material/Assistant';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getPositionStatus } from '../../../utils/getPositionStatus';
import { convertDate } from '../../../utils/convertDate';
const StatusPostion = (props) => {
    let left = 5
    let right = 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center"
    }
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    let enddate = props.detailposition ? convertDate(props.detailposition.endDate) :  '' ;
    const startdate = props.detailposition ? convertDate(props.detailposition.startDate) : '';
    let status_enddate = getPositionStatus(enddate);
    let status_startdate = getPositionStatus(startdate);
    
    
    return (
        props.detailposition &&
        <>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "10px" }}>
                    <Box sx={gridSx}>
                        <AssistantIcon />
                        {isMd ? (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                                Status
                            </Typography>
                        ) : (
                            <Typography variant="h6" sx={{ marginLeft: "5px" }}>
                                Sta
                            </Typography>
                        )}
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                    <Typography variant="h6">
                        :
                    </Typography>
                </Grid>
                <Grid item xs={7} md={right} sx={gridSx}>

                    {props.detailposition.isDeleted == false ? (
                        <>
                            {(status_enddate == false) && (status_startdate == true) ?
                                (
                                    <Typography variant="h6" sx={{ color: "blue", marginLeft: "8px" }}>
                                        Active
                                    </Typography>
                                )
                                :
                                (
                                    <>
                                        <Typography variant="h6" sx={{ color: "red", marginLeft: "8px" }}>
                                            Inactive
                                        </Typography>
                                    </>
                                )}

                        </>

                    ) : (
                        <>
                            <Typography variant="h6" sx={{ color: "red", marginLeft: "8px" }}>
                                Inactive
                            </Typography>
                        </>
                    )}
                </Grid>
            </Box>

        </>

    )
}

export default StatusPostion;