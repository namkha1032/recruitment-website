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
import calculateScore from '../../../utils/calculateScore';

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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ScoreTable = (props) => {

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
            {/* <Grid container rowSpacing={4}>
                <Grid item md={3}>
                    <Typography variant="body1">Soft Skill: </Typography>
                </Grid>
                <Grid item md={9}>
                    <InlineMath
                        math={softMath}
                    />
                </Grid>
                <Grid item md={3}>
                    <Typography variant="body1">Language Skill: </Typography>
                </Grid>
                <Grid item md={9}>
                    <InlineMath
                        math={langMath}
                    />
                </Grid>
                <Grid item md={3}>
                    <Typography variant="body1">Technical Skill: </Typography>
                </Grid>
                <Grid item md={9}>
                    <InlineMath
                        math={techMath}
                    />
                </Grid>
                <Grid item md={3}>
                    <Typography variant="body1">Final Score: </Typography>
                </Grid>
                <Grid item md={9}>
                    <InlineMath
                        math={finalMath}
                    />
                </Grid>
            </Grid> */}
            <TableContainer component={Paper}>
                <Table sx={{ width: "100%" }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Categories</StyledTableCell>
                            <StyledTableCell>Score</StyledTableCell>
                            <StyledTableCell>Formula</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row) => ( */}
                        <TableRow>
                            <StyledTableCell component="th" scope="row">
                                Soft Skill
                            </StyledTableCell>
                            <StyledTableCell><InlineMath math={softResult.toString()} /></StyledTableCell>
                            <StyledTableCell><InlineMath math={softMath} /></StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell component="th" scope="row">
                                Language Skill
                            </StyledTableCell>
                            <StyledTableCell><InlineMath math={langResult.toString()} /></StyledTableCell>
                            <StyledTableCell><InlineMath math={langMath} /></StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell component="th" scope="row">
                                Technology Skill
                            </StyledTableCell>
                            <StyledTableCell><InlineMath math={techResult.toString()} /></StyledTableCell>
                            <StyledTableCell><InlineMath math={techMath} /></StyledTableCell>
                        </TableRow>
                        <TableRow sx={{ backgroundColor: "grey.300" }}>
                            <StyledTableCell component="th" scope="row">
                                Final Score
                            </StyledTableCell>
                            <StyledTableCell><InlineMath math={finalResult.toString()} /></StyledTableCell>
                            <StyledTableCell><InlineMath math={finalMath} /></StyledTableCell>
                        </TableRow>
                        {/* ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ScoreTable