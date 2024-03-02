// Crie uma função que receba o valor de uma hora qualquer e exiba no console 
// uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

function mensagemHorario(){
   
   let horario = window.prompt("Digite uma hora qualquer:");
    if(horario >= 3 && horario < 12) {
        console.log(horario + "h, bom dia!");
    } else if(horario >=12 && horario < 18) {
        console.log(horario + "h, boa tarde!");
    } else {
        console.log(horario + "h, boa noite!");
    }
}

mensagemHorario(); 