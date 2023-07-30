import { Divider, Button } from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const TitleDivider = (props) => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Divider sx={{
            marginY: 7,
            "&::before, &::after": {
                borderColor: "black",
                borderWidth: "1px"
            },
        }}>
            <Button variant="contained" sx={{ backgroundColor: "black", color: "white", fontSize: isMd ? 25 : 15, borderRadius: 100 }}>
                {props.children}
            </Button>
        </Divider>
    )
}

export default TitleDivider