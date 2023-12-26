let listaDeItens = [];
let itemAEditar = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");
const ulItensComprados = document.getElementById("itens-comprados");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  salvarItem();
  mostrarItens();
  itensInput.focus();
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

  itensInput.value = "";
}

function mostrarItens() {
  ulItens.innerHTML = "";
  ulItensComprados.innerHTML = "";
  listaDeItens.forEach((elemento, index) => {
    if (elemento.checar) {
      ulItensComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="is-clickable" />  
                    <span class="itens-comprados is-size-5">${elemento.valor}</span>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
        `;
    } else {
      ulItens.innerHTML += `

            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${elemento.valor}"></input>
                </div>
                <div>
                    <button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button> <i class="fa-regular is-clickable
                      fa-pen-to-square editar">
                    </i>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
        `;
    }
  });

  const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

  inputsCheck.forEach((i) => {
    i.addEventListener("click", (evento) => {
      const valorDoElemento =
        evento.target.parentElement.parentElement.getAttribute("data-value");
      listaDeItens[valorDoElemento].checar = evento.target.checked;
      mostrarItens();
    });
  });

  const deletarObjetos = document.querySelectorAll(".deletar");

  deletarObjetos.forEach((i) => {
    i.addEventListener("click", (evento) => {
      const valorDoElemento =
        evento.target.parentElement.parentElement.getAttribute("data-value");
      listaDeItens.splice(valorDoElemento, 1);
      mostrarItens();
    });
  });

  const editarItens = document.querySelectorAll(".editar");

  editarItens.forEach((i) => {
    i.addEventListener("click", (evento) => {
      itemAEditar =
        evento.target.parentElement.parentElement.getAttribute("data-value");
      mostrarItens();
    });
  });
}

function salvarEdicao() {
  const itemEditado = document.querySelector(
    `[data-value="${itemAEditar}"] input[type="text"]`
  );
  console.log(itemEditado.value);
    listaDeItens[itemAEditar].valor = itemEditado.value;
    console.log(listaDeItens)
    itemAEditar =  -1;
    mostrarItens();
}
