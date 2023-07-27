export function formatLanguage(input, categorys) {
    if (input.slice(0,5) === "$eng$") {
        return "English"
    }
    return ""
}