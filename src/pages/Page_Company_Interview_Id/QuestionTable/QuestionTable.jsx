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
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// import components
import CateTab from '../../Page_Company_Interview_Id_Start/CateTab/CateTab';
import GigaCard from '../../../components/GigaCard/GigaCard';
import GigaCardHeader from '../../../components/GigaCardHeader/GigaCardHeader';
import GigaCardBody from '../../../components/GigaCardBody/GigaCardBody';

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
            <GigaCard>
                <GigaCardHeader color={"primary.main"} headerIcon={<QuestionMarkIcon sx={{ fontSize: "inherit" }} />}>
                    Questions
                </GigaCardHeader>
                <GigaCardBody>
                    <CateTab currentCateTab={currentCateTab} setCurrentCateTab={setCurrentCateTab} />
                    {/* Soft Skill */}
                    {currentCateTab == 0
                        ? <SoftRightTable rightSoft={rightSoft} />
                        : null}
                    {/* Language Skill */}
                    {currentCateTab == 1
                        ? <LangRightTable rightLang={rightLang} />
                        : null}
                    {/* Technical Questions */}
                    {currentCateTab == 2
                        ? <TechRightTable rightTech={rightTech} currentTechTab={currentTechTab} setCurrentTechTab={setCurrentTechTab} />
                        : null}
                </GigaCardBody>
            </GigaCard>
        </>
    )
}

export default QuestionTable