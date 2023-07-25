import { Category } from "@mui/icons-material";

function flatten(arr) {
    return 
}

export function tranferAllQuestion(input) {
        const flatten1 = input.map((category) => {
            if (category.skills) {
                return category.skills.map((skill) => {
                    return skill.questions.map((question) => {
                            return {
                                ...question,
                                categoryId: category.categoryid,
                                categoryName: category.categoryname,
                                typeId: skill.skillid,
                                typeName: skill.skillname   
                            }
                        })
                        }
                    )
            }
            else if (category.languages) {
                return category.languages.map((language) => {
                        return language.questions.map((question) => {
                            return {
                                ...question,
                                categoryId: category.categoryid,
                                categoryName: category.categoryname,
                                typeId: language.languageid,
                                typeName: language.languagename   
                            }
                        })
                        }
                    )
            }
            else {
              return category.questions.map((question) => {
                return {
                                ...question,
                                categoryId: category.categoryid,
                                categoryName: category.categoryname,
                                typeId: null,
                                typeName: null   
                            }
              })
            }
            
        })
        console.log(flatten1)
}