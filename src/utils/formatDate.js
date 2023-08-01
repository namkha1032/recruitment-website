// Input: "YYYY-MM-DDTHH:MM:SSZ"
// Output: "DD/MM/YYYY"
// slice(a,b) -> from a to b - 1

export function formatDate(input) {
    const yyyy = input.slice(0,4)
    const mm = input.slice(5,7)
    const dd = input.slice(8,10)
    return `${dd}/${mm}/${yyyy}`
}

export function formatDatetime(input) {
    const yyyy = input.slice(0,4)
    const mm = input.slice(5,7)
    const dd = input.slice(8,10)
    const HH = input.slice(11,13)
    const MM = input.slice(14,16)
    const SS = input.slice(17,19)
    return `${dd}/${mm}/${yyyy} ${HH}:${MM}`
}