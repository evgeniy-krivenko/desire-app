
export function arrayCreator(arr, size) {
    const len = arr.length;
    const chunkCount = Math.ceil(len / size)
    const chunkSize = Math.ceil(len / chunkCount)
    const resultArr = []
    let shift = [0, chunkSize]
    for (let i = 0; i < chunkCount; i++) {
        resultArr.push(arr.slice(...shift))
        shift[0] += chunkSize
        shift[1] += chunkSize
    }
    return resultArr
}


