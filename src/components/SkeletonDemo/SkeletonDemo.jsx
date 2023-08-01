import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Container, Box } from '@mui/material';

export default function SkeletonDemo() {
    let color = "grey.400"
    return (
        // <Stack spacing={1}>
        //     {/* For variant="text", adjust the height via font-size */}
        //     <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        //     {/* For other variants, adjust the size with `width` and `height` */}
        //     <Skeleton variant="circular" width={40} height={40} sx={{ backgroundColor: "black" }} />
        //     <Skeleton variant="rectangular" width={210} height={60} />
        //     <Skeleton variant="rounded" width={210} height={60} />
        // </Stack>
        <Box sx={{ backgroundColor: "grey.200" }}>
            <Box sx={{ backgroundColor: "white", height: 69, width: "100%" }}>
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", height: 69, columnGap: 2 }}>
                            <Skeleton variant="rounded" sx={{ backgroundColor: color, height: 40, width: 100 }} />
                            <Skeleton variant="text" sx={{ backgroundColor: color, fontSize: 25, width: 250 }} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: 69, columnGap: 2 }}>
                            <Skeleton variant="text" sx={{ backgroundColor: color, fontSize: 25, width: 200 }} />
                            <Skeleton variant="circular" sx={{ backgroundColor: color, height: 50, width: 50 }} />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Container sx={{ height: "100%" }}>
                <Skeleton variant="rounded" sx={{ backgroundColor: "white", height: "100%", width: "100%", marginTop: 4 }} />
            </Container>
        </Box>
    );
}
