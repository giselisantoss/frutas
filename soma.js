const input=require("readline-sync")

const numeros=[7, 26, 25]

function soma() {
    let  total = 0
    for (let i = 0; i < numeros.length; i++) {
     total += numeros[i]
    }
    return total
} 

console.log(soma(numeros))
