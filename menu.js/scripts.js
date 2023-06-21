// scripts.js

const addDishForm = document.getElementById('addDishForm');

addDishForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const dishName = document.getElementById('dishName').value;
  const dishDescription = document.getElementById('dishDescription').value;
  const dishPrice = parseFloat(document.getElementById('dishPrice').value);

  const dishData = {
    nome: dishName,
    descricao: dishDescription,
    preco: dishPrice
  };

  try {
    const response = await fetch('http://localhost:8080/api/menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dishData)
    });

    if (response.ok) {
      alert('Prato adicionado com sucesso!');
      addDishForm.reset();
    } else {
      alert('Erro ao adicionar o prato. Por favor, tente novamente.');
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert('Erro na requisição. Por favor, tente novamente.');
  }
});
