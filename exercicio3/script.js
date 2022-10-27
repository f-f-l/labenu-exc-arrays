const nomeDoArrayOriginalCopia1 = [100, 150, 200, 250]
const nomeDoArrayOriginalCopia2 = nomeDoArrayOriginalCopia1.slice()
const nomeDoArrayOriginalCopia3 = nomeDoArrayOriginalCopia2.slice()

console.log(nomeDoArrayOriginalCopia1)
console.log(nomeDoArrayOriginalCopia2)
console.log(nomeDoArrayOriginalCopia3)

console.log(nomeDoArrayOriginalCopia1 == nomeDoArrayOriginalCopia2)
console.log(nomeDoArrayOriginalCopia2 == nomeDoArrayOriginalCopia3)

console.log(nomeDoArrayOriginalCopia2.pop())
console.log(nomeDoArrayOriginalCopia2)
console.log(nomeDoArrayOriginalCopia1)

console.log(`\n${nomeDoArrayOriginalCopia3}`)
console.log(nomeDoArrayOriginalCopia3.splice(1, 1))
console.log(nomeDoArrayOriginalCopia3)
console.log(nomeDoArrayOriginalCopia1)
