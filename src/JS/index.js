const botaoAvancar = document.getElementById("btn-avancar")
const botaoVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao")

let cartaoAtual = 0

botaoAvancar.addEventListener("click", function () {
    if (cartaoAtual >= cartoes.length -1) {
        cartaoAtual = 0 
        
    }
    console.log(cartaoAtual);


    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

botaoVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
