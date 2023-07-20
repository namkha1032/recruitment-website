import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Divider
} from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
// import components
import GigaCard from '../../../components/GigaCard/GigaCard';
import GigaCardHeader from '../../../components/GigaCardHeader/GigaCardHeader';
import GigaCardBody from '../../../components/GigaCardBody/GigaCardBody';

const NoteField = (props) => {
    const { note } = props
    const noteRef = useRef()
    useEffect(() => {
        noteRef.current.innerHTML = note
    }, [note])
    console.log("noteRef: ", noteRef)
    return (
        <>
            <GigaCard>
                <GigaCardHeader color={"primary.main"} headerIcon={<EditNoteIcon sx={{ fontSize: "inherit" }} />}>
                    Note
                </GigaCardHeader>
                <GigaCardBody>
                    <Divider />
                    <Box ref={noteRef} sx={{ overflowY: "scroll", maxHeight: "500px" }}>

                    </Box>
                    <Divider />
                </GigaCardBody>
            </GigaCard >
        </>
    )
}

export default NoteField