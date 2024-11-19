import { API } from "./API.js";

const lista = document.querySelector("[data-product]");

export default function constroiCard(imagem, nome, preco, id) {
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

async function listaProduto() {
  try {
    const produtos = await API.listaProdutos();

    produtos.forEach(produto =>  lista.appendChild(
      constroiCard(produto.imagem, produto.nome, produto.preco)));
  } catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar os produtos</h2>`
  }
}

listaProduto();