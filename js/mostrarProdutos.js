import { API } from "./API.js";

const lista = document.querySelector("[data-product]");

export default function createCard(imagem, nome, preco, id) {
  const produto = document.createElement("li");
  produto.className = "products__card";
  produto.innerHTML = `
    <div class="product__image">
      <img src="${imagem}" alt="Imagem do produto">
    </div>
    <div class="product__info">
      <p>${nome}</p>
      <div class="product__price">
        <p>$ ${preco}</p>
        <button data-id="${id}">
          <img src="./assets/icons8-lixo.svg" alt="Deletar">
        </button>
      </div>
    </div>`

  return produto;
}

async function showProducts() {
  try {
    const produtos = await API.productsList();

    produtos.forEach(produto =>  lista.appendChild(
      createCard(produto.imagem, produto.nome, produto.preco, produto.id)));
  } catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar os produtos</h2>`
  }
}

showProducts();