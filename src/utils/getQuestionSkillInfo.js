// questionSkills: {
//     "questionSkillsId": "00000000-0000-0000-0000-000000000001",
//     "questionId": "00000000-0000-0000-0000-000000000001",
//     "skillId": "00000000-0000-0000-0000-000000000001"
// }
// input: "00000000-0000-0000-0000-000000000001"

export function getQuestionSkillInfo(input, questionSkills) {
    const output = questionSkills.filter(element => element.questionId === input)
    return output.length > 0 ? output[0] : null
}