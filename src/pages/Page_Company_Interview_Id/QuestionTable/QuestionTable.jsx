import { useState, useEffect } from 'react';
import {
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardHeader,
    CardContent
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import components
import CateTab from '../../Page_Company_Interview_Id_Start/CateTab/CateTab';

import SoftRightTable from '../../Page_Company_Interview_Id_Start/SoftRightTable/SoftRightTable';
import LangRightTable from '../../Page_Company_Interview_Id_Start/LangRightTable/LangRightTable';
import TechRightTable from '../../Page_Company_Interview_Id_Start/TechRightTable/TechRightTable';

const QuestionTable = (props) => {
    let { round } = props
    let rightSoft = round[0]
    let rightLang = round[1]
    let rightTech = round[2]
    let [currentCateTab, setCurrentCateTab] = useState(0);
    let [currentTechTab, setCurrentTechTab] = useState(0);
    return (
        <>
            <Box sx={{ border: "1px solid black", borderRadius: 4 }}>
                <CateTab currentCateTab={currentCateTab} setCurrentCateTab={setCurrentCateTab} />
                {/* Soft Skill Questions */}
                {currentCateTab == 0
                    ?
                    <Box sx={{ padding: 5 }}>
                        <SoftRightTable rightSoft={rightSoft} />
                    </Box>
                    : null}
                {/* Language Skill */}
                {currentCateTab == 1
                    ?
                    <Box sx={{ padding: 5 }}>
                        <LangRightTable rightLang={rightLang} />
                    </Box>
                    : null}
                {/* Technical Questions */}
                {currentCateTab == 2
                    ?
                    <Box sx={{ padding: 5 }}>
                        <TechRightTable rightTech={rightTech} currentTechTab={currentTechTab} setCurrentTechTab={setCurrentTechTab} />
                    </Box>
                    : null}
            </Box>
        </>
    )
}

export default QuestionTable