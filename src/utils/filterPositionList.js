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
        return input.filter(element => element.department.departmentId === filter.departmentId)
    }
    else if (filter.departmentId === null) {
        if (filter.status === "Active") {
            return input.filter(element => element.isDeleted === false)
        }
        else {
            return input.filter(element => element.isDeleted === true)
        }
    }
    else {
        if (filter.status === "Active") {
            return input.filter(element => element.isDeleted === false && element.department.departmentId === filter.departmentId)
        }
        else {
            return input.filter(element => element.isDeleted === true && element.department.departmentId === filter.departmentId)
        }
    }
}