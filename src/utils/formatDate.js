// Input: "YYYY-MM-DDTHH:MM:SSZ"
// Output: "DD/MM/YYYY"
// slice(a,b) -> from a to b - 1

export function formatDate(input) {
    // const yyyy = input.slice(0,4)
    // const mm = input.slice(5,7)
    // const dd = input.slice(8,10)
    // return `${dd}/${mm}/${yyyy}`
    const date_draft = input.slice(0, 11) + "17" + input.slice(13) + ".000Z"
    const output = new Date(date_draft).toLocaleDateString('vi-VN', {
        day: '2-digit', 
        month: '2-digit',
        year: 'numeric'
    })
    // let newDate = inputdate.slice(0, 11) + "17" + inputdate.slice(13) + ".000Z"
    // newDate = new Date(newDate).toLocaleDateString()
    return output
}

export function formatDatetime(input) {
    // const yyyy = input.slice(0,4)
    // const mm = input.slice(5,7)
    // const dd = input.slice(8,10)
    // const HH = input.slice(11,13)
    // const MM = input.slice(14,16)
    // const SS = input.slice(17,19)
    // return `${dd}/${mm}/${yyyy} ${HH}:${MM}`
    const output = new Date(input + "Z").toLocaleDateString('vi-VN', {
        day: '2-digit', 
        month: '2-digit',
        year: 'numeric',
        hour: "2-digit",
        minute: "2-digit"
    })
    return output
}

export function formatToDate(input) {
    // const yyyy = input.slice(0,4)
    // const mm = input.slice(5,7)
    // const dd = input.slice(8,10)
    // const HH = input.slice(11,13)
    // const MM = input.slice(14,16)
    // const SS = input.slice(17,19)
    // return `${dd}/${mm}/${yyyy} ${HH}:${MM}`
    const output = new Date(input + "Z").toLocaleDateString('vi-VN', {
        day: '2-digit', 
        month: '2-digit',
        year: 'numeric',
    })
    return output
}