import { API } from "./API.js";

const form = document.querySelector("[data-form]");

async function criarProduto(event) {
  event.preventDefault();

  const nome = document.querySelector("[data-name]").value;
  const preco = document.querySelector("[data-preco]").value;
  const imagem = document.querySelector("[data-image]").value;

try {
    await API.createProduto(imagem, nome, preco);
    alert('Produto criado com sucesso');
} catch (error) {
    alert("Erro ao criar produto: ", error);
}
}

form.addEventListener("submit", (event) => criarProduto(event));