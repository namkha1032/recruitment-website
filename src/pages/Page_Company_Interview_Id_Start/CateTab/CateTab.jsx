import { useState, useEffect } from 'react';
import {
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardHeader,
    CardContent,
    Tabs,
    Tab,
    Chip
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LanguageIcon from '@mui/icons-material/Language';
import TungstenIcon from '@mui/icons-material/Tungsten';
const CateTab = (props) => {
    const { currentCateTab, setCurrentCateTab } = props
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ display: "flex", columnGap: 2, marginBottom: 2 }}>
            <Button sx={{ borderRadius: 100 }} size="large"
                color={"secondary"}
                startIcon={<HandshakeIcon />}
                variant={currentCateTab == 0 ? "contained" : "outlined"}
                onClick={() => { setCurrentCateTab(0) }}>
                Soft Skill
            </Button>
            <Button sx={{ borderRadius: 100 }} size="large"
                color={"success"}
                startIcon={<LanguageIcon />}
                variant={currentCateTab == 1 ? "contained" : "outlined"}
                onClick={() => { setCurrentCateTab(1) }}>
                Language
            </Button>
            <Button sx={{ borderRadius: 100 }} size="large"
                color={"warning"}
                startIcon={<TungstenIcon />}
                variant={currentCateTab == 2 ? "contained" : "outlined"}
                onClick={() => { setCurrentCateTab(2) }}>
                Technology
            </Button>
        </Box>
    )
}

export default CateTab