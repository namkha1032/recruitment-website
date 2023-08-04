// Status --> candidate_Status,
// Priority --> company_Status,

export function filterInterviewList(input, departmentId, positionId, candidate_Status, company_Status) {
    if (departmentId === null && candidate_Status === null) {
        return input
    }
    else if (departmentId !== null && positionId === null && candidate_Status === null) {
        return input.filter(element => element.DepartmentId === departmentId)
    }
    else if (departmentId !== null && positionId !== null && candidate_Status === null) {
        return input.filter(element => element.DepartmentId === departmentId && element.PositionId === positionId)
    }
    else if (departmentId !== null && positionId !== null && candidate_Status !== null && company_Status === null) {
        return input.filter(element => element.DepartmentId === departmentId && element.PositionId === positionId && element.Status === candidate_Status)
    }
    else if (departmentId !== null && positionId !== null && candidate_Status !== null && company_Status !== null) {
        return input.filter(element => element.DepartmentId === departmentId && element.PositionId === positionId && element.Status === candidate_Status && element.Priority === company_Status)
    }
    else if (departmentId === null && candidate_Status !== null && company_Status !== null) {
        return input.filter(element => element.Status === candidate_Status && element.Priority === company_Status)
    }
    else if (departmentId !== null && positionId === null && candidate_Status !== null && company_Status !== null) {
        return input.filter(element => element.DepartmentId === departmentId && element.Status === candidate_Status && element.Priority === company_Status)
    }
    else if (departmentId === null && candidate_Status !== null && company_Status === null) {
        return input.filter(element => element.Status === candidate_Status)
    }
    else if (departmentId !== null && positionId === null && candidate_Status !== null && company_Status === null) {
        return input.filter(element => element.DepartmentId === departmentId && element.Status === candidate_Status)
    }
    return []
}