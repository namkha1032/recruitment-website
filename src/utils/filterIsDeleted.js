export function filterIsDeleted(input) {
    return input.filter(element => element.isDeleted === false)
}