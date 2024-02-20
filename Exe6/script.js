// Crie 3 objetos com propriedades representando informações pessoais 
// (nome, idade, nacionalidade e profissão) e exiba essas informações com um console.log para cada objeto.

var objeto1 = {
    nome: "Romulo",
    idade: 37,
    nacionalidade: "brasileiro",
    profissao: "analista de TI"
};

var objeto2 = {
    nome: "Franciele",
    idade: 36,
    nacionalidade: "brasileira",
    profissao: "jornalista"
};
var objeto3 = {
    nome: "Noah",
    idade: 100,
    nacionalidade: "inglês",
    profissao: "aposentado"
};

function imprimirDadosObjeto(objeto){
    console.log(` ${objeto.nome} é uma pessoa de ${objeto.idade} anos, ${objeto.nacionalidade}, ${objeto.profissao}`);
}

imprimirDadosObjeto(objeto1);
imprimirDadosObjeto(objeto2);
imprimirDadosObjeto(objeto3);