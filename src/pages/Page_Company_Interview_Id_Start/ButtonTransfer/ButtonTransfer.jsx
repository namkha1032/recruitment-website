import { IconButton } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const ButtonTransfer = (props) => {
    let { currentChosen, handleTransfer } = props
    return (
        <IconButton
            disabled={currentChosen.length == 0}
            onClick={handleTransfer}
            sx={{ color: "black" }}>
            <DoubleArrowIcon sx={{ fontSize: 80 }} />
        </IconButton>
    )
}

export default ButtonTransfer