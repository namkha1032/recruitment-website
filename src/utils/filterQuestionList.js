// input: {
//  "QuestionId": "",
//  "QuestionName": "",
//  "Category": ["Technology, "Language", "Soft Skills"]
//  "Skill": "", null nếu Category là Soft Skills
// }
// object: {
//  categoryName: "Technology",
//  skillId: null,
//  skillName: null,
//  languageId: null,
//  languageName: null,
//  softskill: false,
// }

export function filterQuestionList(input, object) {
  if (object.categoryName === null) {
    return input;
  } else if (object.categoryName === "Technology") {
    if (object.skillName === null) {
      return input.filter((element) => element.Category === "Technology");
    } else {
      return input.filter(
        (element) =>
          element.Category === "Technology" &&
          element.Skill === object.skillName
      );
    }
  } else if (object.categoryName === "Language") {
    if (object.languageName === null) {
      return input.filter((element) => element.Category === "Language");
    } else {
      return input.filter(
        (element) =>
          element.Category === "Language" &&
          element.Skill === object.languageName
      );
    }
  } else if (object.categoryName === "Soft Skills") {
    return input.filter((element) => element.Category === "Soft Skills");
  }
  return [];
}
