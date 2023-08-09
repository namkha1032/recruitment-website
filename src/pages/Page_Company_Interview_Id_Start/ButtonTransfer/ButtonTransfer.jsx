import { IconButton } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ButtonTransfer = (props) => {
    let { currentChosen, handleTransfer } = props
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <IconButton
            disabled={currentChosen.length == 0}
            onClick={handleTransfer}
            sx={{ color: "black" }}>
            {isMd ? <KeyboardDoubleArrowRightIcon sx={{ fontSize: 80 }} /> : <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80 }} />}
        </IconButton>
    )
}

export default ButtonTransfer