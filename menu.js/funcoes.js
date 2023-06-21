async function listarProdutos() {
    try {
        const response = await fetch("http://localhost:8080/api/menu", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        var lista = document.getElementById("lista");
        lista.innerHTML = "";
        result.forEach((produto) => {
            
            const divCol = document.createElement("div");
            divCol.className = "col-sm-6 mb-3 mb-sm-0 paddingCard";
          
            
            const divCard = document.createElement("div");
            divCard.className = "card";
          
            
            const divCardBody = document.createElement("div");
            divCardBody.className = "card-body";
          
            
            const h4CardTitle = document.createElement("h4");
            h4CardTitle.className = "card-title";
            h4CardTitle.textContent = `${produto.nome}`;
          
            
            const pCardText = document.createElement("p");
            pCardText.className = "card-text";
            pCardText.innerHTML = `<i>${produto.descricao}</i>`;
          
            
            const pPreco = document.createElement("p");
            pPreco.className = "card-text";
            pPreco.innerHTML = `<b>Preço:</b> ${produto.preco}`;
          
            
            const divCardBodyButtons = document.createElement("div");
            divCardBodyButtons.className = "card-body";
          
            
            const buttonAtualizarProduto = document.createElement("button");
            buttonAtualizarProduto.type = "button";
            buttonAtualizarProduto.className = "btn btn-outline-warning me-2";
            buttonAtualizarProduto.textContent = "Editar Informações";
            buttonAtualizarProduto.addEventListener("click", () => {
              getInfoProduto(produto.id);
            });
          

            const buttonDeletarProduto = document.createElement("button");
            buttonDeletarProduto.type = "button";
            buttonDeletarProduto.className = "btn btn-outline-danger me-2";
            buttonDeletarProduto.textContent = "Deletar Produto";
            buttonDeletarProduto.addEventListener("click", () => {
              deletarProduto(produto.id);
            });
          
            
            divCardBody.appendChild(h4CardTitle);
            divCardBody.appendChild(pCardText);
            divCardBody.appendChild(pPreco);
          
            divCardBodyButtons.appendChild(buttonAtualizarProduto);
            divCardBodyButtons.appendChild(buttonDeletarProduto);
          
            divCard.appendChild(divCardBody);
            divCard.appendChild(divCardBodyButtons);
          
            divCol.appendChild(divCard);
          
            
            document.getElementById("lista").appendChild(divCol);
        });
    } catch (erro) {
      console.log(erro);
    }
}

async function getInfoProduto(id) {
  try {
    const response = await fetch(`http://localhost:8080/api/menu/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const result = await response.json();
    document.getElementById('input-idProduto').value = id;
    document.getElementById('input-nomeProduto').value = result.nome;
    document.getElementById('input-descProduto').value = result.descricao;
    document.getElementById('input-precoProduto').value = result.preco;

  }catch (erro) {
    console.log(erro);
  }
}

async function cadastrarProduto() {
    const produto = {
        nome: document.getElementById('input-nomeProduto').value,
        descricao: document.getElementById('input-descProduto').value,
        preco: parseFloat(document.getElementById('input-precoProduto').value)
    };

    try {
        const response = await fetch("http://localhost:8080/api/menu", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });

        if (response.ok) {
            console.log('Produto cadastrado com sucesso');
            alert('Produto cadastrado com sucesso');
            listarProdutos();
        } else {
            console.error('Falha ao cadastrar o Produto:', response.status, response.statusText);
            alert('Falha ao cadastrar o Produto:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Erro na requisição de cadastro:', error);
        alert('Erro na requisição de cadastro:', error);
    }
}

async function atualizarProduto() {
    const id = document.getElementById('input-idProduto').value;
    const produto = {
        nome: document.getElementById('input-nomeProduto').value,
        descricao: document.getElementById('input-descProduto').value,
        preco: parseFloat(document.getElementById('input-precoProduto').value)
    };

    try {
        const response = await fetch(`http://localhost:8080/api/menu/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });

        if (response.ok) {
            console.log('Produto atualizado com sucesso');
            alert('Produto atualizado com sucesso');
            listarProdutos();
        } else {
            console.error('Falha ao atualizar o Produto:', response.status, response.statusText);
            alert('Falha ao atualizar o Produto:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Erro na requisição de atualização:', error);
        alert('Erro na requisição de atualização:', error);
    }
}

async function deletarProduto(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/menu/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('Produto excluído com sucesso');
            alert('Produto excluído com sucesso');
            listarProdutos();
        } else {
            console.error('Falha ao excluir o Produto:', response.status, response.statusText);
            alert('Falha ao excluir o Produto:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Erro na requisição de exclusão:', error);
        alert('Erro na requisição de exclusão:', error);
    }
}

function limpar() {
    document.getElementById('input-idProduto').value = '';
    document.getElementById('input-nomeProduto').value = '';
    document.getElementById('input-descProduto').value = '';
    document.getElementById('input-precoProduto').value = '';
}
