//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
// Essa função vai pegar o nome digitado e colocar na lista de nomes
function adicionarAmigo() {
    // Peguei o que foi digitado no campo do adiconarAmigo
    let nome = document.getElementById('amigo').value;
    //Verifica o nome digitado
    console.log('Nome digitado:', nome); 
    // Para validar a entrada preciso verificar se o usuário digitou alguma coisa
    if (nome == '') {
        // Se o campo estiver vazio, uma mensagem de erro é gerada
        alert('Por favor insira um nome'); 
    } else {
        // Se o valor for um valor válido, eu adiciono o nome da lista
        amigos.push(nome);
        //Verifica a lista de amigos
        console.log('Amigos:', amigos);
        mostrarAmigos();
        limparCampo();
    }
}
      
// Criando função limpar campo depois de adcionar o nome
 function limparCampo() {
// Pego o campo pelo id e deixo vazio
let campo = document. getElementById('amigo'); 
campo. value = '';
 }
// Função para mostrar os amigos na lista
function mostrarAmigos() {
// Pego a lista onde vou mostrar os amigos
let lista = document.getElementById('listaAmigos');
// Limpo a lista antes de mostrar tudo de novo
lista.innerHTML = ''; 
//Uso um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
for (let i = 0; i < amigos.length; i++) {
    // Crio um elemento li para cada amigo
    let item = document.createElement('li');
    // Coloco o nome do amigo dentro do li
    item.textContent = amigos[i];
    // Adiciono o item na lista
    lista.appendChild(item);
}
}
// Função para sortear um amigo
function sortearAmigo(){
    // Verifica se a função é chamada
    console.log('Sorteando amigo...');
    //Verificando se há amigos na lista
    if (amigos.length == 0) {
        alert('Não há amigos na lista para sortear.');
    } else {
        // Se tiver amigos, sorteio um número aleatório
        // O número precisa ser entre 0 e o total de amigos
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
        // Pego o amigo que está na posição sorteada
        let amigoSorteado = amigos[numeroSorteado];
        // Mostro resultado na tela
        mostrarResultado(amigoSorteado); 
    }
}
 // Função para mostrar o resultado do sorteio
 function mostrarResultado(amigo) {
    // Pego o elemento onde vou mostrar o resultado
    let resultado = document.getElementById('resultado');
    // Limpo o resultado
    resultado.innerHTML = ''; 
    resultado.textContent = amigo; // Mostra o amigo sorteado
 }     
