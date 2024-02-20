// Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, negativo ou zero. 
// Exiba os valores no console.log().

function verificarValor(numero){
if(numero > 0) {
    console.log(`O número ${numero} é positivo.`);

} else if (numero < 0){
    console.log(`O número ${numero} é negativo.`);

 } else {
        console.log(`O número ${numero} é 0.`)
    }
}

verificarValor(1)
verificarValor(-18)
verificarValor(0)