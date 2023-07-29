// {
//  "QuestionId": "",
//  "QuestionName": "",
//  "Category": ["Technology, "Language", "Soft Skills"]
//  "TypeId": "", null nếu Category là Soft Skills
//  "TypeName": "", null nếu Category là Soft Skills
// }
import { formatLanguage } from "./formatLanguage";
import { getLanguageId } from "./getLanguageId";

export function formatQuestionList(input, categorys, skillsQ, skills, languages) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < categorys.length; j++) {
      if (input[i].categoryQuestionId === categorys[j].categoryQuestionId) {
        input[i] = {
          ...input[i],
          categoryQuestionName: categorys[j].categoryQuestionName,
        };
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < skillsQ.length; j++) {
      if (input[i].questionId === skillsQ[j].questionId) {
        input[i] = {
          ...input[i],
          skillId: skillsQ[j].skillId,
        };
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < skills.length; j++) {
      if (input[i].skillId === skills[j].skills) {
        input[i] = {
          ...input[i],
          skillId: skills[j].skillId,
          skillName: skills[j].skillName,
        };
      }
    }
  }
  const output = input.map((element) => {
    if (element.categoryQuestionName === "Language") {
      return {
        QuestionId: element.questionId,
        QuestionName: element.questionString.slice(5),
        CategoryId: element.categoryQuestionId,
        CategoryName: "Language",
        TypeId: getLanguageId(formatLanguage(element.questionString, categorys), languages),
        TypeName: formatLanguage(element.questionString, categorys),
      };
    } else if (element.categoryQuestionName === "Soft Skill") {
      return {
        QuestionId: element.questionId,
        QuestionName: element.questionString,
        CategoryId: element.categoryQuestionId,
        CategoryName: "Soft Skills",
        TypeId: null,
        TypeName: null,
      };
    } else {
      return {
        QuestionId: element.questionId,
        QuestionName: element.questionString,
        CategoryId: element.categoryQuestionId,
        CategoryName: "Technology",
        TypeId: element.skillId,
        TypeName: element.skillName,
      };
    }
  });
  return output
}
