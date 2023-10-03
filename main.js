const form = document.getElementById('form-agenda');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroAgenda = document.getElementById('numero-agenda');

    if (nome.includes(inputNomeAgenda.value)){
        alert(`O nome ${inputNomeAgenda.value} já foi cadastrado. Por favor, escolha outro nome`);
    } else {
        nome.push(inputNomeAgenda.value);
        numero.push(parseFloat(inputNumeroAgenda.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputNumeroAgenda.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
