const input=require("readline-sync")

const objGato = {
    nome: "Mimi",
    pelagem: "vaquinha",
    peso: "6.6",
    miar: function(){
      return `o gato ${this.pelagem} diz miau`
    }
}
console.log(objGato.miar())


const objGato = {
    nome: "Mimi",
    pelagem: "vaquinha",
    peso: "6.6",
    miar: () => `o gato ${objGato.nome} diz: miau`
}
console.log(objGato.miar())

const objGato = {
    nome: "Mimi",
    pelagem: "vaquinha",
    peso: "6.6",
    miar: function(miado) {
      return `o gato ${this.pelagem} diz: ${miado}`
    }
}
console.log(objGato.miar("minhauuuu"))
