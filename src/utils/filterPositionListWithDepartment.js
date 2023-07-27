// input: [{}]
// filter: { "departmentId": "" }, có thể null -> Trả về All
// output: [{}]

export function filterPositionListWithDepartment(input, filter) {
    if (filter === null) {
        return input
    }
    const output = input.filter(element => element.departmentId === filter.departmentId)
    return output
}