const base_url = "http://localhost:35003/produtos";

async function listaProdutos() {
  const response = await fetch(base_url);
  const data = await response.json();

  return data;
}

async function createProduto(imagem, nome, preco) {
  const response = await fetch(base_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      imagem,
      nome,
      preco
    })
  });
  if (!response.ok) {
    throw new Error('Não foi possível criar o produto');
  }

  const data = await response.json();

  return data;
}

export const API = {
  listaProdutos,
  createProduto,
}