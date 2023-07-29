export function getLanguageId(input, languages) {
    const output = languages.filter(element => element.languageName === input)
    if (output.length === 0) {
        return null
    }
    return output[0].languageId
}