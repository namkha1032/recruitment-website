function calculateScore(rightSoft, rightLang, rightTech) {
    
    let softScoreArray = []
    let softSumString = ``
    let softResult = 0
    let softMath = ``

    let langScoreArray = []
    let langSumString = ``
    let langResult = 0
    let langMath = ``

    let techScoreArray = []
    let techSumString = ``
    let techResult = 0
    let techMath = ``

    if (rightSoft) {
        rightSoft.questions.forEach((ques, index) => {
            if (ques.score != "") {
                softScoreArray = softScoreArray.concat(parseFloat(ques.score))
            }
        })
        softScoreArray.forEach((sco, index) => {
            let rightParen = `}`
            let num = softScoreArray.length.toString()
            let divider = `}{`
            let leftParen = `\\frac{`
            let equal = `=`
            softResult = (softScoreArray.reduce((a, b) => a + b, 0) / softScoreArray.length).toFixed(2)
            softSumString = softSumString.concat(sco.toString())
            if (index < softScoreArray.length - 1) {
                softSumString = softSumString.concat("+")
            }
            softMath = `${softResult}` + equal + leftParen + softSumString + divider + num + rightParen
        })
    }
    if (rightLang) {
        rightLang.questions.forEach(ques => {
            if (ques.score != "") {
                langScoreArray = langScoreArray.concat(parseFloat(ques.score))
            }
        })
        langScoreArray.forEach((sco, index) => {
            let rightParen = `}`
            let num = langScoreArray.length.toString()
            let divider = `}{`
            let leftParen = `\\frac{`
            let equal = `=`
            langResult = (langScoreArray.reduce((a, b) => a + b, 0) / langScoreArray.length).toFixed(2)

            langSumString = langSumString.concat(sco.toString())
            if (index < langScoreArray.length - 1) {
                langSumString = langSumString.concat("+")
            }
            langMath = `${langResult}` + equal + leftParen + langSumString + divider + num + rightParen
        })
    }
    if (rightTech) {
        rightTech.skills.forEach(skill => {
            skill.questions.forEach(ques => {
                if (ques.score != "") {
                    techScoreArray = techScoreArray.concat(parseFloat(ques.score))
                }
            })
        })
        techScoreArray.forEach((sco, index) => {
            let rightParen = `}`
            let num = techScoreArray.length.toString()
            let divider = `}{`
            let leftParen = `\\frac{`
            let equal = `=`
            techResult = (techScoreArray.reduce((a, b) => a + b, 0) / techScoreArray.length).toFixed(2)

            techSumString = techSumString.concat(sco.toString())
            if (index < techScoreArray.length - 1) {
                techSumString = techSumString.concat("+")
            }
            techMath = `${techResult}` + equal + leftParen + techSumString + divider + num + rightParen
        })
    }

    let finalResult = (parseFloat(softResult) * 0.2 + parseFloat(langResult) * 0.3 + parseFloat(techResult) * 0.5).toFixed(2)
    let finalMath = `${finalResult}=0.2\\times${softResult}+0.3\\times${langResult}+0.5\\times${techResult}`

    return {
        softResult: softResult,
        softMath: softMath,
        langResult: langResult,
        langMath: langMath,
        techResult: techResult,
        techMath: techMath,
        finalResult: finalResult,
        finalMath: finalMath
    }
}

export default calculateScore