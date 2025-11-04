// CRIE UMA LÓGICA ABAIXO
const prompt = require('prompt-sync')()

const producoes = []
let producao = 0

console.log("=== Sistema de Controle de Produção ===")
let diasRegistrados = parseInt(prompt("quantos dias serao registrados? "))
for(let i = 1; diasRegistrados >= i; i++){
    do{
        producao = parseInt(prompt(`Digite a quantidade produzida no dia ${i} `))
        if(typeof producao !== "number" || producao !== producao){
            console.log("digite algo!")
        }
    }while(typeof producao !== "number" || producao !== producao)
    producoes.push(producao)
}

console.log("--- RELATÓRIO DE PRODUÇÃO ---")
console.log(`Produções registradas: [ ${producoes} ]`)
let total = 0
for(let i = 0; i < producoes.length; i++){
    total += producoes[i]
}
console.log(`Total produzido: ${total} peças`)
let mediaDiaria = total / producoes.length
console.log(`Média diária: ${mediaDiaria}`)

let maior = producoes[0]
let menor = producoes[0]
for(let i = 1; i < producoes.length; i++){
    if(producoes[i] > maior){
        maior = producoes[i]
    }
    if(producoes[i] < menor){
        menor = producoes[i]
    }
}
console.log(`Maior produção: ${maior} (dia ${producoes.indexOf(maior) + 1})`)
console.log(`Menor produção: ${menor} (dia ${producoes.indexOf(menor) + 1})`)
producoes.sort((a, b) => a - b)
console.log(`Ordem crescente: [ ${producoes} ]`)
producoes.sort((a, b) => b - a)
console.log(`Ordem descrescente: [ ${producoes} ]`)
let metadeDaMaiorProducao = maior / 2
if(mediaDiaria >= metadeDaMaiorProducao){
    console.log("Produção estável!")
} else{
    console.log("Produção abaixo do ideal.")
}