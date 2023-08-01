

export function getNumOfCandidatePosition(input, candidatesPosition) {
    const output = candidatesPosition.filter(element => element.position.positionId === input)
    return output.length
}