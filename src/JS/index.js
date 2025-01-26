const botaoAvancar = document.getElementById("btn-avancar")
const botaoVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao")

let cartaoAtual = 0

botaoAvancar.addEventListener("click", () => {
    if (cartaoAtual >= cartoes.length -1) {
        cartaoAtual = -1
    }

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

botaoVoltar.addEventListener("click", () => {
    if (cartaoAtual === 0) {
        cartaoAtual = 7
    }

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
