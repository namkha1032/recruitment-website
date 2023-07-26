// Input: "YYYY-MM-DD"
// Output: "DD/MM/YYYY"
// slice(a,b) -> from a to b - 1

export function formatDate(input) {
    const yyyy = input.slice(0,4)
    const mm = input.slice(5,7)
    const dd = input.slice(8,10)
    return `${dd}/${mm}/${yyyy}`
}