export function transferDatetime(input) {
    const dateObject = new Date(input.$d)
    const inputData = dateObject.toJSON()
    console.log("input data: ", inputData)
    console.log(typeof (inputData))
    return inputData
}

export function transferDatetimeBack(outputData) {
    // console.log("output data: ", outputData)
    // console.log(typeof (outputData))
    // const dateObject = new Date(outputData);
    // const output = dateObject.toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    // console.log("output: ", output)
    // return output
    const output = new Date(outputData + "Z").toLocaleString('vi-VN',
        {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit'
        })
    return output
}