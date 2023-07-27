// input: [{}]
// filter: 
// { 
//  departmentId: "",
//  status: ["Active", "Inactive"]
// }
// output: [{}]

export function filterPositionList(input, filter) {
    if (filter.departmentId === null && filter.status === null) {
        return input
    }
    else if (filter.status === null) {
        return input.filter(element => element.departmentId === filter.departmentId)
    }
    else if (filter.departmentId === null) {
        if (filter.status === "Active") {
            return input.filter(element => element.isDeleted === true)
        }
        else {
            return input.filter(element => element.isDeleted === false)
        }
    }
    else {
        if (filter.status === "Active") {
            return input.filter(element => element.isDeleted === true && element.departmentId === filter.departmentId)
        }
        else {
            return input.filter(element => element.isDeleted === false && element.departmentId === filter.departmentId)
        }
    }
}