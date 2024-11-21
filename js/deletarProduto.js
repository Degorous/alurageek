import { API } from "./API.js";

const lista = document.querySelector('[data-product]');

lista.addEventListener('click', async (event) => {
  const deleteButton = event.target.closest('button[data-id]');
  
  if (!deleteButton) return;

  const dialog = document.createElement('dialog');
  dialog.innerHTML = `
    <p>Tem certeza que deseja deletar o produto?</p>
    <br>
    <button class='button' id="delete-btn">Deletar</button>
    <button class='button' id="cancel-btn">Cancelar</button>
    `;

  document.body.appendChild(dialog);
  dialog.showModal();

  document.getElementById('delete-btn').addEventListener('click', async () => {
    try {
      await API.deleteProduct(deleteButton.dataset.id);
      window.location.reload();
    } catch (error) {
      alert('Erro ao deletar produto: ' + error);
    }

    dialog.close();
  });

  document.getElementById('cancel-btn').addEventListener('click', () => {
    dialog.close();
    window.location.reload();
  });

});