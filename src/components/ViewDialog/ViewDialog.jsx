import { useState } from "react";
import {
    IconButton,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    Box
} from "@mui/material";
import Grid from "@mui/material/Grid";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CategoryIcon from '@mui/icons-material/Category';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import SourceIcon from '@mui/icons-material/Source';
import Divider from "@mui/material/Divider";
import PsychologyIcon from '@mui/icons-material/Psychology';
import PublicIcon from '@mui/icons-material/Public';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LanguageIcon from '@mui/icons-material/Language';
import TungstenIcon from '@mui/icons-material/Tungsten';
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
const ViewDialog = (props) => {
    const params = props.params
    const cate = props.cate
    const skillname = props.skillname
    const languagename = props.languagename
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    let left = isSm ? 3 : 5
    let right = isSm ? 8 : 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }
    let categoryName
    let categoryIcon
    let chipColor
    if (cate == 0) {
        categoryName = "Soft Skills"
        categoryIcon = <HandshakeIcon />
        chipColor = "secondary"
    }
    else if (cate == 1) {
        categoryName = "Language"
        categoryIcon = <LanguageIcon />
        chipColor = "success"
    }
    else if (cate == 2) {
        categoryName = "Technology"
        categoryIcon = <TungstenIcon />
        chipColor = "warning"
    }
    let [open, setOpen] = useState(false)
    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)} sx={{ borderRadius: 4 }}>
                <DialogTitle sx={{ backgroundColor: "black", color: "white" }}>
                    QUESTION
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={left} sx={gridSx}>
                            <Grid3x3Icon />
                            <Typography variant="h6">
                                ID
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="h6">
                                :
                            </Typography>
                        </Grid>
                        <Grid item xs={right} sx={gridSx}>
                            <Typography variant="body1">
                                {params.row.questionid}
                            </Typography>
                        </Grid>
                        <Grid item xs={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                            <Box sx={gridSx}>
                                <SourceIcon />
                                <Typography variant="h6">
                                    Content
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                            <Typography variant="h6">
                                :
                            </Typography>
                        </Grid>
                        <Grid item xs={isMd ? right : 12} sx={gridSx}>
                            <TextField
                                multiline
                                rows={4}
                                value={params.row.questionstring}
                                InputProps={{
                                    readOnly: true,
                                }}
                                fullWidth={true}
                                sx={{ fontSize: 50 }}
                            />
                        </Grid>
                        <Grid item xs={left} sx={gridSx}>
                            <CategoryIcon />
                            <Typography variant="h6">
                                Category
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="h6">
                                :
                            </Typography>
                        </Grid>
                        <Grid item xs={right} sx={gridSx}>
                            <Chip icon={categoryIcon} color={chipColor} label={categoryName} />
                        </Grid>
                        {skillname &&
                            <>
                                <Grid item xs={left} sx={gridSx}>
                                    <PsychologyIcon />
                                    <Typography variant="h6">
                                        Skill
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography variant="h6">
                                        :
                                    </Typography>
                                </Grid>
                                <Grid item xs={right} sx={gridSx}>
                                    <Typography variant="body1">
                                        {skillname}
                                    </Typography>
                                </Grid>
                            </>}
                        {languagename &&
                            <>
                                <Grid item xs={left} sx={gridSx}>
                                    <PublicIcon />
                                    <Typography variant="h6">
                                        Language
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography variant="h6">
                                        :
                                    </Typography>
                                </Grid>
                                <Grid item xs={right} sx={gridSx}>
                                    <Typography variant="body1">
                                        {languagename}
                                    </Typography>
                                </Grid>
                            </>
                        }
                    </Grid>
                </DialogContent>
            </Dialog>
            <IconButton onClick={() => setOpen(true)}>
                <VisibilityIcon></VisibilityIcon>
            </IconButton>
        </>
    )
}

export default ViewDialog