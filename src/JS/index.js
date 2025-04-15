const botaoAvancar = document.getElementById("btn-avancar");
const botaoVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener('click', () => {

        virarEMostrarFundoCarta(cartao);
    })
})

botaoAvancar.addEventListener("click", () => {

    proximoCartao();
    esconderCartaoSelecionado();
    mostrarCartao(cartaoAtual);
    verificarDescricao(cartoes[cartaoAtual]);
});

botaoVoltar.addEventListener("click", () => {

    cartaoAnterior();
    esconderCartaoSelecionado();
    mostrarCartao(cartaoAtual);
    verificarDescricao(cartoes[cartaoAtual]);
});

function proximoCartao() {
    cartaoAtual = (cartaoAtual + 1) % cartoes.length;
}

function cartaoAnterior() {
    cartaoAtual = (cartaoAtual - 1 + cartoes.length) % cartoes.length;
}

function virarEMostrarFundoCarta(cartao) {
    const cartaVirada = cartao.querySelector('.carta-virada');
    const descricao = cartao.querySelector('.descricao');

    cartao.classList.toggle("virar");
    cartaVirada.classList.toggle('mostrar-fundo-carta');

    if (cartao.classList.contains("virar")) {
        if (descricao) {
            descricao.classList.add('esconder');
        }
    } else {
        if (descricao) {
            descricao.classList.remove('esconder');
        }
    }
}

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");

    if (cartaoSelecionado) {
        cartaoSelecionado.classList.remove("selecionado");
        cartaoSelecionado.classList.remove("virar");

        const fundoCarta = cartaoSelecionado.querySelector('.carta-virada');
        if (fundoCarta) {
            fundoCarta.classList.remove("mostrar-fundo-carta");
        }
    }
}

function verificarDescricao(cartao) {
    const descricao = cartao.querySelector('.descricao');

    if (!cartao.classList.contains("virar") && descricao) {
        descricao.classList.remove('esconder');
    }
}