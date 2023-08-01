// {
//  "QuestionId": "",
//  "QuestionName": "",
//  "Category": ["Technology, "Language", "Soft Skills"]
//  "TypeId": "", null nếu Category là Soft Skills
//  "TypeName": "", null nếu Category là Soft Skills
// }
import { formatLanguage } from "./formatLanguage";
import { getLanguageId } from "./getLanguageId";

export function formatQuestionList(
  input,
  categorys,
  skillsQ,
  skills,
  languages
) {
  // console.log("1: ", input)
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
  // console.log("2: ", input)
  // console.log("skillsQ: ", skillsQ)

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
  // console.log("3: ", input)
  // console.log("skills: ", skills)

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < skills.length; j++) {
      if (input[i].skillId === skills[j].skillId) {
        input[i] = {
          ...input[i],
          // skillId: skills[j].skillId,
          skillName: skills[j].skillName,
        };
      }
    }
  }
  // console.log("4: ", input)

  const output_draft = input.map((element) => {
    if (element.categoryQuestionName === "Language") {
      return {
        QuestionId: element.questionId,
        QuestionName: element.questionString.slice(5),
        CategoryId: element.categoryQuestionId,
        CategoryName: "Language",
        TypeId: getLanguageId(
          formatLanguage(element.questionString, categorys),
          languages
        ),
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

  const output = output_draft.filter(
    (element) =>
      element.QuestionId !== "00000000-0000-0000-0000-000000000001" &&
      element.QuestionId !== "00000000-0000-0000-0000-000000000002" &&
      element.QuestionId !== "00000000-0000-0000-0000-000000000003"
  );
  return output;
}
