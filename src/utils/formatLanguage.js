export function formatLanguage(input, categorys) {
    if (input.slice(0,5) === "$eng$") {
        return "English"
    }
    else if (input.slice(0,5) === "$chi$") {
        return "Chinese"
    }
    else if (input.slice(0,5) === "$hin$") {
        return "Hindi"
    }
    else if (input.slice(0,5) === "$spa$") {
        return "Spanish"
    }
    else if (input.slice(0,5) === "$fre$") {
        return "French"
    }
    else if (input.slice(0,5) === "$rus$") {
        return "Russian"
    }
    else if (input.slice(0,5) === "$jap$") {
        return "Japanese"
    }
    else if (input.slice(0,5) === "$kor$") {
        return "Korean"
    }
    else if (input.slice(0,5) === "$ger$") {
        return "German"
    }
    else if (input.slice(0,5) === "$por$") {
        return "Portuguese"
    }
    else if (input.slice(0,5) === "$ita$") {
        return "Italian"
    }
    return "xxx"
}