export function convertDate(originalDateString) {
    const originalDate = new Date(originalDateString + "Z"); // Assuming the input date is in UTC time
    const targetDate = new Date(originalDate.getTime() + 17 * 60 * 60 * 1000);
    return targetDate.toISOString();
}