import { useState, useEffect } from 'react';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardHeader,
    CardContent,
    Table,
    TableCell,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import calculateScore from '../../utils/calculateScore';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const ScoreTable = (props) => {

    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    let rightSoft = props.allResult[0]
    let rightLang = props.allResult[1]
    let rightTech = props.allResult[2]

    let {
        softResult,
        softMath,
        langResult,
        langMath,
        techResult,
        techMath,
        finalResult,
        finalMath
    } = calculateScore(rightSoft, rightLang, rightTech)

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ width: "100%" }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Categories</StyledTableCell>
                            <StyledTableCell>Score</StyledTableCell>
                            {isSm ? <StyledTableCell>Formula</StyledTableCell> : null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <StyledTableCell component="th" scope="row">
                                Soft Skill
                            </StyledTableCell>
                            <StyledTableCell><InlineMath math={softResult.toString()} /></StyledTableCell>
                            {isSm ? <StyledTableCell><InlineMath math={softMath} /></StyledTableCell> : null}
                        </TableRow>
                        <TableRow>
                            <StyledTableCell component="th" scope="row">
                                Language Skill
                            </StyledTableCell>
                            <StyledTableCell><InlineMath math={langResult.toString()} /></StyledTableCell>
                            {isSm ? <StyledTableCell><InlineMath math={langMath} /></StyledTableCell> : null}
                        </TableRow>
                        <TableRow>
                            <StyledTableCell component="th" scope="row">
                                Technology Skill
                            </StyledTableCell>
                            <StyledTableCell><InlineMath math={techResult.toString()} /></StyledTableCell>
                            {isSm ? <StyledTableCell><InlineMath math={techMath} /></StyledTableCell> : null}
                        </TableRow>
                        <TableRow sx={{ backgroundColor: "grey.300" }}>
                            <StyledTableCell component="th" scope="row">
                                Final Score
                            </StyledTableCell>
                            <StyledTableCell><InlineMath math={finalResult.toString()} /></StyledTableCell>
                            {isSm ? <StyledTableCell><InlineMath math={finalMath} /></StyledTableCell> : null}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ScoreTable