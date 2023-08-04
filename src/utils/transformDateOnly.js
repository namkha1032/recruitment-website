function transformDateOnly(inputdate) {
    let newDate = inputdate.slice(0, 11) + "17" + inputdate.slice(13) + ".000Z"
    newDate = new Date(newDate).toLocaleDateString()
    return newDate
}

export default transformDateOnly