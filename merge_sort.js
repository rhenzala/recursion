const inputArr = [105, 79, 100, 110];
let result = []

const mergeSort = (arr) => {
    let n = arr.length
    if (n === 1) result.push(arr[0])
    else {
        let left = arr.toSpliced(n/2, n/2).toSorted((a, b) => a-b);
        mergeSort(left)
        let right = arr.toSpliced(0, n/2).toSorted((a,b) => a-b);
        mergeSort(right)    
    }
    return result.toSorted((a,b) => a-b)
}

console.log('Merge Sort: ',mergeSort(inputArr))