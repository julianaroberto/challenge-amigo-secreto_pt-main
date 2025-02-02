// criando a array para receber os nomes
let amigos = [];

// function para adicionar nome a lista 
function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        atualizarLista();
        nomeInput.value = ""; // Limpa o campo de entrada
        nomeInput.focus(); // Mantém o cursor no campo
    } else {
        alert("Por favor, insira um nome.");
    }
}

// function para atualizar a lista com novos nomes 
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}
