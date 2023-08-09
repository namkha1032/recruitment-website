import { useState } from 'react';

import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';

// import components
import LeftTable from '../LeftTable/LeftTable';
import RightTable from '../../../components/RightTable/RightTable';
import ButtonTransfer from '../ButtonTransfer/ButtonTransfer';
const QuestionTransfer = (props) => {
    const { leftTable, rightTable, cate } = props
    const dispatch = useDispatch()
    let [currentSubTab, setCurrentSubTab] = useState(0);
    let [currentQues, setCurrentQues] = useState([])
    function handleTransfer() {
        let newQues = {
            categoryOrder: cate,
            subOrder: currentSubTab,
            chosenQuestionId: currentQues[0]
        }
        dispatch({ type: "question/transferQuestion", payload: newQues })
    }
    return (
        <Grid container>
            <Grid item xs={12} md={5}>
                <LeftTable
                    leftTable={leftTable}
                    cate={cate}
                    currentQues={currentQues}
                    setCurrentQues={setCurrentQues}
                    currentSubTab={currentSubTab}
                    setCurrentSubTab={setCurrentSubTab} />
            </Grid>
            <Grid item xs={12} md={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <ButtonTransfer currentChosen={currentQues} handleTransfer={handleTransfer} />
            </Grid>
            <Grid item xs={12} md={5}>
                <RightTable
                    rightTable={rightTable}
                    cate={cate}
                    currentSubTab={currentSubTab}
                    setCurrentSubTab={setCurrentSubTab}
                    setCurrentQues={setCurrentQues}
                />
            </Grid>
        </Grid>
    )
}

export default QuestionTransfer