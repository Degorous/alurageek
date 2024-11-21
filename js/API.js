const base_url = "http://localhost:35003/produtos";

async function productsList() {
  const response = await fetch(base_url);
  const data = await response.json();

  return data;
}

async function createProduct(imagem, nome, preco) {
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

async function deleteProduct(id) {
  const response = await fetch(`${base_url}/${id}`, {
    method: 'DELETE',
  });

  alert('Produto deletado com sucesso');

  if (!response.ok) {
    throw new Error('Não foi possível deletar o produto');
  }
}

export const API = {
  productsList,
  createProduct,
  deleteProduct
}