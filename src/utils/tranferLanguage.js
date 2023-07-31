export function tranferLanguage(input) {
    switch (input) {
        case "English": return "eng";
        case "Chinese": return "chi";
        case "Hindi": return "hin";
        case "Spanish": return "spa";
        case "French": return "fre";
        case "Russian": return "rus";
        case "Japanese": return "jap";
        case "Korean": return "kor";
        case "German": return "ger";
        default: return "xxx";
    }
}