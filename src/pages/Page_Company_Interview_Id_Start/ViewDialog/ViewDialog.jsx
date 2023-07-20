import { useState } from "react";
import {
    IconButton,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

const ViewDialog = (props) => {
    const params = props.params
    const category = props.category
    const skillname = props.skillname
    const languagename = props.languagename
    let [open, setOpen] = useState(false)
    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>
                    Question string
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        ID: {params.row.questionid}
                    </Typography>
                    <Typography variant="body1">
                        String: {params.row.questionstring}
                    </Typography>
                    <Typography variant="body1">
                        Category: {category}
                    </Typography>
                    {skillname &&
                        <Typography variant="body1">
                            Skill: {skillname}
                        </Typography>}
                    {languagename &&
                        <Typography variant="body1">
                            Language: {languagename}
                        </Typography>}
                </DialogContent>
            </Dialog>
            <IconButton onClick={() => setOpen(true)}>
                <VisibilityIcon></VisibilityIcon>
            </IconButton>
        </>
    )
}

export default ViewDialog