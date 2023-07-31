
// action.payload: {
//   QuestionName: value.question,
//   Category: value.category,
//   TypeId: value.typeId,
//   TypeName: value.typeName,
// }

import { tranferLanguage } from "./tranferLanguage"

export function createQuestionDraft(input, techId, langId, softId) {
    if (input.Category === "Technology" && techId.length === 1) {
        return {
            QuestionName: input.QuestionName,
            CategoryId: techId[0].categoryQuestionId,
            CategoryName: input.Category,
            TypeId: input.TypeId,
            TypeName: input.TypeName,
        }
    }
    else if (input.Category === "Language" && langId.length === 1) {
        const lang = tranferLanguage(input.TypeName)
        return {
            QuestionName: `$${lang}$` + input.QuestionName,
            CategoryId: langId[0].categoryQuestionId,
            CategoryName: input.Category,
            TypeId: input.TypeId,
            TypeName: input.TypeName,
        }
    }
    else if (input.Category === "Soft Skills" && softId.length === 1) {
        console.log("Hello")
        return {
            QuestionName: input.QuestionName,
            CategoryId: softId[0].categoryQuestionId,
            CategoryName: "Soft Skill",
            TypeId: input.TypeId,
            TypeName: input.TypeName,
        }
    }
    throw("Don't find the CategoryQuestion!")
}