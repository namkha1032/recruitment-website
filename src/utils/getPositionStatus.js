export function getPositionStatus(input){
    const current_date = new Date()
    const date = current_date.toISOString()
    return (input < date)
}