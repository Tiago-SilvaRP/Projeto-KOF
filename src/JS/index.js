const botaoAvancar = document.getElementById("btn-avancar")
const botaoVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0

cartoes.forEach(cartao => {
    cartao.addEventListener('click', () => {
        
        virarEMostrarFundoCarta(cartao)
        esconderDescricaoCartao(cartao)
    })
    
})

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

function virarEMostrarFundoCarta(cartao) {
    const cartaVirada = cartao.querySelector('.carta-virada')
    cartao.classList.toggle("virar")
    cartaVirada.classList.toggle('mostrar-fundo-carta')
}

function esconderDescricaoCartao(cartao) {
    const descricao = cartao.querySelector('.descricao')
    descricao.classList.toggle('esconder')
}

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

