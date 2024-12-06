const num = 8
let sequence = []
const fibs = (num) => {
    let prev = 0
    let next = 1
    for (i = 1; i <= num; i++){
        sequence.push(prev)
        let sum = prev + next
        prev = next
        next = sum
    }
    return sequence
}
console.log('fibs',fibs(num))

const fibsRec = (num) => {
    if (sequence.length === num) return sequence
    else {
        return sequence.shift(fibsRec(num - 1 ) + fibsRec(num - 2))
    }
}
console.log('fibsRec',fibsRec(num))