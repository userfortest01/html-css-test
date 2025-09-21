function efeitoBotao() {
    const botao = document.querySelector("button#click-me")

    botao.addEventListener('click', () => {
        alert("Botão clicado!")
    })
}

efeitoBotao()
