function exibirMensagem () {
    alert("Bem-vindo(a) ao meu perfil!");
}

var coresDiversas = ['purple', 'blue', 'black'];

var elemento = document.querySelector('footer');

var indiceCorAtual = 0;

function alternarCoresPrimarias() {

    elemento.style.color = coresDiversas[indiceCorAtual];

    indiceCorAtual = (indiceCorAtual + 1) % coresDiversas.length;
}

setInterval(alternarCoresPrimarias, 1000);