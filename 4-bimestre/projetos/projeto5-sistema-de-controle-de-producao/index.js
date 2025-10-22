// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

console.log("=== Sistema de Controle de Produção ===")

let continuar = "S"
let dia = 0
let totalGeral = 0
let resumo = ""

do {
  console.log("--- Novo Turno ---")
  let meta = parseInt(prompt("Quantas peças devem ser produzidas no turno? "))
  let produzidas = 0
  dia++
  for (let i = 1; i <= meta; i++) {
    console.log(`Peça ${i} produzida com sucesso.`)
    produzidas++
  }
  if (produzidas === meta) {
    console.log("Meta alcançada!")
  } else {
    console.log("Meta não alcançada.")
  }
  totalGeral += produzidas
  resumo = `${resumo}Dia ${dia}: ${produzidas} peças produzidas `
  continuar = prompt("Deseja simular outro turno? (S/N) ").toUpperCase()
} while (continuar === "S")

console.log("Resumo dos dias anteriores:")
console.log(resumo)
console.log(`Total geral: ${totalGeral} peças`)
console.log("Encerrando sistema de produção...")