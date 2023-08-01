// filter: { status: [true, false, null] ~ [Finished, Upcoming]}

export function filterEventList(input, filter) {
    if (filter.status === null) {
        return input
    }
    else if (filter.status === "Finished") {
        return input.filter(element => element.Status === true)
    }
    else {
        return input.filter(element => element.Status === false)
    }
}