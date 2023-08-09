import { Box, Grid, Skeleton } from "@mui/material"
import GigaCard from "../../GigaCard/GigaCard"
import GigaCardHeader from "../../GigaCardHeader/GigaCardHeader"
import GigaCardBody from "../../GigaCardBody/GigaCardBody"
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const Info_viewSkeleton = (props) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const isSm = useMediaQuery(theme.breakpoints.up("sm"));
    let left = 5
    let right = 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center"
    }
    const [tab1, setTab1] = useState('1');
    const [tab2, setTab2] = useState('3');
    const handleTab1 = (event, newValue) => {
        setTab1(newValue);
    };
    const handleTab2 = (event, newValue) => {
        setTab2(newValue);
    };
    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                </Grid>
                <Grid item xs={12} md={6} sm={12}>
                    <GigaCard>
                        <GigaCardBody>
                            <Skeleton animation="wave"variant="rounded" width="100%" height={467} />
                        </GigaCardBody>
                    </GigaCard>


                </Grid>
                <Grid item xs={12} md={6} sm={12} sx={{ display: "flex", flexDirection: "column" }}>
                    <GigaCard>
                        <GigaCardHeader color={"black"} >
                            {isMd ? (
                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '3rem' }} width={300} />
                            ) : (
                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '3rem' }} width={250} />
                            )}
                        </GigaCardHeader>
                        <GigaCardBody >

                            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                                <Grid item xs={4} md={left} sx={{ ...gridSx, alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "12px" }}>
                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}



                                </Grid>
                                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>

                                </Grid>
                                <Grid item xs={7} md={right} sx={gridSx}>
                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "12px" }}>

                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}

                                </Grid>
                                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>

                                </Grid>
                                <Grid item xs={7} md={right} sx={gridSx}>
                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "12px" }}>

                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}


                                </Grid>
                                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>

                                </Grid>
                                <Grid item xs={7} md={right} sx={gridSx}>
                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "12px" }}>

                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}


                                </Grid>
                                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>

                                </Grid>
                                <Grid item xs={7} md={right} sx={gridSx}>
                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "12px" }}>

                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}


                                </Grid>
                                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>

                                </Grid>
                                <Grid item xs={7} md={right} sx={gridSx}>
                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
                                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "12px" }}>

                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}

                                </Grid>
                                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>

                                </Grid>
                                <Grid item xs={7} md={right} sx={gridSx}>
                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}                 
                                </Grid>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap, marginLeft: isSm ? 0 : "10px" }}>

                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}

                                </Grid>
                                <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>

                                </Grid>
                                <Grid item xs={7} md={right} sx={gridSx}>

                                    {isMd ? (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                    ) : (
                                        <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                    )}
                                </Grid>
                            </Box>

                        </GigaCardBody>
                    </GigaCard>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>

                        <GigaCard>
                            <GigaCardBody>

                                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", flexDirection: "row" }}>
                                    {props.tabs === 2 ? (
                                        <>
                                            {isMd ? (
                                                <>
                                                    <Box>
                                                        <Skeleton animation="wave"variant="rectangular" width={200} height={40} />
                                                    </Box>


                                                </>
                                            ) : (
                                                <>
                                                    <Box>
                                                        <Skeleton animation="wave"variant="rectangular" width={100} height={40} />
                                                    </Box>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {isMd ? (
                                                <>
                                                    <Box>
                                                        <Skeleton animation="wave"variant="rectangular" width={40} height={40} />
                                                    </Box>


                                                </>
                                            ) : (
                                                <>
                                                    <Box>
                                                        <Skeleton animation="wave"variant="rectangular" width={40} height={40} />
                                                    </Box>
                                                </>
                                            )}
                                        </>
                                    )}
                                </Box>

                                <Box>
                                    <Grid container spacing={1} sx={{ marginTop: "0px", display: "flex", flexDirection: "column" }}>
                                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                                            <Box sx={{ ...gridSx, paddingTop: 1, paddingBottom: 1, paddingTop: 2 }}>
                                                {isMd ? (
                                                    <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="20%" height={50} />
                                                ) : (
                                                    <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="60%" height={30} />
                                                )}

                                            </Box>

                                            <Box sx={{ marginLeft: "15px", textAlign: "justify", fontSize: "16px", paddingTop: 2 }}>
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" height="100%" />
                                            </Box>

                                        </Grid>



                                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>

                                            {isMd ? (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="20%" height={50} />
                                            ) : (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="60%" height={30} />
                                            )}

                                        </Grid>

                                        <Grid item xs={12} md={12} sx={{ marginLeft: "15px" }}>
                                            {isMd ? (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                            ) : (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                            )}
                                        </Grid>
                                        <Grid item xs={12} md={12} sx={{ marginLeft: "15px", marginTop: "2px" }} >
                                            {isMd ? (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                            ) : (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                            )}
                                        </Grid>
                                        <Grid item xs={12} md={12} sx={{ marginLeft: "15px", paddingTop: "0px", marginTop: "2px" }}>
                                            {isMd ? (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                            ) : (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                            )}
                                        </Grid>

                                        <Grid item xs={12} md={12} sx={{ marginLeft: "15px", paddingTop: "0px", marginTop: "2px" }}>
                                            {isMd ? (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                            ) : (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                            )}
                                        </Grid>
                                        <Grid item xs={12} md={12} sx={{ marginLeft: "15px", paddingTop: "0px", marginTop: "2px" }}>
                                            {isMd ? (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '2rem' }} width="100%" />
                                            ) : (
                                                <Skeleton animation="wave"variant="text" sx={{ fontSize: '1rem' }} width="100%" />
                                            )}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </GigaCardBody>
                        </GigaCard>

                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Info_viewSkeleton