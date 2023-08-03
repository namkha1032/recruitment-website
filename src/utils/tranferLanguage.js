export function tranferLanguage(input) {
    switch (input) {
        case "English": return "eng";
        case "Chinese": return "chi";
        case "Portuguese": return "por";
        case "Spanish": return "spa";
        case "French": return "fre";
        case "Russian": return "rus";
        case "Japanese": return "jap";
        case "Korean": return "kor";
        case "German": return "ger";
        case "Italian": return "ita";
        default: return "xxx";
    }
}