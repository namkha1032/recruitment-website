export function getEventStatus(input) {
    const current_draft = new Date()
    const current = current_draft.toISOString()
    return (input < current)
}