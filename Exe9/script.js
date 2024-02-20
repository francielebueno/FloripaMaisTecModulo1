//Use um switch para exibir mensagens diferentes com base em uma condição.

let mes = window.prompt("Digite um mês:");
switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("É verão!");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("É outono!");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("É inverno!");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("É primavera!")
        break;
        default:
            console.log("Este mês não existe.")
}

