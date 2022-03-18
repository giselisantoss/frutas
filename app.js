const input=require("readline-sync")

const nomes=["banana", "gatinho", "brócolis"]

function imprimeMaiorEMenor(nomes) {

    for(let i = 0; i < nomes.length; i++) {
       console.log(`indice ${i} produtos ${nomes[i]}`) 
            
    }
}
console.log(imprimeMaiorEMenor(nomes))


