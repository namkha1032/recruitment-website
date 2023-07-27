// {
//  "QuestionId": "",
//  "QuestionName": "",
//  "Category": ["Technology, "Language", "Soft Skills"]
//  "Skill": "", null nếu Category là Soft Skills
// }
import { formatLanguage } from "./formatLanguage";

export function formatQuestionList(input, categorys, skillsQ, skills) {
  console.log(input);
  console.log(categorys);
  console.log(skillsQ);
  console.log(skills);
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
        Category: "Language",
        Skill: formatLanguage(element.questionString, categorys),
      };
    } else if (element.categoryQuestionName === "Soft Skill") {
      return {
        QuestionId: element.questionId,
        QuestionName: element.questionString,
        Category: "Soft Skills",
        Skill: null,
      };
    } else {
      return {
        QuestionId: element.questionId,
        QuestionName: element.questionString,
        Category: "Technology",
        Skill: element.skillName,
      };
    }
  });
  return output
}
