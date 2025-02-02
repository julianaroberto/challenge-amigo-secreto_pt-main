// criando a array para receber os nomes
let amigos = [];

// function para adicionar nome a lista e pegar o valor do campo input
function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

// Verificando se o campo não está vazio
    if (nome !== "") {
        amigos.push(nome); // Adicionando o nome no array
        atualizarLista();  // Chamando a function para atualizar os nomes na tela
        nomeInput.value = ""; // Limpa o campo de entrada
        nomeInput.focus(); // Mantém o cursor no campo
    } else {
        alert("Por favor, insira um nome."); 
    }
}

// function para atualizar a lista com novos nomes 
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Evitando que a lista fique duplicada quando um novo nome é adicionado
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    }); // Para cada nome na array, adicionamos um item a lista, que será adc ao ul.
}

// sorteando um nome da lista 
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return; // Verficando se a lista está vazia para exibir alerta, se for o caso
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gerando número aleatório entre 0 e o tamanho da array
    document.getElementById("resultado").textContent = "resultado: " + amigos[indiceSorteado]; // Pega o nome correspondente ao índice sorteado e exibe em tela
}