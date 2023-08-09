import Plot from 'react-plotly.js';
// import components

// import functions
import calculateScore from '../../../utils/calculateScore';
// import styles
const RadarPlot = (props) => {
    const { allResult } = props
    let rightSoft = allResult[0]
    let rightLang = allResult[1]
    let rightTech = allResult[2]
    console.log("rightSoft: ", rightSoft)
    console.log("rightLang: ", rightLang)
    console.log("rightTech: ", rightTech)
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
            <Plot
                data={[{
                    type: 'scatterpolar',
                    r: [softResult, langResult, techResult],
                    theta: ['Soft Skill', 'Language', 'Technology'],
                    fill: 'toself'
                }]}

                layout={{
                    polar: {
                        radialaxis: {
                            visible: true,
                            range: [0, 10]
                        }
                    },
                    showlegend: false,
                    margin: {
                        autoexpand: false,
                        pad: 0,
                        b: 0,
                        l: 20,
                        r: 70,
                        t: 0
                    },
                    width: 320,
                    height: 320
                }}
                config={{
                    displayModeBar: false, // this is the line that hides the bar.
                }}
            />
        </>
    )
}

export default RadarPlot