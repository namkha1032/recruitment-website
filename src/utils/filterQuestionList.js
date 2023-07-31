// input: {
//  QuestionId: element.questionId,
//  QuestionName: element.questionString,
//  CategoryId: element.categoryQuestionId, null nếu CategoryName = Language
//  CategoryName: "Soft Skills",
//  TypeId: null,
//  TypeName: null,
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
  console.log("INPUT: ", input)
  console.log("OBJECT: ", object)
  if (object.categoryName === null) {
    return input;
  } else if (object.categoryName === "Technology") {
    if (object.skillName === null) {
      return input.filter((element) => element.CategoryName === "Technology");
    } else {
      return input.filter(
        (element) =>
          element.CategoryName === "Technology" &&
          element.TypeName === object.skillName
      );
    }
  } else if (object.categoryName === "Language") {
    if (object.languageName === null) {
      return input.filter((element) => element.CategoryName === "Language");
    } else {
      return input.filter(
        (element) =>
          element.CategoryName === "Language" &&
          element.TypeName === object.languageName
      );
    }
  } else if (object.categoryName === "Soft Skills") {
    return input.filter((element) => element.CategoryName === "Soft Skills");
  }
  return [];
}
