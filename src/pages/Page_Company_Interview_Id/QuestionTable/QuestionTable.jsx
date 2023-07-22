import { useState } from 'react';
// import components
import CateTab from '../../../components/CateTab/CateTab';
import RightTable from '../../../components/RightTable/RightTable';
const QuestionTable = (props) => {
    let { round } = props
    let rightSoft = round[0]
    let rightLang = round[1]
    let rightTech = round[2]
    let [currentCateTab, setCurrentCateTab] = useState(0);
    let [currentSubTab, setCurrentSubTab] = useState(0);
    return (
        <>
            <CateTab currentCateTab={currentCateTab} setCurrentCateTab={setCurrentCateTab} />
            {/* Soft Skill */}
            {currentCateTab == 0
                ? <RightTable
                    rightTable={rightSoft}
                    cate={0}
                    currentSubTab={0}
                    setCurrentSubTab={setCurrentSubTab}
                />
                : null}
            {/* Language Skill */}
            {currentCateTab == 1
                ? <RightTable
                    rightTable={rightLang}
                    cate={1}
                    currentSubTab={0}
                    setCurrentSubTab={setCurrentSubTab}
                />
                : null}
            {/* Technical Questions */}
            {currentCateTab == 2
                ? <RightTable
                    rightTable={rightTech}
                    cate={2}
                    currentSubTab={currentSubTab}
                    setCurrentSubTab={setCurrentSubTab}
                />
                : null}
        </>
    )
}

export default QuestionTable