let listaDeItens = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  salvarItem();
});

function salvarItem() {
  const comprasItem = itensInput.value.toUpperCase();
  const checarDuplicado = listaDeItens.some(
    (elemento) => elemento.valor === comprasItem
  );

  if (checarDuplicado) {
    alert("O item já existe");
  } else {
    listaDeItens.push({ valor: comprasItem });
  }

  console.log(listaDeItens);
}
