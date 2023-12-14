// Adicionando propriedades em um objeto

const lenda = {
  nome: "Vinícius",
};

// neste exemplo é utilizado a notação de ponto
lenda.idade = 21;

// agora utilizaremos a notação de colchetes para adicionar um elemento em um objeto
lenda["altura"] = 1.82;

// aqui podemos ver como fica o objeto após adicionarmos esses elementos acima
console.log(lenda);

// aqui foi criado um template string com todas propriedades do objeto lenda.
console.log(
  `Meu nome é ${lenda.nome}, tenho ${lenda.idade} e ${lenda.altura} de altura.`
);

// Deletando chave e valor de objetos
const listaDeCompras = {
  item1: "arroz",
  item2: "feijão",
  item3: "macarrão",
};

delete listaDeCompras.item1;
console.log(listaDeCompras);


// Editando o valor de uma chave
listaDeCompras["item3"] = "peixe";
console.log(listaDeCompras);


// comparando valores
// no js só é possivel comparar se buscarmos o valor de uma objeto
console.log({}.value === {}.value);
